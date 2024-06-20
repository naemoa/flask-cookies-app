document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from Flask widget endpoint
    fetch('https://app.ceralda.com/widget?id=popup-widget')
        .then(response => {
            if (!response.ok) {
                throw new Error('Widget not found');
            }
            return response.json();
        })
        .then(widgetData => {
            // Create HTML for the widget
            var widgetContainer = document.createElement('div');
            widgetContainer.classList.add('widget-container');

            var titleElement = document.createElement('h2');
            titleElement.textContent = widgetData.title;

            var contentElement = document.createElement('p');
            contentElement.textContent = widgetData.content;

            widgetContainer.appendChild(titleElement);
            widgetContainer.appendChild(contentElement);

            // Append widget to the document
            document.body.appendChild(widgetContainer);
        })
        .catch(error => console.error('Error fetching widget:', error));
});
