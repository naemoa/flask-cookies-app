from flask import Flask, render_template, request, render_template_string, make_response, jsonify, send_from_directory, url_for
#from flask_cors import CORS
import requests
import os
import re
app = Flask(__name__)


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
    return render_template('editor.html', title='Widgets')

@app.route('/tables')
def tables():
    return render_template('tables.html', title='Tables')

@app.route('/billing')
def billing():
    return render_template('billing.html', title='Billing')

@app.route('/dashboard')
def rtl():
    return render_template('dashboard.html', title='Dashboard')

@app.route('/profile')
def profile():
    return render_template('profile.html', title='Profile')

@app.route('/editor')
def editor():
    return render_template('editor.html', title='Editor')

@app.route('/sign-in')
def sign_in():
    return render_template('sign-in.html', title='Sign In')

@app.route('/sign-up')
def sign_up():
    return render_template('sign-up.html', title='Sign Up')

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

