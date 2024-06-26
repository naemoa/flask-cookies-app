document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var widgetId = urlParams.get('id');

    fetch(`https://app.ceralda.com/widget?id=${widgetId}`)
        .then(response => response.json())
        .then(widgetData => {
            if (widgetData.error) {
                throw new Error(widgetData.error);
            }

            // Create HTML for the widget
            var widgetContainer = document.createElement('div');
            widgetContainer.classList.add('widget-container');

            var titleElement = document.createElement('h2');
            titleElement.textContent = widgetData.title;

            var contentElement = document.createElement('p');
            contentElement.textContent = widgetData.content;

            widgetContainer.appendChild(titleElement);
            widgetContainer.appendChild(contentElement);

            // Append widget to the body
            document.body.appendChild(widgetContainer);
        })
        .catch(error => console.error('Error fetching widget:', error));
});
