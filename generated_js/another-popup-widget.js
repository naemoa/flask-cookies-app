
        // JavaScript code to inject HTML and CSS for another-popup-widget
        (function() {
            var html = `<div id="another-popup-widget" style="display:none;">
                <h1>Another Popup</h1>
                <p>This is the content of another popup widget.</p>
            </div>`;
            var css = `#another-popup-widget {
                display: none;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }`;
            var js = `document.getElementById('another-popup-widget').style.display = 'block';`;

            // Inject CSS
            var style = document.createElement('style');
            style.innerHTML = css;
            document.head.appendChild(style);

            // Inject HTML
            document.body.insertAdjacentHTML('beforeend', html);

            // Execute widget JS
            eval(js);
        })();
        