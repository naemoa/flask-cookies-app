
        // JavaScript code to inject HTML and CSS for popup-widget
        (function() {
            var html = `<div class="popup-widget" id="popup-widget">
                                        <div class="card bg-gradient-dark move-on-hover">
                                                        <div class="card-body">
                                                            <div class="d-flex">
                                                                <h5 class="mb-0 text-white">Accept <i class="fas fa-solid fa-cookie-bite"></i> ?</h5>
                                                            </div>
                                                            <p class="text-white mb-0">We use cookies to offer the best experience to you</p>
                                                        </div>
                                                        <div class=" justify-content-center align-items-center d-flex"> <a href="#" class="btn  btn-white btn-sm w-80 mb-3">OKAY</a></div>
                                                    </div>
                                                </div>`;
            var css = `#popup-widget {
    display: none;
    position: fixed;
    z-index: .9;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}`;
            var js = `
            document.getElementById('popup-widget').style.display = 'block';
        `;

            // Inject CSS
            var style = document.createElement('style');
            style.innerHTML = css;
            document.head.appendChild(style);

            // Inject HTML
            document.body.insertAdjacentHTML('beforeend', html);

            // Execute widget JS
            eval(js);
        })();
        