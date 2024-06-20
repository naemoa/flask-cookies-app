from flask import Flask, render_template, request, render_template_string, make_response, jsonify
#from flask_cors import CORS
import requests

app = Flask(__name__)
#CORS(app)
# Dummy widget HTML content
widgets = {
    "popup-widget": """
        <div id="popup-widget">
            <h1>Popup Widget</h1>
            <p>This is the content of the popup widget.</p>
            <style>
                #popup-widget {
                    display: block;
                    position: fixed;
                    z-index: 9999;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    padding: 20px;
                    border: 2px solid black;
                }
            </style>
        </div>
    """,
    "another-popup-widget": """
        <div id="another-popup-widget">
            <h1>Another Popup Widget</h1>
            <p>This is the content of another popup widget.</p>
            <style>
                #another-popup-widget {
                    display: block;
                    position: fixed;
                    z-index: 9999;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    padding: 20px;
                    border: 2px solid black;
                }
            </style>
        </div>
    """
    }

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
    return render_template('editor.html', title='Dashboard')

@app.route('/tables')
def tables():
    return render_template('tables.html', title='Tables')

@app.route('/billing')
def billing():
    return render_template('billing.html', title='Billing')

@app.route('/rtl')
def rtl():
    return render_template('rtl.html', title='RTL')

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


@app.route('/widget')
def widget():
    widget_id = request.args.get('id')
    
    widget_html = widgets.get(widget_id, "Invalid widget ID")
    
    if widget_html == "Invalid widget ID":
        response = make_response(jsonify({"error": "Invalid widget ID"}), 400)
    else:
        response = make_response(render_template_string(widget_html))

    # Manually add CORS headers
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return response
if __name__ == '__main__':
    app.run(debug=True)

