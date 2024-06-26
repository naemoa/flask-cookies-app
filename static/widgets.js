// widgets.js

async function fetchPopupHTML() {
    try {
        const response = await fetch('popup.html');
        if (!response.ok) {
            throw new Error('Failed to fetch popup.html');
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching popup.html:', error);
        return '';
    }
}

async function fetchPopupCSS() {
    try {
        const response = await fetch('popup.css');
        if (!response.ok) {
            throw new Error('Failed to fetch popup.css');
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching popup.css:', error);
        return '';
    }
}

async function loadPopupWidgets() {
    const htmlContent = await fetchPopupHTML();
    const cssContent = await fetchPopupCSS();

    // Assuming popup.html contains specific IDs for each widget, modify as needed
    const iframe = document.getElementById("iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Inject CSS
    const styleElement = iframeDocument.createElement('style');
    styleElement.textContent = cssContent;
    iframeDocument.head.appendChild(styleElement);

    // Inject HTML
    iframeDocument.body.innerHTML = htmlContent;
}

// Usage example: Call loadPopupWidgets() when you want to load the widgets into the iframe
loadPopupWidgets();

// widgets.js

function loadWidget(widgetId) {
    const scriptElement = document.createElement('script');
    scriptElement.src = `http://127.0.0.1:5000/widget?id=${widgetId}`;
    scriptElement.async = true;
    document.head.appendChild(scriptElement);
}
