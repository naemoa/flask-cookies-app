from flask import Flask, render_template, request, render_template_string, make_response, jsonify
#from flask_cors import CORS
import requests

app = Flask(__name__)
#CORS(app)
# Dummy widget HTML content


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


# Example route for widget data
@app.route('/widget')
def widget():
    widget_id = request.args.get('id')

    if widget_id == 'popup-widget1':
        # Example data for the popup widget
        widget_data = {
            'title': 'Popup Widget 1',
            'content': 'This is the content for popup widget 1.'
        }
        return jsonify(widget_data)
    elif widget_id == 'popup-widget2':
        # Example data for another widget
        widget_data = {
            'title': 'Popup Widget 2',
            'content': 'This is the content for popup widget 2.'
        }
        return jsonify(widget_data)
    else:
        return jsonify({'error': 'Widget not found'}), 404

# Route to serve embedding JavaScript
@app.route('/widget/embed')
def embed_widget():
    widget_id = request.args.get('id')
    return render_template_string("""
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        var widgetId = "{{ widget_id }}";
        fetch('https://app.ceralda.com/widget?id=' + widgetId)
            .then(response => response.json())
            .then(widgetData => {
                if (widgetData.error) {
                    throw new Error(widgetData.error);
                }
                
                var widgetContainer = document.createElement('div');
                widgetContainer.classList.add('widget-container');
                
                var titleElement = document.createElement('h2');
                titleElement.textContent = widgetData.title;
                
                var contentElement = document.createElement('p');
                contentElement.textContent = widgetData.content;
                
                widgetContainer.appendChild(titleElement);
                widgetContainer.appendChild(contentElement);
                
                document.body.appendChild(widgetContainer);
            })
            .catch(error => console.error('Error fetching widget:', error));
    });
    </script>
    """, widget_id=widget_id)

if __name__ == '__main__':
    app.run(debug=True)

