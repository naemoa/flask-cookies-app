from flask import Flask, render_template, request, render_template_string, make_response, jsonify, send_from_directory, url_for, flash, redirect
import requests
import os
import re

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flask_wtf import CSRFProtect
from email_validator import validate_email, EmailNotValidError  
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY') or 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)  # Add this line
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'
csrf = CSRFProtect(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}')"

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    agree = BooleanField('I agree to the Terms and Conditions', validators=[DataRequired()])
    submit = SubmitField('Register')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('That username is taken. Please choose a different one.')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('That email is taken. Please choose a different one.')

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

@app.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    login_error = False  # Initialize login_error variable
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
            login_error = True
    return render_template('login.html', title='Login', form=form, login_error=login_error)

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html', title='Dashboard')


# Directory to store generated JavaScript files
js_files_dir = os.path.join(app.root_path, 'generated_js')

if not os.path.exists(js_files_dir):
    os.makedirs(js_files_dir)

def read_widget_content(widget_id):
    widget_file_path = os.path.join(app.root_path, 'templates', 'popup.html')
    with open(widget_file_path, 'r') as file:
        lines = file.readlines()
    
    start_html = f'<!-- {widget_id} HTML start -->'
    end_html = f'<!-- {widget_id} HTML end -->'
    
    html_content = []
    in_html = False
    
    for line in lines:
        if start_html in line:
            in_html = True
            continue
        if end_html in line:
            in_html = False
        
        if in_html:
            html_content.append(line)
    
    html_content = ''.join(html_content).strip()
    
    return html_content

def read_general_css():
    css_file_path = os.path.join(app.root_path, 'static', 'popup.css')
    with open(css_file_path, 'r') as file:
        css_content = file.read()
    return css_content


@app.route('/popup')
def popup():
    website_url = request.args.get('websiteURL')
    if website_url:
        try:
            page_content = requests.get(website_url).text
        except requests.exceptions.RequestException as e:
            page_content = f"<h3>Error: {e}"
    else:
        page_content = '<h3>No website preview available.</h3>'
    return render_template('popup.html', page_content=page_content, website_url=website_url)

@app.route('/')
def index():
    return render_template('editor.html', title='Editor')

@app.route('/tables')
def tables():
    return render_template('tables.html', title='Tables')

@app.route('/billing')
def billing():
    return render_template('billing.html', title='Billing')



@app.route('/profile')
def profile():
    return render_template('profile.html', title='Profile')

@app.route('/editor')
def editor():
    return render_template('editor.html', title='Editor')

# @app.route('/login')
# def login():
#     return render_template('login.html', title='Login' )

# @app.route('/register')
# def register():
#     return render_template('register.html', title='Register' )
    


# @app.route('/generated_js/<path:path>')
# def send_js(path):
#     return send_from_directory('generated_js', path)


@app.route('/widget/<widget_id>.js', methods=['GET'])
def serve_widget_js(widget_id):
    html_content = read_widget_content(widget_id)
    css_content = read_general_css()
    
    if html_content and css_content:
        js_content = f"""
        // JavaScript code to inject HTML and CSS for {widget_id}
        (function() {{
            var html = `{html_content}`;
            var css = `{css_content}`;
            var js = `
            document.getElementById('{widget_id}').style.display = 'block';
        `;

            // Inject CSS
            var style = document.createElement('style');
            style.innerHTML = css;
            document.head.appendChild(style);

            // Inject HTML
            document.body.insertAdjacentHTML('beforeend', html);

            // Execute widget JS
            eval(js);
        }})();
        """
        js_filename = f"{widget_id}.js"
        js_filepath = os.path.join(js_files_dir, js_filename)

        with open(js_filepath, 'w') as js_file:
            js_file.write(js_content)

        return send_from_directory(js_files_dir, js_filename, mimetype='application/javascript')
    else:
        return jsonify({"error": "Widget not found or CSS file missing"}), 404



if __name__ == '__main__':
    app.run(debug=True)


