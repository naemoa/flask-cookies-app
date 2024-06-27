
        // JavaScript code to inject HTML and CSS for popup-widget3
        (function() {
            var html = `<div class="popup-widget3" id="popup-widget3"> 
  <div class="card bg-gradient-faded-primary move-on-hover align-items-start">
                                                        <div class="cursor-pointer">
                                                            
                                                            <div class="card-body">
                                                                <div class="d-flex">
                                                                    <h5 class="mb-0 text-white">Accept <i class="fas fa-solid fa-cookie-bite"></i> ?</h5>
                                                                </div>                              <p class="text-white mb-0">We use cookies to offer the best experience to you</p>
                                <div class="d-flex mt-2">
                                                                    <button class="btn bg-gradient-dark w-1001 px-3 mb-1 active" data-class="bg-transparent" onclick="document.getElementById('popup-widget3').style.display = 'none';">Deny</button>
                                                                    <button class="btn bg-gradient-success w-1001 px-3 mb-1 ms-2" data-class="bg-white" onclick="document.getElementById('popup-widget3').style.display = 'none';">Accept</button>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
      </div>`;
            var css = `.preview_container { max-width: 90%; margin: 50px auto; padding: 20px; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; border-radius: 5px; }
iframe { width: 100%; height: 300px; border: none; margin-top: 20px; }
.popup-widget { display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget1 { display: none; position: absolute; top: 40%; left: 60%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget2 { display: none; position: absolute; top: 30%; left: 70%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget3 { display: none; position: absolute; top: 70%; left: 30%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget4 { display: none; position: absolute; top: 60%; left: 40%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget5 { display: none; position: absolute; top: 70%; left: 30%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget6 { display: none; position: absolute; top: 80%; left: 20%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget7 { display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget8 { display: none; position: absolute; top: 50%; left: 60%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget9 { display: none; position: absolute; top: 50%; left: 70%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget10 { display: none; position: absolute; top: 50%; left: 80%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget11 { display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget12 { display: none; position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget13 { display: none; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget14 { display: none; position: absolute; top: 70%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget15 { display: none; position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget16 { display: none; position: absolute; top: 80%; left: 50%; transform: translate(-50%, -50%); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; z-index: 9999; border-radius: 5px; }
.popup-widget h2, .popup-widget1 h2 { font-size: 24px; margin-bottom: 10px; }
.popup-widget p, .popup-widget1 p { font-size: 16px; line-height: 1.5; margin-bottom: 10px; }
.popup-widget button, .popup-widget1 button { padding: 10px 20px; background-color: rgb(0, 123, 255); color: rgb(255, 255, 255); border: none; border-radius: 5px; cursor: pointer; }
.popup-widget button:hover, .popup-widget1 button:hover { background-color: rgb(0, 86, 179); }
:root { --bs-blue: #63B3ED; --bs-indigo: #596CFF; --bs-purple: #6f42c1; --bs-pink: #d63384; --bs-red: #F56565; --bs-orange: #fd7e14; --bs-yellow: #FBD38D; --bs-green: #81E6D9; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-primary: #cb0c9f; --bs-secondary: #8392AB; --bs-success: #82d616; --bs-info: #17c1e8; --bs-warning: #fbcf33; --bs-danger: #ea0606; --bs-light: #e9ecef; --bs-dark: #344767; --bs-white: #fff; --bs-font-sans-serif: Open Sans; --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); }
*, ::before, ::after { box-sizing: border-box; }
@media (prefers-reduced-motion: no-preference) {
  :root { scroll-behavior: smooth; }
}
body { margin: 0px; font-family: var(--bs-font-sans-serif); font-size: 1rem; font-weight: 400; line-height: 1.5; color: rgb(103, 116, 142); background-color: rgb(255, 255, 255); text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
hr { margin: 1rem 0px; color: inherit; background-color: currentcolor; border: 0px; opacity: 0.25; }
hr:not([size]) { height: 1px; }
h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 { margin-top: 0px; margin-bottom: 0.5rem; font-weight: 400; line-height: 1.2; color: rgb(52, 71, 103); }
h1, .h1 { font-size: calc(1.425rem + 2.1vw); }
@media (min-width: 1200px) {
  h1, .h1 { font-size: 3rem; }
}
h2, .h2 { font-size: calc(1.35rem + 1.2vw); }
@media (min-width: 1200px) {
  h2, .h2 { font-size: 2.25rem; }
}
h3, .h3 { font-size: calc(1.3125rem + 0.75vw); }
@media (min-width: 1200px) {
  h3, .h3 { font-size: 1.875rem; }
}
h4, .h4 { font-size: calc(1.275rem + 0.3vw); }
@media (min-width: 1200px) {
  h4, .h4 { font-size: 1.5rem; }
}
h5, .h5 { font-size: 1.25rem; }
h6, .h6 { font-size: 1rem; }
p { margin-top: 0px; margin-bottom: 1rem; }
abbr[title], abbr[data-bs-original-title] { text-decoration: underline dotted; cursor: help; text-decoration-skip-ink: none; }
address { margin-bottom: 1rem; font-style: normal; line-height: inherit; }
ol, ul { padding-left: 2rem; }
ol, ul, dl { margin-top: 0px; margin-bottom: 1rem; }
ol ol, ul ul, ol ul, ul ol { margin-bottom: 0px; }
dt { font-weight: 600; }
dd { margin-bottom: 0.5rem; margin-left: 0px; }
blockquote { margin: 0px 0px 1rem; }
b, strong { font-weight: 700; }
small, .small { font-size: 0.875em; }
mark, .mark { padding: 0.2em; background-color: rgb(252, 248, 227); }
sub, sup { position: relative; font-size: 0.75em; line-height: 0; vertical-align: baseline; }
sub { bottom: -0.25em; }
sup { top: -0.5em; }
a { color: rgb(203, 12, 159); text-decoration: none; }
a:hover { color: rgb(131, 8, 102); text-decoration: none; }
a:not([href]):not([class]), a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
pre, code, kbd, samp { font-family: var(--bs-font-monospace); font-size: 1em; direction: ltr; unicode-bidi: bidi-override; }
pre { display: block; margin-top: 0px; margin-bottom: 1rem; overflow: auto; font-size: 0.875em; }
pre code { font-size: inherit; color: inherit; word-break: normal; }
code { font-size: 0.875em; color: rgb(214, 51, 132); overflow-wrap: break-word; }
a > code { color: inherit; }
kbd { padding: 0.2rem 0.4rem; font-size: 0.875em; color: rgb(255, 255, 255); background-color: rgb(33, 37, 41); border-radius: 0.25rem; }
kbd kbd { padding: 0px; font-size: 1em; font-weight: 600; }
figure { margin: 0px 0px 1rem; }
img, svg { vertical-align: middle; }
table { caption-side: bottom; border-collapse: collapse; }
caption { padding-top: 0.5rem; padding-bottom: 0.5rem; color: rgb(108, 117, 125); text-align: left; }
th { text-align: -webkit-match-parent; }
thead, tbody, tfoot, tr, td, th { border-color: inherit; border-style: solid; border-width: 0px; }
label { display: inline-block; }
button { border-radius: 0px; }
button:focus:not(:focus-visible) { outline: 0px; }
input, button, select, optgroup, textarea { margin: 0px; font-family: inherit; font-size: inherit; line-height: inherit; }
button, select { text-transform: none; }
[role="button"] { cursor: pointer; }
select { overflow-wrap: normal; }
select:disabled { opacity: 1; }
[list]::-webkit-calendar-picker-indicator { display: none; }
button, [type="button"], [type="reset"], [type="submit"] { appearance: button; }
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) { cursor: pointer; }
textarea { resize: vertical; }
fieldset { min-width: 0px; padding: 0px; margin: 0px; border: 0px; }
legend { float: left; width: 100%; padding: 0px; margin-bottom: 0.5rem; font-size: calc(1.275rem + 0.3vw); line-height: inherit; }
@media (min-width: 1200px) {
  legend { font-size: 1.5rem; }
}
legend + * { clear: left; }
::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-year-field { padding: 0px; }
::-webkit-inner-spin-button { height: auto; }
[type="search"] { outline-offset: -2px; appearance: textfield; }
::-webkit-search-decoration { appearance: none; }
::-webkit-color-swatch-wrapper { padding: 0px; }
::file-selector-button { font: inherit; }
::-webkit-file-upload-button { font: inherit; appearance: button; }
output { display: inline-block; }
iframe { border: 0px; }
summary { display: list-item; cursor: pointer; }
progress { vertical-align: baseline; }
[hidden] { display: none !important; }
.lead { font-size: 1.25rem; font-weight: 400; }
.display-1 { font-size: calc(1.625rem + 4.5vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-1 { font-size: 5rem; }
}
.display-2 { font-size: calc(1.575rem + 3.9vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-2 { font-size: 4.5rem; }
}
.display-3 { font-size: calc(1.525rem + 3.3vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-3 { font-size: 4rem; }
}
.display-4 { font-size: calc(1.475rem + 2.7vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-4 { font-size: 3.5rem; }
}
.display-5 { font-size: calc(1.425rem + 2.1vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-5 { font-size: 3rem; }
}
.display-6 { font-size: calc(1.375rem + 1.5vw); font-weight: 300; line-height: 1.2; }
@media (min-width: 1200px) {
  .display-6 { font-size: 2.5rem; }
}
.list-unstyled { padding-left: 0px; list-style: none; }
.list-inline { padding-left: 0px; list-style: none; }
.list-inline-item { display: inline-block; }
.list-inline-item:not(:last-child) { margin-right: 0.5rem; }
.initialism { font-size: 0.875em; text-transform: uppercase; }
.blockquote { margin-bottom: 1rem; font-size: 1.25rem; }
.blockquote > :last-child { margin-bottom: 0px; }
.blockquote-footer { margin-top: -1rem; margin-bottom: 1rem; font-size: 0.875em; color: rgb(108, 117, 125); }
.blockquote-footer::before { content: "— "; }
.img-fluid { max-width: 100%; height: auto; }
.img-thumbnail { padding: 0.25rem; background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 226, 230); border-radius: 0.5rem; max-width: 100%; height: auto; }
.figure { display: inline-block; }
.figure-img { margin-bottom: 0.5rem; line-height: 1; }
.figure-caption { font-size: 0.875em; color: rgb(108, 117, 125); }
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl { width: 100%; padding-right: var(--bs-gutter-x, 1.5rem); padding-left: var(--bs-gutter-x, 1.5rem); margin-right: auto; margin-left: auto; }
@media (min-width: 576px) {
  .container, .container-sm { max-width: 540px; }
}
@media (min-width: 768px) {
  .container, .container-sm, .container-md { max-width: 720px; }
}
@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg { max-width: 960px; }
}
@media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl { max-width: 1140px; }
}
@media (min-width: 1400px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl { max-width: 1320px; }
}
.row { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; display: flex; flex-wrap: wrap; margin-top: calc(var(--bs-gutter-y) * -1); margin-right: calc(var(--bs-gutter-x) * -.5); margin-left: calc(var(--bs-gutter-x) * -.5); }
.row > * { flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) * .5); padding-left: calc(var(--bs-gutter-x) * .5); margin-top: var(--bs-gutter-y); }
.col { flex: 1 0 0%; }
.row-cols-auto > * { flex: 0 0 auto; width: auto; }
.row-cols-1 > * { flex: 0 0 auto; width: 100%; }
.row-cols-2 > * { flex: 0 0 auto; width: 50%; }
.row-cols-3 > * { flex: 0 0 auto; width: 33.3333%; }
.row-cols-4 > * { flex: 0 0 auto; width: 25%; }
.row-cols-5 > * { flex: 0 0 auto; width: 20%; }
.row-cols-6 > * { flex: 0 0 auto; width: 16.6667%; }
@media (min-width: 576px) {
  .col-sm { flex: 1 0 0%; }
  .row-cols-sm-auto > * { flex: 0 0 auto; width: auto; }
  .row-cols-sm-1 > * { flex: 0 0 auto; width: 100%; }
  .row-cols-sm-2 > * { flex: 0 0 auto; width: 50%; }
  .row-cols-sm-3 > * { flex: 0 0 auto; width: 33.3333%; }
  .row-cols-sm-4 > * { flex: 0 0 auto; width: 25%; }
  .row-cols-sm-5 > * { flex: 0 0 auto; width: 20%; }
  .row-cols-sm-6 > * { flex: 0 0 auto; width: 16.6667%; }
}
@media (min-width: 768px) {
  .col-md { flex: 1 0 0%; }
  .row-cols-md-auto > * { flex: 0 0 auto; width: auto; }
  .row-cols-md-1 > * { flex: 0 0 auto; width: 100%; }
  .row-cols-md-2 > * { flex: 0 0 auto; width: 50%; }
  .row-cols-md-3 > * { flex: 0 0 auto; width: 33.3333%; }
  .row-cols-md-4 > * { flex: 0 0 auto; width: 25%; }
  .row-cols-md-5 > * { flex: 0 0 auto; width: 20%; }
  .row-cols-md-6 > * { flex: 0 0 auto; width: 16.6667%; }
}
@media (min-width: 992px) {
  .col-lg { flex: 1 0 0%; }
  .row-cols-lg-auto > * { flex: 0 0 auto; width: auto; }
  .row-cols-lg-1 > * { flex: 0 0 auto; width: 100%; }
  .row-cols-lg-2 > * { flex: 0 0 auto; width: 50%; }
  .row-cols-lg-3 > * { flex: 0 0 auto; width: 33.3333%; }
  .row-cols-lg-4 > * { flex: 0 0 auto; width: 25%; }
  .row-cols-lg-5 > * { flex: 0 0 auto; width: 20%; }
  .row-cols-lg-6 > * { flex: 0 0 auto; width: 16.6667%; }
}
@media (min-width: 1200px) {
  .col-xl { flex: 1 0 0%; }
  .row-cols-xl-auto > * { flex: 0 0 auto; width: auto; }
  .row-cols-xl-1 > * { flex: 0 0 auto; width: 100%; }
  .row-cols-xl-2 > * { flex: 0 0 auto; width: 50%; }
  .row-cols-xl-3 > * { flex: 0 0 auto; width: 33.3333%; }
  .row-cols-xl-4 > * { flex: 0 0 auto; width: 25%; }
  .row-cols-xl-5 > * { flex: 0 0 auto; width: 20%; }
  .row-cols-xl-6 > * { flex: 0 0 auto; width: 16.6667%; }
}
@media (min-width: 1400px) {
  .col-xxl { flex: 1 0 0%; }
  .row-cols-xxl-auto > * { flex: 0 0 auto; width: auto; }
  .row-cols-xxl-1 > * { flex: 0 0 auto; width: 100%; }
  .row-cols-xxl-2 > * { flex: 0 0 auto; width: 50%; }
  .row-cols-xxl-3 > * { flex: 0 0 auto; width: 33.3333%; }
  .row-cols-xxl-4 > * { flex: 0 0 auto; width: 25%; }
  .row-cols-xxl-5 > * { flex: 0 0 auto; width: 20%; }
  .row-cols-xxl-6 > * { flex: 0 0 auto; width: 16.6667%; }
}
.col-auto { flex: 0 0 auto; width: auto; }
.col-1 { flex: 0 0 auto; width: 8.33333%; }
.col-2 { flex: 0 0 auto; width: 16.6667%; }
.col-3 { flex: 0 0 auto; width: 25%; }
.col-4 { flex: 0 0 auto; width: 33.3333%; }
.col-5 { flex: 0 0 auto; width: 41.6667%; }
.col-6 { flex: 0 0 auto; width: 50%; }
.col-7 { flex: 0 0 auto; width: 58.3333%; }
.col-8 { flex: 0 0 auto; width: 66.6667%; }
.col-9 { flex: 0 0 auto; width: 75%; }
.col-10 { flex: 0 0 auto; width: 83.3333%; }
.col-11 { flex: 0 0 auto; width: 91.6667%; }
.col-12 { flex: 0 0 auto; width: 100%; }
.offset-1 { margin-left: 8.33333%; }
.offset-2 { margin-left: 16.6667%; }
.offset-3 { margin-left: 25%; }
.offset-4 { margin-left: 33.3333%; }
.offset-5 { margin-left: 41.6667%; }
.offset-6 { margin-left: 50%; }
.offset-7 { margin-left: 58.3333%; }
.offset-8 { margin-left: 66.6667%; }
.offset-9 { margin-left: 75%; }
.offset-10 { margin-left: 83.3333%; }
.offset-11 { margin-left: 91.6667%; }
.g-0, .gx-0 { --bs-gutter-x: 0; }
.g-0, .gy-0 { --bs-gutter-y: 0; }
.g-1, .gx-1 { --bs-gutter-x: 0.25rem; }
.g-1, .gy-1 { --bs-gutter-y: 0.25rem; }
.g-2, .gx-2 { --bs-gutter-x: 0.5rem; }
.g-2, .gy-2 { --bs-gutter-y: 0.5rem; }
.g-3, .gx-3 { --bs-gutter-x: 1rem; }
.g-3, .gy-3 { --bs-gutter-y: 1rem; }
.g-4, .gx-4 { --bs-gutter-x: 1.5rem; }
.g-4, .gy-4 { --bs-gutter-y: 1.5rem; }
.g-5, .gx-5 { --bs-gutter-x: 3rem; }
.g-5, .gy-5 { --bs-gutter-y: 3rem; }
.g-6, .gx-6 { --bs-gutter-x: 4rem; }
.g-6, .gy-6 { --bs-gutter-y: 4rem; }
.g-7, .gx-7 { --bs-gutter-x: 6rem; }
.g-7, .gy-7 { --bs-gutter-y: 6rem; }
.g-8, .gx-8 { --bs-gutter-x: 8rem; }
.g-8, .gy-8 { --bs-gutter-y: 8rem; }
.g-9, .gx-9 { --bs-gutter-x: 10rem; }
.g-9, .gy-9 { --bs-gutter-y: 10rem; }
.g-10, .gx-10 { --bs-gutter-x: 12rem; }
.g-10, .gy-10 { --bs-gutter-y: 12rem; }
.g-11, .gx-11 { --bs-gutter-x: 14rem; }
.g-11, .gy-11 { --bs-gutter-y: 14rem; }
.g-12, .gx-12 { --bs-gutter-x: 16rem; }
.g-12, .gy-12 { --bs-gutter-y: 16rem; }
@media (min-width: 576px) {
  .col-sm-auto { flex: 0 0 auto; width: auto; }
  .col-sm-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-sm-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-sm-3 { flex: 0 0 auto; width: 25%; }
  .col-sm-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-sm-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-sm-6 { flex: 0 0 auto; width: 50%; }
  .col-sm-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-sm-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-sm-9 { flex: 0 0 auto; width: 75%; }
  .col-sm-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-sm-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-sm-12 { flex: 0 0 auto; width: 100%; }
  .offset-sm-0 { margin-left: 0px; }
  .offset-sm-1 { margin-left: 8.33333%; }
  .offset-sm-2 { margin-left: 16.6667%; }
  .offset-sm-3 { margin-left: 25%; }
  .offset-sm-4 { margin-left: 33.3333%; }
  .offset-sm-5 { margin-left: 41.6667%; }
  .offset-sm-6 { margin-left: 50%; }
  .offset-sm-7 { margin-left: 58.3333%; }
  .offset-sm-8 { margin-left: 66.6667%; }
  .offset-sm-9 { margin-left: 75%; }
  .offset-sm-10 { margin-left: 83.3333%; }
  .offset-sm-11 { margin-left: 91.6667%; }
  .g-sm-0, .gx-sm-0 { --bs-gutter-x: 0; }
  .g-sm-0, .gy-sm-0 { --bs-gutter-y: 0; }
  .g-sm-1, .gx-sm-1 { --bs-gutter-x: 0.25rem; }
  .g-sm-1, .gy-sm-1 { --bs-gutter-y: 0.25rem; }
  .g-sm-2, .gx-sm-2 { --bs-gutter-x: 0.5rem; }
  .g-sm-2, .gy-sm-2 { --bs-gutter-y: 0.5rem; }
  .g-sm-3, .gx-sm-3 { --bs-gutter-x: 1rem; }
  .g-sm-3, .gy-sm-3 { --bs-gutter-y: 1rem; }
  .g-sm-4, .gx-sm-4 { --bs-gutter-x: 1.5rem; }
  .g-sm-4, .gy-sm-4 { --bs-gutter-y: 1.5rem; }
  .g-sm-5, .gx-sm-5 { --bs-gutter-x: 3rem; }
  .g-sm-5, .gy-sm-5 { --bs-gutter-y: 3rem; }
  .g-sm-6, .gx-sm-6 { --bs-gutter-x: 4rem; }
  .g-sm-6, .gy-sm-6 { --bs-gutter-y: 4rem; }
  .g-sm-7, .gx-sm-7 { --bs-gutter-x: 6rem; }
  .g-sm-7, .gy-sm-7 { --bs-gutter-y: 6rem; }
  .g-sm-8, .gx-sm-8 { --bs-gutter-x: 8rem; }
  .g-sm-8, .gy-sm-8 { --bs-gutter-y: 8rem; }
  .g-sm-9, .gx-sm-9 { --bs-gutter-x: 10rem; }
  .g-sm-9, .gy-sm-9 { --bs-gutter-y: 10rem; }
  .g-sm-10, .gx-sm-10 { --bs-gutter-x: 12rem; }
  .g-sm-10, .gy-sm-10 { --bs-gutter-y: 12rem; }
  .g-sm-11, .gx-sm-11 { --bs-gutter-x: 14rem; }
  .g-sm-11, .gy-sm-11 { --bs-gutter-y: 14rem; }
  .g-sm-12, .gx-sm-12 { --bs-gutter-x: 16rem; }
  .g-sm-12, .gy-sm-12 { --bs-gutter-y: 16rem; }
}
@media (min-width: 768px) {
  .col-md-auto { flex: 0 0 auto; width: auto; }
  .col-md-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-md-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-md-3 { flex: 0 0 auto; width: 25%; }
  .col-md-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-md-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-md-6 { flex: 0 0 auto; width: 50%; }
  .col-md-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-md-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-md-9 { flex: 0 0 auto; width: 75%; }
  .col-md-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-md-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-md-12 { flex: 0 0 auto; width: 100%; }
  .offset-md-0 { margin-left: 0px; }
  .offset-md-1 { margin-left: 8.33333%; }
  .offset-md-2 { margin-left: 16.6667%; }
  .offset-md-3 { margin-left: 25%; }
  .offset-md-4 { margin-left: 33.3333%; }
  .offset-md-5 { margin-left: 41.6667%; }
  .offset-md-6 { margin-left: 50%; }
  .offset-md-7 { margin-left: 58.3333%; }
  .offset-md-8 { margin-left: 66.6667%; }
  .offset-md-9 { margin-left: 75%; }
  .offset-md-10 { margin-left: 83.3333%; }
  .offset-md-11 { margin-left: 91.6667%; }
  .g-md-0, .gx-md-0 { --bs-gutter-x: 0; }
  .g-md-0, .gy-md-0 { --bs-gutter-y: 0; }
  .g-md-1, .gx-md-1 { --bs-gutter-x: 0.25rem; }
  .g-md-1, .gy-md-1 { --bs-gutter-y: 0.25rem; }
  .g-md-2, .gx-md-2 { --bs-gutter-x: 0.5rem; }
  .g-md-2, .gy-md-2 { --bs-gutter-y: 0.5rem; }
  .g-md-3, .gx-md-3 { --bs-gutter-x: 1rem; }
  .g-md-3, .gy-md-3 { --bs-gutter-y: 1rem; }
  .g-md-4, .gx-md-4 { --bs-gutter-x: 1.5rem; }
  .g-md-4, .gy-md-4 { --bs-gutter-y: 1.5rem; }
  .g-md-5, .gx-md-5 { --bs-gutter-x: 3rem; }
  .g-md-5, .gy-md-5 { --bs-gutter-y: 3rem; }
  .g-md-6, .gx-md-6 { --bs-gutter-x: 4rem; }
  .g-md-6, .gy-md-6 { --bs-gutter-y: 4rem; }
  .g-md-7, .gx-md-7 { --bs-gutter-x: 6rem; }
  .g-md-7, .gy-md-7 { --bs-gutter-y: 6rem; }
  .g-md-8, .gx-md-8 { --bs-gutter-x: 8rem; }
  .g-md-8, .gy-md-8 { --bs-gutter-y: 8rem; }
  .g-md-9, .gx-md-9 { --bs-gutter-x: 10rem; }
  .g-md-9, .gy-md-9 { --bs-gutter-y: 10rem; }
  .g-md-10, .gx-md-10 { --bs-gutter-x: 12rem; }
  .g-md-10, .gy-md-10 { --bs-gutter-y: 12rem; }
  .g-md-11, .gx-md-11 { --bs-gutter-x: 14rem; }
  .g-md-11, .gy-md-11 { --bs-gutter-y: 14rem; }
  .g-md-12, .gx-md-12 { --bs-gutter-x: 16rem; }
  .g-md-12, .gy-md-12 { --bs-gutter-y: 16rem; }
}
@media (min-width: 992px) {
  .col-lg-auto { flex: 0 0 auto; width: auto; }
  .col-lg-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-lg-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-lg-3 { flex: 0 0 auto; width: 25%; }
  .col-lg-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-lg-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-lg-6 { flex: 0 0 auto; width: 50%; }
  .col-lg-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-lg-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-lg-9 { flex: 0 0 auto; width: 75%; }
  .col-lg-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-lg-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-lg-12 { flex: 0 0 auto; width: 100%; }
  .offset-lg-0 { margin-left: 0px; }
  .offset-lg-1 { margin-left: 8.33333%; }
  .offset-lg-2 { margin-left: 16.6667%; }
  .offset-lg-3 { margin-left: 25%; }
  .offset-lg-4 { margin-left: 33.3333%; }
  .offset-lg-5 { margin-left: 41.6667%; }
  .offset-lg-6 { margin-left: 50%; }
  .offset-lg-7 { margin-left: 58.3333%; }
  .offset-lg-8 { margin-left: 66.6667%; }
  .offset-lg-9 { margin-left: 75%; }
  .offset-lg-10 { margin-left: 83.3333%; }
  .offset-lg-11 { margin-left: 91.6667%; }
  .g-lg-0, .gx-lg-0 { --bs-gutter-x: 0; }
  .g-lg-0, .gy-lg-0 { --bs-gutter-y: 0; }
  .g-lg-1, .gx-lg-1 { --bs-gutter-x: 0.25rem; }
  .g-lg-1, .gy-lg-1 { --bs-gutter-y: 0.25rem; }
  .g-lg-2, .gx-lg-2 { --bs-gutter-x: 0.5rem; }
  .g-lg-2, .gy-lg-2 { --bs-gutter-y: 0.5rem; }
  .g-lg-3, .gx-lg-3 { --bs-gutter-x: 1rem; }
  .g-lg-3, .gy-lg-3 { --bs-gutter-y: 1rem; }
  .g-lg-4, .gx-lg-4 { --bs-gutter-x: 1.5rem; }
  .g-lg-4, .gy-lg-4 { --bs-gutter-y: 1.5rem; }
  .g-lg-5, .gx-lg-5 { --bs-gutter-x: 3rem; }
  .g-lg-5, .gy-lg-5 { --bs-gutter-y: 3rem; }
  .g-lg-6, .gx-lg-6 { --bs-gutter-x: 4rem; }
  .g-lg-6, .gy-lg-6 { --bs-gutter-y: 4rem; }
  .g-lg-7, .gx-lg-7 { --bs-gutter-x: 6rem; }
  .g-lg-7, .gy-lg-7 { --bs-gutter-y: 6rem; }
  .g-lg-8, .gx-lg-8 { --bs-gutter-x: 8rem; }
  .g-lg-8, .gy-lg-8 { --bs-gutter-y: 8rem; }
  .g-lg-9, .gx-lg-9 { --bs-gutter-x: 10rem; }
  .g-lg-9, .gy-lg-9 { --bs-gutter-y: 10rem; }
  .g-lg-10, .gx-lg-10 { --bs-gutter-x: 12rem; }
  .g-lg-10, .gy-lg-10 { --bs-gutter-y: 12rem; }
  .g-lg-11, .gx-lg-11 { --bs-gutter-x: 14rem; }
  .g-lg-11, .gy-lg-11 { --bs-gutter-y: 14rem; }
  .g-lg-12, .gx-lg-12 { --bs-gutter-x: 16rem; }
  .g-lg-12, .gy-lg-12 { --bs-gutter-y: 16rem; }
}
@media (min-width: 1200px) {
  .col-xl-auto { flex: 0 0 auto; width: auto; }
  .col-xl-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-xl-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-xl-3 { flex: 0 0 auto; width: 25%; }
  .col-xl-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-xl-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-xl-6 { flex: 0 0 auto; width: 50%; }
  .col-xl-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-xl-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-xl-9 { flex: 0 0 auto; width: 75%; }
  .col-xl-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-xl-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-xl-12 { flex: 0 0 auto; width: 100%; }
  .offset-xl-0 { margin-left: 0px; }
  .offset-xl-1 { margin-left: 8.33333%; }
  .offset-xl-2 { margin-left: 16.6667%; }
  .offset-xl-3 { margin-left: 25%; }
  .offset-xl-4 { margin-left: 33.3333%; }
  .offset-xl-5 { margin-left: 41.6667%; }
  .offset-xl-6 { margin-left: 50%; }
  .offset-xl-7 { margin-left: 58.3333%; }
  .offset-xl-8 { margin-left: 66.6667%; }
  .offset-xl-9 { margin-left: 75%; }
  .offset-xl-10 { margin-left: 83.3333%; }
  .offset-xl-11 { margin-left: 91.6667%; }
  .g-xl-0, .gx-xl-0 { --bs-gutter-x: 0; }
  .g-xl-0, .gy-xl-0 { --bs-gutter-y: 0; }
  .g-xl-1, .gx-xl-1 { --bs-gutter-x: 0.25rem; }
  .g-xl-1, .gy-xl-1 { --bs-gutter-y: 0.25rem; }
  .g-xl-2, .gx-xl-2 { --bs-gutter-x: 0.5rem; }
  .g-xl-2, .gy-xl-2 { --bs-gutter-y: 0.5rem; }
  .g-xl-3, .gx-xl-3 { --bs-gutter-x: 1rem; }
  .g-xl-3, .gy-xl-3 { --bs-gutter-y: 1rem; }
  .g-xl-4, .gx-xl-4 { --bs-gutter-x: 1.5rem; }
  .g-xl-4, .gy-xl-4 { --bs-gutter-y: 1.5rem; }
  .g-xl-5, .gx-xl-5 { --bs-gutter-x: 3rem; }
  .g-xl-5, .gy-xl-5 { --bs-gutter-y: 3rem; }
  .g-xl-6, .gx-xl-6 { --bs-gutter-x: 4rem; }
  .g-xl-6, .gy-xl-6 { --bs-gutter-y: 4rem; }
  .g-xl-7, .gx-xl-7 { --bs-gutter-x: 6rem; }
  .g-xl-7, .gy-xl-7 { --bs-gutter-y: 6rem; }
  .g-xl-8, .gx-xl-8 { --bs-gutter-x: 8rem; }
  .g-xl-8, .gy-xl-8 { --bs-gutter-y: 8rem; }
  .g-xl-9, .gx-xl-9 { --bs-gutter-x: 10rem; }
  .g-xl-9, .gy-xl-9 { --bs-gutter-y: 10rem; }
  .g-xl-10, .gx-xl-10 { --bs-gutter-x: 12rem; }
  .g-xl-10, .gy-xl-10 { --bs-gutter-y: 12rem; }
  .g-xl-11, .gx-xl-11 { --bs-gutter-x: 14rem; }
  .g-xl-11, .gy-xl-11 { --bs-gutter-y: 14rem; }
  .g-xl-12, .gx-xl-12 { --bs-gutter-x: 16rem; }
  .g-xl-12, .gy-xl-12 { --bs-gutter-y: 16rem; }
}
@media (min-width: 1400px) {
  .col-xxl-auto { flex: 0 0 auto; width: auto; }
  .col-xxl-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-xxl-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-xxl-3 { flex: 0 0 auto; width: 25%; }
  .col-xxl-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-xxl-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-xxl-6 { flex: 0 0 auto; width: 50%; }
  .col-xxl-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-xxl-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-xxl-9 { flex: 0 0 auto; width: 75%; }
  .col-xxl-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-xxl-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-xxl-12 { flex: 0 0 auto; width: 100%; }
  .offset-xxl-0 { margin-left: 0px; }
  .offset-xxl-1 { margin-left: 8.33333%; }
  .offset-xxl-2 { margin-left: 16.6667%; }
  .offset-xxl-3 { margin-left: 25%; }
  .offset-xxl-4 { margin-left: 33.3333%; }
  .offset-xxl-5 { margin-left: 41.6667%; }
  .offset-xxl-6 { margin-left: 50%; }
  .offset-xxl-7 { margin-left: 58.3333%; }
  .offset-xxl-8 { margin-left: 66.6667%; }
  .offset-xxl-9 { margin-left: 75%; }
  .offset-xxl-10 { margin-left: 83.3333%; }
  .offset-xxl-11 { margin-left: 91.6667%; }
  .g-xxl-0, .gx-xxl-0 { --bs-gutter-x: 0; }
  .g-xxl-0, .gy-xxl-0 { --bs-gutter-y: 0; }
  .g-xxl-1, .gx-xxl-1 { --bs-gutter-x: 0.25rem; }
  .g-xxl-1, .gy-xxl-1 { --bs-gutter-y: 0.25rem; }
  .g-xxl-2, .gx-xxl-2 { --bs-gutter-x: 0.5rem; }
  .g-xxl-2, .gy-xxl-2 { --bs-gutter-y: 0.5rem; }
  .g-xxl-3, .gx-xxl-3 { --bs-gutter-x: 1rem; }
  .g-xxl-3, .gy-xxl-3 { --bs-gutter-y: 1rem; }
  .g-xxl-4, .gx-xxl-4 { --bs-gutter-x: 1.5rem; }
  .g-xxl-4, .gy-xxl-4 { --bs-gutter-y: 1.5rem; }
  .g-xxl-5, .gx-xxl-5 { --bs-gutter-x: 3rem; }
  .g-xxl-5, .gy-xxl-5 { --bs-gutter-y: 3rem; }
  .g-xxl-6, .gx-xxl-6 { --bs-gutter-x: 4rem; }
  .g-xxl-6, .gy-xxl-6 { --bs-gutter-y: 4rem; }
  .g-xxl-7, .gx-xxl-7 { --bs-gutter-x: 6rem; }
  .g-xxl-7, .gy-xxl-7 { --bs-gutter-y: 6rem; }
  .g-xxl-8, .gx-xxl-8 { --bs-gutter-x: 8rem; }
  .g-xxl-8, .gy-xxl-8 { --bs-gutter-y: 8rem; }
  .g-xxl-9, .gx-xxl-9 { --bs-gutter-x: 10rem; }
  .g-xxl-9, .gy-xxl-9 { --bs-gutter-y: 10rem; }
  .g-xxl-10, .gx-xxl-10 { --bs-gutter-x: 12rem; }
  .g-xxl-10, .gy-xxl-10 { --bs-gutter-y: 12rem; }
  .g-xxl-11, .gx-xxl-11 { --bs-gutter-x: 14rem; }
  .g-xxl-11, .gy-xxl-11 { --bs-gutter-y: 14rem; }
  .g-xxl-12, .gx-xxl-12 { --bs-gutter-x: 16rem; }
  .g-xxl-12, .gy-xxl-12 { --bs-gutter-y: 16rem; }
}
.table { --bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #67748e; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); --bs-table-active-color: #67748e; --bs-table-active-bg: rgba(0, 0, 0, 0.1); --bs-table-hover-color: #67748e; --bs-table-hover-bg: rgba(0, 0, 0, 0.075); width: 100%; margin-bottom: 1rem; color: rgb(103, 116, 142); vertical-align: top; border-color: rgb(233, 236, 239); }
.table > :not(caption) > * > * { padding: 0.5rem; background-color: var(--bs-table-bg); border-bottom-width: 1px; box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg); }
.table > tbody { vertical-align: inherit; }
.table > thead { vertical-align: bottom; }
.table > :not(:last-child) > :last-child > * { border-bottom-color: currentcolor; }
.caption-top { caption-side: top; }
.table-sm > :not(caption) > * > * { padding: 0.25rem; }
.table-bordered > :not(caption) > * { border-width: 1px 0px; }
.table-bordered > :not(caption) > * > * { border-width: 0px 1px; }
.table-borderless > :not(caption) > * > * { border-bottom-width: 0px; }
.table-striped > tbody > tr:nth-of-type(2n+1) { --bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color); }
.table-active { --bs-table-accent-bg: var(--bs-table-active-bg); color: var(--bs-table-active-color); }
.table-hover > tbody > tr:hover { --bs-table-accent-bg: var(--bs-table-hover-bg); color: var(--bs-table-hover-color); }
.table-primary { --bs-table-bg: #f5ceec; --bs-table-striped-bg: #e9c4e0; --bs-table-striped-color: #000; --bs-table-active-bg: #ddb9d4; --bs-table-active-color: #000; --bs-table-hover-bg: #e3bfda; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(221, 185, 212); }
.table-secondary { --bs-table-bg: #e6e9ee; --bs-table-striped-bg: #dbdde2; --bs-table-striped-color: #000; --bs-table-active-bg: #cfd2d6; --bs-table-active-color: #000; --bs-table-hover-bg: #d5d8dc; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(207, 210, 214); }
.table-success { --bs-table-bg: #e6f7d0; --bs-table-striped-bg: #dbebc6; --bs-table-striped-color: #000; --bs-table-active-bg: #cfdebb; --bs-table-active-color: #000; --bs-table-hover-bg: #d5e4c0; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(207, 222, 187); }
.table-info { --bs-table-bg: #d1f3fa; --bs-table-striped-bg: #c7e7ee; --bs-table-striped-color: #000; --bs-table-active-bg: #bcdbe1; --bs-table-active-color: #000; --bs-table-hover-bg: #c1e1e7; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(188, 219, 225); }
.table-warning { --bs-table-bg: #fef5d6; --bs-table-striped-bg: #f1e9cb; --bs-table-striped-color: #000; --bs-table-active-bg: #e5ddc1; --bs-table-active-color: #000; --bs-table-hover-bg: #ebe3c6; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(229, 221, 193); }
.table-danger { --bs-table-bg: #fbcdcd; --bs-table-striped-bg: #eec3c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e2b9b9; --bs-table-active-color: #000; --bs-table-hover-bg: #e8bebe; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(226, 185, 185); }
.table-light { --bs-table-bg: #e9ecef; --bs-table-striped-bg: #dde0e3; --bs-table-striped-color: #000; --bs-table-active-bg: #d2d4d7; --bs-table-active-color: #000; --bs-table-hover-bg: #d8dadd; --bs-table-hover-color: #000; color: rgb(0, 0, 0); border-color: rgb(210, 212, 215); }
.table-dark { --bs-table-bg: #344767; --bs-table-striped-bg: #3e506f; --bs-table-striped-color: #fff; --bs-table-active-bg: #485976; --bs-table-active-color: #fff; --bs-table-hover-bg: #435572; --bs-table-hover-color: #fff; color: rgb(255, 255, 255); border-color: rgb(72, 89, 118); }
.table-responsive { overflow-x: auto; }
@media (max-width: 575.98px) {
  .table-responsive-sm { overflow-x: auto; }
}
@media (max-width: 767.98px) {
  .table-responsive-md { overflow-x: auto; }
}
@media (max-width: 991.98px) {
  .table-responsive-lg { overflow-x: auto; }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl { overflow-x: auto; }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl { overflow-x: auto; }
}
.form-label { margin-bottom: 0.5rem; font-size: 0.75rem; font-weight: 700; color: rgb(52, 71, 103); }
.col-form-label { padding-top: calc(1px + 0.5rem); padding-bottom: calc(1px + 0.5rem); margin-bottom: 0px; font-size: inherit; font-weight: 700; line-height: 1.4rem; color: rgb(52, 71, 103); }
.col-form-label-lg { padding-top: calc(1px + 0.75rem); padding-bottom: calc(1px + 0.75rem); font-size: 0.875rem; }
.col-form-label-sm { padding-top: calc(1px + 0.25rem); padding-bottom: calc(1px + 0.25rem); font-size: 0.75rem; }
.form-text { margin-top: 0.25rem; font-size: 0.875em; color: rgb(108, 117, 125); }
.form-control { display: block; width: 100%; padding: 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 400; line-height: 1.4rem; color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); background-clip: padding-box; border: 1px solid rgb(210, 214, 218); appearance: none; border-radius: 0.5rem; transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-control { transition: none 0s ease 0s; }
}
.form-control[type="file"] { overflow: hidden; }
.form-control[type="file"]:not(:disabled):not([readonly]) { cursor: pointer; }
.form-control:focus { color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); border-color: rgb(226, 147, 211); outline: 0px; box-shadow: rgb(233, 174, 222) 0px 0px 0px 2px; }
.form-control::-webkit-date-and-time-value { height: 1.4rem; }
.form-control::placeholder { color: rgb(173, 181, 189); opacity: 1; }
.form-control:disabled, .form-control[readonly] { background-color: rgb(233, 236, 239); opacity: 1; }
.form-control::file-selector-button { padding: 0.5rem 0.75rem; margin: -0.5rem -0.75rem; margin-inline-end: 0.75rem; color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0px; border-inline-end-width: 1px; border-radius: 0px; transition: all 0.15s ease-in 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button { transition: none 0s ease 0s; }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: rgb(242, 242, 242); }
.form-control::-webkit-file-upload-button { padding: 0.5rem 0.75rem; margin: -0.5rem -0.75rem; margin-inline-end: 0.75rem; color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0px; border-inline-end-width: 1px; border-radius: 0px; transition: all 0.15s ease-in 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button { transition: none 0s ease 0s; }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: rgb(242, 242, 242); }
.form-control-plaintext { display: block; width: 100%; padding: 0.5rem 0px; margin-bottom: 0px; line-height: 1.4rem; color: rgb(52, 71, 103); background-color: transparent; border-style: solid; border-color: transparent; border-image: initial; border-width: 1px 0px; }
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg { padding-right: 0px; padding-left: 0px; }
.form-control-sm { min-height: unset; padding: 0.25rem 0.75rem; font-size: 0.75rem; border-radius: 0.5rem; }
.form-control-sm::file-selector-button { padding: 0.25rem 0.75rem; margin: -0.25rem -0.75rem; margin-inline-end: 0.75rem; }
.form-control-sm::-webkit-file-upload-button { padding: 0.25rem 0.75rem; margin: -0.25rem -0.75rem; margin-inline-end: 0.75rem; }
.form-control-lg { min-height: unset; padding: 0.75rem; font-size: 0.875rem; border-radius: 0.5rem; }
.form-control-lg::file-selector-button { padding: 0.75rem; margin: -0.75rem; margin-inline-end: 0.75rem; }
.form-control-lg::-webkit-file-upload-button { padding: 0.75rem; margin: -0.75rem; margin-inline-end: 0.75rem; }
textarea.form-control { min-height: unset; }
textarea.form-control-sm { min-height: unset; }
textarea.form-control-lg { min-height: unset; }
.form-control-color { max-width: 3rem; height: auto; padding: 0.5rem; }
.form-control-color:not(:disabled):not([readonly]) { cursor: pointer; }
.form-control-color::-webkit-color-swatch { height: 1.4rem; border-radius: 0.5rem; }
.form-select { display: block; width: 100%; padding: 0.5rem 1rem 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 400; line-height: 1.4rem; color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px; border: 1px solid rgb(210, 214, 218); border-radius: 0.5rem; transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s; appearance: none; }
@media (prefers-reduced-motion: reduce) {
  .form-select { transition: none 0s ease 0s; }
}
.form-select:focus { border-color: rgb(226, 147, 211); outline: 0px; box-shadow: rgb(233, 174, 222) 0px 0px 0px 2px; }
.form-select[multiple], .form-select[size]:not([size="1"]) { padding-right: 0.75rem; background-image: none; }
.form-select:disabled { color: rgb(108, 117, 125); background-color: rgb(233, 236, 239); }
.form-select-sm { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.75rem; font-size: 0.75rem; }
.form-select-lg { padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 0.75rem; font-size: 0.875rem; }
.form-check { display: block; min-height: 1.5rem; padding-left: 1.73em; margin-bottom: 0.125rem; }
.form-check .form-check-input { float: left; margin-left: -1.73em; }
.form-check-input { width: 1.23em; height: 1.23em; margin-top: 0.135em; vertical-align: top; background-color: rgb(255, 255, 255); background-repeat: no-repeat; background-position: center center; background-size: contain; border: none; appearance: none; transition: background-color 0.25s ease 0s, border-color 0.25s ease 0s, background-position 0.15s ease-in-out 0s, opacity 0.15s ease-out 0s, box-shadow 0.15s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-check-input { transition: none 0s ease 0s; }
}
.form-check-input[type="checkbox"] { border-radius: 0.35rem; }
.form-check-input[type="radio"] { border-radius: 50%; }
.form-check-input:active { filter: brightness(99%); }
.form-check-input:focus { outline: 0px; box-shadow: none; }
.form-check-input:checked { background-color: transparent; border-color: transparent; }
.form-check-input:checked[type="checkbox"] { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(58, 65, 111) 100%); }
.form-check-input:checked[type="radio"] { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(58, 65, 111) 100%); }
.form-check-input[type="checkbox"]:indeterminate { background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"); }
.form-check-input:disabled { pointer-events: none; filter: none; opacity: 0.5; }
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label { opacity: 0.5; }
.form-switch { padding-left: 3rem; }
.form-switch .form-check-input { width: 2.5rem; margin-left: -3rem; background-image: none; background-position: left center; border-radius: 2.5rem; transition: background-color 0.25s ease 0s, border-color 0.25s ease 0s, background-position 0.15s ease-in-out 0s, opacity 0.15s ease-out 0s, box-shadow 0.15s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input { transition: none 0s ease 0s; }
}
.form-switch .form-check-input:focus { background-image: none; }
.form-switch .form-check-input:checked { background-position: right center; background-image: none; }
.form-check-inline { display: inline-block; margin-right: 1rem; }
.btn-check { position: absolute; clip: rect(0px, 0px, 0px, 0px); pointer-events: none; }
.btn-check[disabled] + .btn, .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
.form-range { width: 100%; height: calc(4px + 1rem); padding: 0px; background-color: transparent; appearance: none; }
.form-range:focus { outline: 0px; }
.form-range:focus::-webkit-slider-thumb { box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(233, 174, 222) 0px 0px 0px 2px; }
.form-range::-webkit-slider-thumb { width: 1rem; height: 1rem; margin-top: -0.25rem; background-color: rgb(203, 12, 159); border: 0px; border-radius: 1rem; transition: background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; appearance: none; }
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb { transition: none 0s ease 0s; }
}
.form-range::-webkit-slider-thumb:active { background-color: rgb(248, 145, 225); }
.form-range::-webkit-slider-runnable-track { width: 100%; height: 0.5rem; color: transparent; cursor: pointer; background-color: rgb(222, 226, 230); border-color: transparent; border-radius: 1rem; }
@media (prefers-reduced-motion: reduce) {
}
.form-range:disabled { pointer-events: none; }
.form-range:disabled::-webkit-slider-thumb { background-color: rgb(173, 181, 189); }
.form-floating { position: relative; }
.form-floating > .form-control, .form-floating > .form-select { height: calc(2px + 3.5rem); line-height: 1.25; }
.form-floating > label { position: absolute; top: 0px; left: 0px; height: 100%; padding: 1rem 0.75rem; pointer-events: none; border: 1px solid transparent; transform-origin: 0px 0px; transition: opacity 0.1s ease-in-out 0s, transform 0.1s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .form-floating > label { transition: none 0s ease 0s; }
}
.form-floating > .form-control { padding: 1rem 0.75rem; }
.form-floating > .form-control::placeholder { color: transparent; }
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
.form-floating > .form-control:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
.form-floating > .form-select { padding-top: 1.625rem; padding-bottom: 0.625rem; }
.form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label { opacity: 0.65; transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
.form-floating > .form-control:-webkit-autofill ~ label { opacity: 0.65; transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
.input-group { position: relative; display: flex; flex-wrap: wrap; align-items: stretch; width: 100%; }
.input-group > .form-control, .input-group > .form-select { position: relative; flex: 1 1 auto; width: 1%; min-width: 0px; }
.input-group > .form-control:focus, .input-group > .form-select:focus { z-index: 3; }
.input-group .btn { position: relative; z-index: 2; }
.input-group .btn:focus { z-index: 3; }
.input-group-text { display: flex; align-items: center; padding: 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 400; line-height: 1.4rem; color: rgb(52, 71, 103); text-align: center; white-space: nowrap; background-color: rgb(255, 255, 255); border: 1px solid rgb(210, 214, 218); border-radius: 0.5rem; }
.input-group-lg > .form-control, .input-group-lg > .form-select, .input-group-lg > .input-group-text, .input-group-lg > .btn { padding: 0.75rem; font-size: 0.875rem; border-radius: 0.5rem; }
.input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text, .input-group-sm > .btn { padding: 0.25rem 0.75rem; font-size: 0.75rem; border-radius: 0.5rem; }
.input-group-lg > .form-select, .input-group-sm > .form-select { padding-right: 1.75rem; }
.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu), .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu), .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) { margin-left: -1px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.valid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: rgb(102, 212, 50); }
.valid-tooltip { position: absolute; top: 100%; z-index: 5; display: none; max-width: 100%; padding: 0.25rem 0.5rem; margin-top: 0.1rem; font-size: 0.875rem; color: rgb(0, 0, 0); background-color: rgba(102, 212, 50, 0.9); border-radius: 0.5rem; }
.was-validated :valid ~ .valid-feedback, .was-validated :valid ~ .valid-tooltip, .is-valid ~ .valid-feedback, .is-valid ~ .valid-tooltip { display: block; }
.was-validated .form-control:valid, .form-control.is-valid { border-color: rgb(102, 212, 50); padding-right: unset; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3e%3cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 1rem 1rem; }
.was-validated .form-control:valid:focus, .form-control.is-valid:focus { border-color: rgb(102, 212, 50); box-shadow: rgba(102, 212, 50, 0.25) 0px 0px 0px 2px; }
.was-validated textarea.form-control:valid, textarea.form-control.is-valid { padding-right: unset; background-position: right 0.75rem top 0.75rem; }
.was-validated .form-select:valid, .form-select.is-valid { border-color: rgb(102, 212, 50); }
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] { padding-right: 2.875rem; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3e%3cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e"); background-position: right 0.75rem center, right 1.75rem center; background-size: 16px 12px, 1rem 1rem; }
.was-validated .form-select:valid:focus, .form-select.is-valid:focus { border-color: rgb(102, 212, 50); box-shadow: rgba(102, 212, 50, 0.25) 0px 0px 0px 2px; }
.was-validated .form-check-input:valid, .form-check-input.is-valid { border-color: rgb(102, 212, 50); }
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked { background-color: rgb(102, 212, 50); }
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus { box-shadow: rgba(102, 212, 50, 0.25) 0px 0px 0px 2px; }
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label { color: rgb(102, 212, 50); }
.form-check-inline .form-check-input ~ .valid-feedback { margin-left: 0.5em; }
.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid, .was-validated .input-group .form-select:valid, .input-group .form-select.is-valid { z-index: 1; }
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus, .was-validated .input-group .form-select:valid:focus, .input-group .form-select.is-valid:focus { z-index: 3; }
.invalid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: rgb(253, 92, 112); }
.invalid-tooltip { position: absolute; top: 100%; z-index: 5; display: none; max-width: 100%; padding: 0.25rem 0.5rem; margin-top: 0.1rem; font-size: 0.875rem; color: rgb(0, 0, 0); background-color: rgba(253, 92, 112, 0.9); border-radius: 0.5rem; }
.was-validated :invalid ~ .invalid-feedback, .was-validated :invalid ~ .invalid-tooltip, .is-invalid ~ .invalid-feedback, .is-invalid ~ .invalid-tooltip { display: block; }
.was-validated .form-control:invalid, .form-control.is-invalid { border-color: rgb(253, 92, 112); padding-right: unset; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 1rem 1rem; }
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus { border-color: rgb(253, 92, 112); box-shadow: rgba(253, 92, 112, 0.25) 0px 0px 0px 2px; }
.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid { padding-right: unset; background-position: right 0.75rem top 0.75rem; }
.was-validated .form-select:invalid, .form-select.is-invalid { border-color: rgb(253, 92, 112); }
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] { padding-right: 2.875rem; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3e%3c/svg%3e"); background-position: right 0.75rem center, right 1.75rem center; background-size: 16px 12px, 1rem 1rem; }
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus { border-color: rgb(253, 92, 112); box-shadow: rgba(253, 92, 112, 0.25) 0px 0px 0px 2px; }
.was-validated .form-check-input:invalid, .form-check-input.is-invalid { border-color: rgb(253, 92, 112); }
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked { background-color: rgb(253, 92, 112); }
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus { box-shadow: rgba(253, 92, 112, 0.25) 0px 0px 0px 2px; }
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label { color: rgb(253, 92, 112); }
.form-check-inline .form-check-input ~ .invalid-feedback { margin-left: 0.5em; }
.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid, .was-validated .input-group .form-select:invalid, .input-group .form-select.is-invalid { z-index: 2; }
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus, .was-validated .input-group .form-select:invalid:focus, .input-group .form-select.is-invalid:focus { z-index: 3; }
.btn { display: inline-block; font-weight: 700; line-height: 1.4; color: rgb(103, 116, 142); text-align: center; vertical-align: middle; cursor: pointer; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.75rem 1.5rem; font-size: 0.75rem; border-radius: 0.5rem; transition: all 0.15s ease-in 0s; }
@media (prefers-reduced-motion: reduce) {
  .btn { transition: none 0s ease 0s; }
}
.btn:hover { color: rgb(103, 116, 142); }
.btn-check:focus + .btn, .btn:focus { outline: 0px; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px -1px, rgba(0, 0, 0, 0.07) 0px 2px 3px -1px; }
.btn:disabled, .btn.disabled, fieldset:disabled .btn { pointer-events: none; opacity: 0.65; }
.btn-primary { color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-primary:hover { color: rgb(255, 255, 255); background-color: rgb(173, 10, 135); border-color: rgb(162, 10, 127); }
.btn-check:focus + .btn-primary, .btn-primary:focus { color: rgb(255, 255, 255); background-color: rgb(173, 10, 135); border-color: rgb(162, 10, 127); box-shadow: rgba(211, 48, 173, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle { color: rgb(255, 255, 255); background-color: rgb(162, 10, 127); border-color: rgb(152, 9, 119); }
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: rgba(211, 48, 173, 0.5) 0px 0px 0px 0.2rem; }
.btn-primary:disabled, .btn-primary.disabled { color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-secondary { color: rgb(0, 0, 0); background-color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-secondary:hover { color: rgb(0, 0, 0); background-color: rgb(150, 162, 184); border-color: rgb(143, 157, 179); }
.btn-check:focus + .btn-secondary, .btn-secondary:focus { color: rgb(0, 0, 0); background-color: rgb(150, 162, 184); border-color: rgb(143, 157, 179); box-shadow: rgba(111, 124, 145, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle { color: rgb(0, 0, 0); background-color: rgb(156, 168, 188); border-color: rgb(143, 157, 179); }
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus { box-shadow: rgba(111, 124, 145, 0.5) 0px 0px 0px 0.2rem; }
.btn-secondary:disabled, .btn-secondary.disabled { color: rgb(0, 0, 0); background-color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-success { color: rgb(0, 0, 0); background-color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-success:hover { color: rgb(0, 0, 0); background-color: rgb(149, 220, 57); border-color: rgb(143, 218, 45); }
.btn-check:focus + .btn-success, .btn-success:focus { color: rgb(0, 0, 0); background-color: rgb(149, 220, 57); border-color: rgb(143, 218, 45); box-shadow: rgba(111, 182, 19, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle { color: rgb(0, 0, 0); background-color: rgb(155, 222, 69); border-color: rgb(143, 218, 45); }
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus { box-shadow: rgba(111, 182, 19, 0.5) 0px 0px 0px 0.2rem; }
.btn-success:disabled, .btn-success.disabled { color: rgb(0, 0, 0); background-color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-info { color: rgb(0, 0, 0); background-color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-info:hover { color: rgb(0, 0, 0); background-color: rgb(58, 202, 235); border-color: rgb(46, 199, 234); }
.btn-check:focus + .btn-info, .btn-info:focus { color: rgb(0, 0, 0); background-color: rgb(58, 202, 235); border-color: rgb(46, 199, 234); box-shadow: rgba(20, 164, 197, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle { color: rgb(0, 0, 0); background-color: rgb(69, 205, 237); border-color: rgb(46, 199, 234); }
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus { box-shadow: rgba(20, 164, 197, 0.5) 0px 0px 0px 0.2rem; }
.btn-info:disabled, .btn-info.disabled { color: rgb(0, 0, 0); background-color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-warning { color: rgb(0, 0, 0); background-color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-warning:hover { color: rgb(0, 0, 0); background-color: rgb(252, 214, 82); border-color: rgb(251, 212, 71); }
.btn-check:focus + .btn-warning, .btn-warning:focus { color: rgb(0, 0, 0); background-color: rgb(252, 214, 82); border-color: rgb(251, 212, 71); box-shadow: rgba(213, 176, 43, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle { color: rgb(0, 0, 0); background-color: rgb(252, 217, 92); border-color: rgb(251, 212, 71); }
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus { box-shadow: rgba(213, 176, 43, 0.5) 0px 0px 0px 0.2rem; }
.btn-warning:disabled, .btn-warning.disabled { color: rgb(0, 0, 0); background-color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-danger { color: rgb(255, 255, 255); background-color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-danger:hover { color: rgb(255, 255, 255); background-color: rgb(199, 5, 5); border-color: rgb(187, 5, 5); }
.btn-check:focus + .btn-danger, .btn-danger:focus { color: rgb(255, 255, 255); background-color: rgb(199, 5, 5); border-color: rgb(187, 5, 5); box-shadow: rgba(237, 43, 43, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle { color: rgb(255, 255, 255); background-color: rgb(187, 5, 5); border-color: rgb(176, 5, 5); }
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus { box-shadow: rgba(237, 43, 43, 0.5) 0px 0px 0px 0.2rem; }
.btn-danger:disabled, .btn-danger.disabled { color: rgb(255, 255, 255); background-color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-light { color: rgb(0, 0, 0); background-color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-light:hover { color: rgb(0, 0, 0); background-color: rgb(236, 239, 241); border-color: rgb(235, 238, 241); }
.btn-check:focus + .btn-light, .btn-light:focus { color: rgb(0, 0, 0); background-color: rgb(236, 239, 241); border-color: rgb(235, 238, 241); box-shadow: rgba(198, 201, 203, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle { color: rgb(0, 0, 0); background-color: rgb(237, 240, 242); border-color: rgb(235, 238, 241); }
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus { box-shadow: rgba(198, 201, 203, 0.5) 0px 0px 0px 0.2rem; }
.btn-light:disabled, .btn-light.disabled { color: rgb(0, 0, 0); background-color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-dark { color: rgb(255, 255, 255); background-color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-dark:hover { color: rgb(255, 255, 255); background-color: rgb(44, 60, 88); border-color: rgb(42, 57, 82); }
.btn-check:focus + .btn-dark, .btn-dark:focus { color: rgb(255, 255, 255); background-color: rgb(44, 60, 88); border-color: rgb(42, 57, 82); box-shadow: rgba(82, 99, 126, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle { color: rgb(255, 255, 255); background-color: rgb(42, 57, 82); border-color: rgb(39, 53, 77); }
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus { box-shadow: rgba(82, 99, 126, 0.5) 0px 0px 0px 0.2rem; }
.btn-dark:disabled, .btn-dark.disabled { color: rgb(255, 255, 255); background-color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-white { color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-white:hover { color: rgb(0, 0, 0); background-color: white; border-color: white; }
.btn-check:focus + .btn-white, .btn-white:focus { color: rgb(0, 0, 0); background-color: white; border-color: white; box-shadow: rgba(217, 217, 217, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-white, .btn-check:active + .btn-white, .btn-white:active, .btn-white.active, .show > .btn-white.dropdown-toggle { color: rgb(0, 0, 0); background-color: white; border-color: white; }
.btn-check:checked + .btn-white:focus, .btn-check:active + .btn-white:focus, .btn-white:active:focus, .btn-white.active:focus, .show > .btn-white.dropdown-toggle:focus { box-shadow: rgba(217, 217, 217, 0.5) 0px 0px 0px 0.2rem; }
.btn-white:disabled, .btn-white.disabled { color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-outline-primary { color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-outline-primary:hover { color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus { box-shadow: rgba(203, 12, 159, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show { color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus { box-shadow: rgba(203, 12, 159, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-primary:disabled, .btn-outline-primary.disabled { color: rgb(203, 12, 159); background-color: transparent; }
.btn-outline-secondary { color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-outline-secondary:hover { color: rgb(0, 0, 0); background-color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus { box-shadow: rgba(131, 146, 171, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus { box-shadow: rgba(131, 146, 171, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled { color: rgb(131, 146, 171); background-color: transparent; }
.btn-outline-success { color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-outline-success:hover { color: rgb(0, 0, 0); background-color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus { box-shadow: rgba(130, 214, 22, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus { box-shadow: rgba(130, 214, 22, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-success:disabled, .btn-outline-success.disabled { color: rgb(130, 214, 22); background-color: transparent; }
.btn-outline-info { color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-outline-info:hover { color: rgb(0, 0, 0); background-color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus { box-shadow: rgba(23, 193, 232, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus { box-shadow: rgba(23, 193, 232, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-info:disabled, .btn-outline-info.disabled { color: rgb(23, 193, 232); background-color: transparent; }
.btn-outline-warning { color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-outline-warning:hover { color: rgb(0, 0, 0); background-color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus { box-shadow: rgba(251, 207, 51, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus { box-shadow: rgba(251, 207, 51, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-warning:disabled, .btn-outline-warning.disabled { color: rgb(251, 207, 51); background-color: transparent; }
.btn-outline-danger { color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-outline-danger:hover { color: rgb(255, 255, 255); background-color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus { box-shadow: rgba(234, 6, 6, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show { color: rgb(255, 255, 255); background-color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus { box-shadow: rgba(234, 6, 6, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-danger:disabled, .btn-outline-danger.disabled { color: rgb(234, 6, 6); background-color: transparent; }
.btn-outline-light { color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-outline-light:hover { color: rgb(0, 0, 0); background-color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus { box-shadow: rgba(233, 236, 239, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus { box-shadow: rgba(233, 236, 239, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-light:disabled, .btn-outline-light.disabled { color: rgb(233, 236, 239); background-color: transparent; }
.btn-outline-dark { color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-outline-dark:hover { color: rgb(255, 255, 255); background-color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus { box-shadow: rgba(52, 71, 103, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show { color: rgb(255, 255, 255); background-color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus { box-shadow: rgba(52, 71, 103, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-dark:disabled, .btn-outline-dark.disabled { color: rgb(52, 71, 103); background-color: transparent; }
.btn-outline-white { color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-outline-white:hover { color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-check:focus + .btn-outline-white, .btn-outline-white:focus { box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 0px 0.2rem; }
.btn-check:checked + .btn-outline-white, .btn-check:active + .btn-outline-white, .btn-outline-white:active, .btn-outline-white.active, .btn-outline-white.dropdown-toggle.show { color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-check:checked + .btn-outline-white:focus, .btn-check:active + .btn-outline-white:focus, .btn-outline-white:active:focus, .btn-outline-white.active:focus, .btn-outline-white.dropdown-toggle.show:focus { box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 0px 0.2rem; }
.btn-outline-white:disabled, .btn-outline-white.disabled { color: rgb(255, 255, 255); background-color: transparent; }
.btn-link { font-weight: 400; color: rgb(203, 12, 159); text-decoration: none; }
.btn-link:hover { color: rgb(131, 8, 102); text-decoration: none; }
.btn-link:focus { text-decoration: none; }
.btn-link:disabled, .btn-link.disabled { color: rgb(108, 117, 125); }
.btn-lg, .btn-group-lg > .btn { padding: 0.875rem 4rem; font-size: 0.875rem; border-radius: 0.5rem; }
.btn-sm, .btn-group-sm > .btn { padding: 0.5rem 2rem; font-size: 0.75rem; border-radius: 0.5rem; }
.fade { transition: opacity 0.15s linear 0s; }
@media (prefers-reduced-motion: reduce) {
  .fade { transition: none 0s ease 0s; }
}
.fade:not(.show) { opacity: 0; }
.collapse:not(.show) { display: none; }
.collapsing { height: 0px; overflow: hidden; transition: height 0.35s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .collapsing { transition: none 0s ease 0s; }
}
.dropup, .dropend, .dropdown, .dropstart { position: relative; }
.dropdown-toggle { white-space: nowrap; }
.dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-width: 0.3em 0.3em 0px; border-top-style: solid; border-top-color: initial; border-right-style: solid; border-right-color: transparent; border-bottom-style: initial; border-bottom-color: initial; border-left-style: solid; border-left-color: transparent; }
.dropdown-toggle:empty::after { margin-left: 0px; }
.dropdown-menu { position: absolute; z-index: 1000; display: none; min-width: 11rem; padding: 0.5rem 0px; margin: 0px; font-size: 0.875rem; color: rgb(103, 116, 142); text-align: left; list-style: none; background-color: rgb(255, 255, 255); background-clip: padding-box; border: 0px solid transparent; border-radius: 0.5rem; }
.dropdown-menu[data-bs-popper] { top: 100%; left: 0px; margin-top: 1.625rem; }
.dropdown-menu-start { --bs-position: start; }
.dropdown-menu-start[data-bs-popper] { right: auto; left: 0px; }
.dropdown-menu-end { --bs-position: end; }
.dropdown-menu-end[data-bs-popper] { right: 0px; left: auto; }
@media (min-width: 576px) {
  .dropdown-menu-sm-start { --bs-position: start; }
  .dropdown-menu-sm-start[data-bs-popper] { right: auto; left: 0px; }
  .dropdown-menu-sm-end { --bs-position: end; }
  .dropdown-menu-sm-end[data-bs-popper] { right: 0px; left: auto; }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start { --bs-position: start; }
  .dropdown-menu-md-start[data-bs-popper] { right: auto; left: 0px; }
  .dropdown-menu-md-end { --bs-position: end; }
  .dropdown-menu-md-end[data-bs-popper] { right: 0px; left: auto; }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start { --bs-position: start; }
  .dropdown-menu-lg-start[data-bs-popper] { right: auto; left: 0px; }
  .dropdown-menu-lg-end { --bs-position: end; }
  .dropdown-menu-lg-end[data-bs-popper] { right: 0px; left: auto; }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start { --bs-position: start; }
  .dropdown-menu-xl-start[data-bs-popper] { right: auto; left: 0px; }
  .dropdown-menu-xl-end { --bs-position: end; }
  .dropdown-menu-xl-end[data-bs-popper] { right: 0px; left: auto; }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start { --bs-position: start; }
  .dropdown-menu-xxl-start[data-bs-popper] { right: auto; left: 0px; }
  .dropdown-menu-xxl-end { --bs-position: end; }
  .dropdown-menu-xxl-end[data-bs-popper] { right: 0px; left: auto; }
}
.dropup .dropdown-menu[data-bs-popper] { top: auto; bottom: 100%; margin-top: 0px; margin-bottom: 1.625rem; }
.dropup .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-width: 0px 0.3em 0.3em; border-top-style: initial; border-top-color: initial; border-right-style: solid; border-right-color: transparent; border-bottom-style: solid; border-bottom-color: initial; border-left-style: solid; border-left-color: transparent; }
.dropup .dropdown-toggle:empty::after { margin-left: 0px; }
.dropend .dropdown-menu[data-bs-popper] { top: 0px; right: auto; left: 100%; margin-top: 0px; margin-left: 1.625rem; }
.dropend .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-width: 0.3em 0px 0.3em 0.3em; border-top-style: solid; border-top-color: transparent; border-right-style: initial; border-right-color: initial; border-bottom-style: solid; border-bottom-color: transparent; border-left-style: solid; border-left-color: initial; }
.dropend .dropdown-toggle:empty::after { margin-left: 0px; }
.dropend .dropdown-toggle::after { vertical-align: 0px; }
.dropstart .dropdown-menu[data-bs-popper] { top: 0px; right: 100%; left: auto; margin-top: 0px; margin-right: 1.625rem; }
.dropstart .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; }
.dropstart .dropdown-toggle::after { display: none; }
.dropstart .dropdown-toggle::before { display: inline-block; margin-right: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0.3em solid transparent; border-right: 0.3em solid; border-bottom: 0.3em solid transparent; }
.dropstart .dropdown-toggle:empty::after { margin-left: 0px; }
.dropstart .dropdown-toggle::before { vertical-align: 0px; }
.dropdown-divider { height: 0px; margin: 0.5rem 0px; overflow: hidden; border-top: 1px solid transparent; }
.dropdown-item { display: block; width: 100%; padding: 0.3rem 1rem; clear: both; font-weight: 400; color: rgb(103, 116, 142); text-align: inherit; white-space: nowrap; background-color: transparent; border: 0px; }
.dropdown-item:hover, .dropdown-item:focus { color: rgb(52, 71, 103); background-color: rgb(233, 236, 239); }
.dropdown-item.active, .dropdown-item:active { color: rgb(103, 116, 142); text-decoration: none; background-color: transparent; }
.dropdown-item.disabled, .dropdown-item:disabled { color: rgb(108, 117, 125); pointer-events: none; background-color: transparent; }
.dropdown-menu.show { display: block; }
.dropdown-header { display: block; padding: 0.5rem 1rem; margin-bottom: 0px; font-size: 0.875rem; color: rgb(108, 117, 125); white-space: nowrap; }
.dropdown-item-text { display: block; padding: 0.3rem 1rem; color: rgb(103, 116, 142); }
.dropdown-menu-dark { color: rgb(222, 226, 230); background-color: rgb(52, 58, 64); border-color: transparent; }
.dropdown-menu-dark .dropdown-item { color: rgb(222, 226, 230); }
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus { color: rgb(255, 255, 255); background-color: rgba(255, 255, 255, 0.15); }
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active { color: rgb(103, 116, 142); background-color: transparent; }
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled { color: rgb(173, 181, 189); }
.dropdown-menu-dark .dropdown-divider { border-color: transparent; }
.dropdown-menu-dark .dropdown-item-text { color: rgb(222, 226, 230); }
.dropdown-menu-dark .dropdown-header { color: rgb(173, 181, 189); }
.btn-group, .btn-group-vertical { position: relative; display: inline-flex; vertical-align: middle; }
.btn-group > .btn, .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
.btn-group > .btn-check:checked + .btn, .btn-group > .btn-check:focus + .btn, .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn-check:checked + .btn, .btn-group-vertical > .btn-check:focus + .btn, .btn-group-vertical > .btn:hover, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn.active { z-index: 1; }
.btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
.btn-toolbar .input-group { width: auto; }
.btn-group > .btn:not(:first-child), .btn-group > .btn-group:not(:first-child) { margin-left: -1px; }
.btn-group > .btn:not(:last-child):not(.dropdown-toggle), .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.btn-group > .btn:nth-child(n+3), .btn-group > :not(.btn-check) + .btn, .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.dropdown-toggle-split { padding-right: 1.125rem; padding-left: 1.125rem; }
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after { margin-left: 0px; }
.dropstart .dropdown-toggle-split::before { margin-right: 0px; }
.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split { padding-right: 1.5rem; padding-left: 1.5rem; }
.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split { padding-right: 3rem; padding-left: 3rem; }
.btn-group-vertical { flex-direction: column; align-items: flex-start; justify-content: center; }
.btn-group-vertical > .btn, .btn-group-vertical > .btn-group { width: 100%; }
.btn-group-vertical > .btn:not(:first-child), .btn-group-vertical > .btn-group:not(:first-child) { margin-top: -1px; }
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle), .btn-group-vertical > .btn-group:not(:last-child) > .btn { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }
.btn-group-vertical > .btn ~ .btn, .btn-group-vertical > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0px; border-top-right-radius: 0px; }
.nav { display: flex; flex-wrap: wrap; padding-left: 0px; margin-bottom: 0px; list-style: none; }
.nav-link { display: block; padding: 0.5rem 1rem; color: rgb(203, 12, 159); transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .nav-link { transition: none 0s ease 0s; }
}
.nav-link:hover, .nav-link:focus { color: rgb(131, 8, 102); }
.nav-link.disabled { color: rgb(108, 117, 125); pointer-events: none; cursor: default; }
.nav-tabs { border-bottom: 1px solid rgb(222, 226, 230); }
.nav-tabs .nav-link { margin-bottom: -1px; background: none; border: 1px solid transparent; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus { border-color: rgb(233, 236, 239) rgb(233, 236, 239) rgb(222, 226, 230); isolation: isolate; }
.nav-tabs .nav-link.disabled { color: rgb(108, 117, 125); background-color: transparent; border-color: transparent; }
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link { color: rgb(73, 80, 87); background-color: rgb(255, 255, 255); border-color: rgb(222, 226, 230) rgb(222, 226, 230) rgb(255, 255, 255); }
.nav-tabs .dropdown-menu { margin-top: -1px; border-top-left-radius: 0px; border-top-right-radius: 0px; }
.nav-pills .nav-link { background: none; border: 0px; border-radius: 0.75rem; }
.nav-pills .nav-link.active, .nav-pills .show > .nav-link { color: rgb(52, 71, 103); background-color: rgb(255, 255, 255); }
.nav-fill > .nav-link, .nav-fill .nav-item { flex: 1 1 auto; text-align: center; }
.nav-justified > .nav-link, .nav-justified .nav-item { flex-basis: 0px; flex-grow: 1; text-align: center; }
.nav-fill .nav-item .nav-link, .nav-justified .nav-item .nav-link { width: 100%; }
.tab-content > .tab-pane { display: none; }
.tab-content > .active { display: block; }
.navbar { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: 0.5rem 1rem; }
.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
.navbar-brand { padding-top: 0.40625rem; padding-bottom: 0.40625rem; margin-right: 1rem; font-size: 1.125rem; white-space: nowrap; }
.navbar-nav { display: flex; flex-direction: column; padding-left: 0px; margin-bottom: 0px; list-style: none; }
.navbar-nav .nav-link { padding-right: 0px; padding-left: 0px; }
.navbar-nav .dropdown-menu { position: static; }
.navbar-text { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.navbar-collapse { flex-basis: 100%; flex-grow: 1; align-items: center; }
.navbar-toggler { padding: 0.25rem 0.75rem; font-size: 1.125rem; line-height: 1; background-color: transparent; border: 1px solid transparent; border-radius: 0.5rem; transition: box-shadow 0.15s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler { transition: none 0s ease 0s; }
}
.navbar-toggler:hover { text-decoration: none; }
.navbar-toggler:focus { text-decoration: none; outline: 0px; box-shadow: 0px 0px 0px 0.2rem; }
.navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-repeat: no-repeat; background-position: center center; background-size: 100%; }
.navbar-nav-scroll { max-height: var(--bs-scroll-height, 75vh); overflow-y: auto; }
@media (min-width: 576px) {
  .navbar-expand-sm { flex-wrap: nowrap; justify-content: flex-start; }
  .navbar-expand-sm .navbar-nav { flex-direction: row; }
  .navbar-expand-sm .navbar-nav .dropdown-menu { position: absolute; }
  .navbar-expand-sm .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
  .navbar-expand-sm .navbar-nav-scroll { overflow: visible; }
  .navbar-expand-sm .navbar-collapse { display: flex !important; flex-basis: auto; }
  .navbar-expand-sm .navbar-toggler { display: none; }
}
@media (min-width: 768px) {
  .navbar-expand-md { flex-wrap: nowrap; justify-content: flex-start; }
  .navbar-expand-md .navbar-nav { flex-direction: row; }
  .navbar-expand-md .navbar-nav .dropdown-menu { position: absolute; }
  .navbar-expand-md .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
  .navbar-expand-md .navbar-nav-scroll { overflow: visible; }
  .navbar-expand-md .navbar-collapse { display: flex !important; flex-basis: auto; }
  .navbar-expand-md .navbar-toggler { display: none; }
}
@media (min-width: 992px) {
  .navbar-expand-lg { flex-wrap: nowrap; justify-content: flex-start; }
  .navbar-expand-lg .navbar-nav { flex-direction: row; }
  .navbar-expand-lg .navbar-nav .dropdown-menu { position: absolute; }
  .navbar-expand-lg .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
  .navbar-expand-lg .navbar-nav-scroll { overflow: visible; }
  .navbar-expand-lg .navbar-collapse { display: flex !important; flex-basis: auto; }
  .navbar-expand-lg .navbar-toggler { display: none; }
}
@media (min-width: 1200px) {
  .navbar-expand-xl { flex-wrap: nowrap; justify-content: flex-start; }
  .navbar-expand-xl .navbar-nav { flex-direction: row; }
  .navbar-expand-xl .navbar-nav .dropdown-menu { position: absolute; }
  .navbar-expand-xl .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
  .navbar-expand-xl .navbar-nav-scroll { overflow: visible; }
  .navbar-expand-xl .navbar-collapse { display: flex !important; flex-basis: auto; }
  .navbar-expand-xl .navbar-toggler { display: none; }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl { flex-wrap: nowrap; justify-content: flex-start; }
  .navbar-expand-xxl .navbar-nav { flex-direction: row; }
  .navbar-expand-xxl .navbar-nav .dropdown-menu { position: absolute; }
  .navbar-expand-xxl .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
  .navbar-expand-xxl .navbar-nav-scroll { overflow: visible; }
  .navbar-expand-xxl .navbar-collapse { display: flex !important; flex-basis: auto; }
  .navbar-expand-xxl .navbar-toggler { display: none; }
}
.navbar-expand { flex-wrap: nowrap; justify-content: flex-start; }
.navbar-expand .navbar-nav { flex-direction: row; }
.navbar-expand .navbar-nav .dropdown-menu { position: absolute; }
.navbar-expand .navbar-nav .nav-link { padding-right: 0.5rem; padding-left: 0.5rem; }
.navbar-expand .navbar-nav-scroll { overflow: visible; }
.navbar-expand .navbar-collapse { display: flex !important; flex-basis: auto; }
.navbar-expand .navbar-toggler { display: none; }
.navbar-light .navbar-brand { color: rgba(52, 71, 103, 0.9); }
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus { color: rgba(52, 71, 103, 0.9); }
.navbar-light .navbar-nav .nav-link { color: rgb(52, 71, 103); }
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus { color: rgba(52, 71, 103, 0.7); }
.navbar-light .navbar-nav .nav-link.disabled { color: rgba(52, 71, 103, 0.3); }
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .nav-link.active { color: rgba(52, 71, 103, 0.9); }
.navbar-light .navbar-toggler { color: rgb(52, 71, 103); border-color: rgba(52, 71, 103, 0.1); }
.navbar-light .navbar-toggler-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23344767' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
.navbar-light .navbar-text { color: rgb(52, 71, 103); }
.navbar-light .navbar-text a, .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus { color: rgba(52, 71, 103, 0.9); }
.navbar-dark .navbar-brand { color: rgb(255, 255, 255); }
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus { color: rgb(255, 255, 255); }
.navbar-dark .navbar-nav .nav-link { color: rgba(255, 255, 255, 0.85); }
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus { color: rgba(255, 255, 255, 0.75); }
.navbar-dark .navbar-nav .nav-link.disabled { color: rgba(255, 255, 255, 0.25); }
.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active { color: rgb(255, 255, 255); }
.navbar-dark .navbar-toggler { color: rgba(255, 255, 255, 0.85); border-color: rgba(255, 255, 255, 0.1); }
.navbar-dark .navbar-toggler-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
.navbar-dark .navbar-text { color: rgba(255, 255, 255, 0.85); }
.navbar-dark .navbar-text a, .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus { color: rgb(255, 255, 255); }
.card { position: relative; display: flex; flex-direction: column; min-width: 0px; overflow-wrap: break-word; background-color: rgb(255, 255, 255); background-clip: border-box; border: 0px solid rgba(0, 0, 0, 0.125); border-radius: 1rem; }
.card > hr { margin-right: 0px; margin-left: 0px; }
.card > .list-group { border-top: inherit; border-bottom: inherit; }
.card > .list-group:first-child { border-top-width: 0px; border-top-left-radius: 1rem; border-top-right-radius: 1rem; }
.card > .list-group:last-child { border-bottom-width: 0px; border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem; }
.card > .card-header + .list-group, .card > .list-group + .card-footer { border-top: 0px; }
.card-body { flex: 1 1 auto; padding: 1rem; }
.card-title { margin-bottom: 0.5rem; }
.card-subtitle { margin-top: -0.25rem; margin-bottom: 0px; }
.card-text:last-child { margin-bottom: 0px; }
.card-link:hover { text-decoration: none; }
.card-link + .card-link { margin-left: 1rem; }
.card-header { padding: 0.5rem 1rem; margin-bottom: 0px; background-color: rgb(255, 255, 255); border-bottom: 0px solid rgba(0, 0, 0, 0.125); }
.card-header:first-child { border-radius: 1rem 1rem 0px 0px; }
.card-footer { padding: 0.5rem 1rem; background-color: rgb(255, 255, 255); border-top: 0px solid rgba(0, 0, 0, 0.125); }
.card-footer:last-child { border-radius: 0px 0px 1rem 1rem; }
.card-header-tabs { margin-right: -0.5rem; margin-bottom: -0.5rem; margin-left: -0.5rem; border-bottom: 0px; }
.card-header-pills { margin-right: -0.5rem; margin-left: -0.5rem; }
.card-img-overlay { position: absolute; inset: 0px; padding: 1rem; border-radius: 1rem; }
.card-img, .card-img-top, .card-img-bottom { width: 100%; }
.card-img, .card-img-top { border-top-left-radius: 1rem; border-top-right-radius: 1rem; }
.card-img, .card-img-bottom { border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem; }
.card-group > .card { margin-bottom: 0.75rem; }
@media (min-width: 576px) {
  .card-group { display: flex; flex-flow: wrap; }
  .card-group > .card { flex: 1 0 0%; margin-bottom: 0px; }
  .card-group > .card + .card { margin-left: 0px; border-left: 0px; }
  .card-group > .card:not(:last-child) { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
  .card-group > .card:not(:last-child) .card-img-top, .card-group > .card:not(:last-child) .card-header { border-top-right-radius: 0px; }
  .card-group > .card:not(:last-child) .card-img-bottom, .card-group > .card:not(:last-child) .card-footer { border-bottom-right-radius: 0px; }
  .card-group > .card:not(:first-child) { border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
  .card-group > .card:not(:first-child) .card-img-top, .card-group > .card:not(:first-child) .card-header { border-top-left-radius: 0px; }
  .card-group > .card:not(:first-child) .card-img-bottom, .card-group > .card:not(:first-child) .card-footer { border-bottom-left-radius: 0px; }
}
.accordion-button { position: relative; display: flex; align-items: center; width: 100%; padding: 1rem; font-size: 1rem; color: rgb(103, 116, 142); text-align: left; background-color: transparent; border: 0px; border-radius: 0px; overflow-anchor: none; transition: all 0.15s ease-in 0s, border-radius 0.15s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .accordion-button { transition: none 0s ease 0s; }
}
.accordion-button:not(.collapsed) { color: rgb(52, 71, 103); background-color: transparent; box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px inset; }
.accordion-button:not(.collapsed)::after { background-image: none; transform: rotate(180deg); }
.accordion-button::after { flex-shrink: 0; width: 1rem; height: 1rem; margin-left: auto; content: ""; background-image: none; background-repeat: no-repeat; background-size: 1rem; transition: transform 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after { transition: none 0s ease 0s; }
}
.accordion-button:hover { z-index: 2; }
.accordion-button:focus { z-index: 3; border-color: rgb(226, 147, 211); outline: 0px; box-shadow: none; }
.accordion-header { margin-bottom: 0px; }
.accordion-item { background-color: transparent; border: 0px solid rgba(0, 0, 0, 0.125); }
.accordion-item:first-of-type { border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; }
.accordion-item:first-of-type .accordion-button { border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; }
.accordion-item:not(:first-of-type) { border-top: 0px; }
.accordion-item:last-of-type { border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.accordion-item:last-of-type .accordion-button.collapsed { border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.accordion-item:last-of-type .accordion-collapse { border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.accordion-body { padding: 1rem; }
.accordion-flush .accordion-collapse { border-width: 0px; }
.accordion-flush .accordion-item { border-right: 0px; border-left: 0px; border-radius: 0px; }
.accordion-flush .accordion-item:first-child { border-top: 0px; }
.accordion-flush .accordion-item:last-child { border-bottom: 0px; }
.accordion-flush .accordion-item .accordion-button { border-radius: 0px; }
.breadcrumb { display: flex; flex-wrap: wrap; padding: 0.5rem 1rem; margin-bottom: 1rem; list-style: none; background-color: rgb(233, 236, 239); border-radius: 0.5rem; }
.breadcrumb-item + .breadcrumb-item { padding-left: 0.5rem; }
.breadcrumb-item + .breadcrumb-item::before { float: left; padding-right: 0.5rem; color: rgb(108, 117, 125); content: var(--bs-breadcrumb-divider, "/"); }
.breadcrumb-item.active { color: rgb(108, 117, 125); }
.pagination { display: flex; padding-left: 0px; list-style: none; }
.page-link { position: relative; display: block; color: rgb(203, 12, 159); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 226, 230); transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .page-link { transition: none 0s ease 0s; }
}
.page-link:hover { z-index: 2; color: rgb(131, 8, 102); background-color: rgb(233, 236, 239); border-color: rgb(222, 226, 230); }
.page-link:focus { z-index: 3; color: rgb(131, 8, 102); background-color: rgb(233, 236, 239); outline: 0px; box-shadow: rgba(203, 12, 159, 0.25) 0px 0px 0px 0.2rem; }
.page-item:not(:first-child) .page-link { margin-left: -1px; }
.page-item.active .page-link { z-index: 3; color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.page-item.disabled .page-link { color: rgb(108, 117, 125); pointer-events: none; background-color: rgb(255, 255, 255); border-color: rgb(222, 226, 230); }
.page-link { padding: 0.375rem 0.75rem; }
.page-item:first-child .page-link { border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem; }
.page-item:last-child .page-link { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; }
.pagination-lg .page-link { padding: 0.75rem 1.5rem; font-size: 1.125rem; }
.pagination-lg .page-item:first-child .page-link { border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem; }
.pagination-lg .page-item:last-child .page-link { border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem; }
.pagination-sm .page-link { padding: 0.25rem 0.5rem; font-size: 0.875rem; }
.pagination-sm .page-item:first-child .page-link { border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.pagination-sm .page-item:last-child .page-link { border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem; }
.badge { display: inline-block; padding: 0.55em 0.9em; font-size: 0.75em; font-weight: 700; line-height: 1; color: rgb(255, 255, 255); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.45rem; }
.badge:empty { display: none; }
.btn .badge { position: relative; top: -1px; }
.alert { position: relative; padding: 1rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: 0.5rem; }
.alert-heading { color: inherit; }
.alert-link { font-weight: 600; }
.alert-dismissible { padding-right: 3rem; }
.alert-dismissible .btn-close { position: absolute; top: 0px; right: 0px; z-index: 2; padding: 1.25rem 1rem; }
.alert-primary { color: rgb(122, 7, 95); background-color: rgb(245, 206, 236); border-color: rgb(239, 182, 226); }
.alert-primary .alert-link { color: rgb(98, 6, 76); }
.alert-secondary { color: rgb(79, 88, 103); background-color: rgb(230, 233, 238); border-color: rgb(218, 222, 230); }
.alert-secondary .alert-link { color: rgb(63, 70, 82); }
.alert-success { color: rgb(52, 86, 9); background-color: rgb(230, 247, 208); border-color: rgb(218, 243, 185); }
.alert-success .alert-link { color: rgb(42, 69, 7); }
.alert-info { color: rgb(14, 116, 139); background-color: rgb(209, 243, 250); border-color: rgb(185, 236, 248); }
.alert-info .alert-link { color: rgb(11, 93, 111); }
.alert-warning { color: rgb(100, 83, 20); background-color: rgb(254, 245, 214); border-color: rgb(254, 241, 194); }
.alert-warning .alert-link { color: rgb(80, 66, 16); }
.alert-danger { color: rgb(140, 4, 4); background-color: rgb(251, 205, 205); border-color: rgb(249, 180, 180); }
.alert-danger .alert-link { color: rgb(112, 3, 3); }
.alert-light { color: rgb(93, 94, 96); background-color: rgb(251, 251, 252); border-color: rgb(248, 249, 250); }
.alert-light .alert-link { color: rgb(74, 75, 77); }
.alert-dark { color: rgb(31, 43, 62); background-color: rgb(214, 218, 225); border-color: rgb(194, 200, 209); }
.alert-dark .alert-link { color: rgb(25, 34, 50); }
.alert-white { color: rgb(102, 102, 102); background-color: white; border-color: white; }
.alert-white .alert-link { color: rgb(82, 82, 82); }
@keyframes progress-bar-stripes { 
  0% { background-position-x: 3px; }
}
.progress { display: flex; height: 3px; overflow: hidden; font-size: 0.75rem; background-color: rgb(233, 236, 239); border-radius: 0.5rem; }
.progress-bar { display: flex; flex-direction: column; justify-content: center; overflow: hidden; color: rgb(255, 255, 255); text-align: center; white-space: nowrap; background-color: rgb(203, 12, 159); transition: width 0.6s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .progress-bar { transition: none 0s ease 0s; }
}
.progress-bar-striped { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: 3px 3px; }
.progress-bar-animated { animation: 1s linear 0s infinite normal none running progress-bar-stripes; }
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated { animation: auto ease 0s 1 normal none running none; }
}
.list-group { display: flex; flex-direction: column; padding-left: 0px; margin-bottom: 0px; border-radius: 0.5rem; }
.list-group-numbered { list-style-type: none; counter-reset: section 0; }
.list-group-numbered > li::before { content: counters(section, ".") ". "; counter-increment: section 1; }
.list-group-item-action { width: 100%; color: rgb(73, 80, 87); text-align: inherit; }
.list-group-item-action:hover, .list-group-item-action:focus { z-index: 1; color: rgb(73, 80, 87); text-decoration: none; background-color: rgb(248, 249, 250); }
.list-group-item-action:active { color: rgb(103, 116, 142); background-color: rgb(233, 236, 239); }
.list-group-item { position: relative; display: block; padding: 0.5rem 1rem; color: inherit; background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.125); }
.list-group-item:first-child { border-top-left-radius: inherit; border-top-right-radius: inherit; }
.list-group-item:last-child { border-bottom-right-radius: inherit; border-bottom-left-radius: inherit; }
.list-group-item.disabled, .list-group-item:disabled { color: rgb(108, 117, 125); pointer-events: none; background-color: rgb(255, 255, 255); }
.list-group-item.active { z-index: 2; color: rgb(255, 255, 255); background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.list-group-item + .list-group-item { border-top-width: 0px; }
.list-group-item + .list-group-item.active { margin-top: -1px; border-top-width: 1px; }
.list-group-horizontal { flex-direction: row; }
.list-group-horizontal > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
.list-group-horizontal > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
.list-group-horizontal > .list-group-item.active { margin-top: 0px; }
.list-group-horizontal > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
.list-group-horizontal > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
@media (min-width: 576px) {
  .list-group-horizontal-sm { flex-direction: row; }
  .list-group-horizontal-sm > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
  .list-group-horizontal-sm > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
  .list-group-horizontal-sm > .list-group-item.active { margin-top: 0px; }
  .list-group-horizontal-sm > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
}
@media (min-width: 768px) {
  .list-group-horizontal-md { flex-direction: row; }
  .list-group-horizontal-md > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
  .list-group-horizontal-md > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
  .list-group-horizontal-md > .list-group-item.active { margin-top: 0px; }
  .list-group-horizontal-md > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg { flex-direction: row; }
  .list-group-horizontal-lg > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
  .list-group-horizontal-lg > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
  .list-group-horizontal-lg > .list-group-item.active { margin-top: 0px; }
  .list-group-horizontal-lg > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl { flex-direction: row; }
  .list-group-horizontal-xl > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
  .list-group-horizontal-xl > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
  .list-group-horizontal-xl > .list-group-item.active { margin-top: 0px; }
  .list-group-horizontal-xl > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl { flex-direction: row; }
  .list-group-horizontal-xxl > .list-group-item:first-child { border-bottom-left-radius: 0.5rem; border-top-right-radius: 0px; }
  .list-group-horizontal-xxl > .list-group-item:last-child { border-top-right-radius: 0.5rem; border-bottom-left-radius: 0px; }
  .list-group-horizontal-xxl > .list-group-item.active { margin-top: 0px; }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item { border-top-width: 1px; border-left-width: 0px; }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active { margin-left: -1px; border-left-width: 1px; }
}
.list-group-flush { border-radius: 0px; }
.list-group-flush > .list-group-item { border-width: 0px 0px 1px; }
.list-group-flush > .list-group-item:last-child { border-bottom-width: 0px; }
.list-group-item-primary { color: rgb(122, 7, 95); background-color: rgb(245, 206, 236); }
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: rgb(122, 7, 95); background-color: rgb(221, 185, 212); }
.list-group-item-primary.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(122, 7, 95); border-color: rgb(122, 7, 95); }
.list-group-item-secondary { color: rgb(79, 88, 103); background-color: rgb(230, 233, 238); }
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus { color: rgb(79, 88, 103); background-color: rgb(207, 210, 214); }
.list-group-item-secondary.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(79, 88, 103); border-color: rgb(79, 88, 103); }
.list-group-item-success { color: rgb(52, 86, 9); background-color: rgb(230, 247, 208); }
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus { color: rgb(52, 86, 9); background-color: rgb(207, 222, 187); }
.list-group-item-success.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(52, 86, 9); border-color: rgb(52, 86, 9); }
.list-group-item-info { color: rgb(14, 116, 139); background-color: rgb(209, 243, 250); }
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus { color: rgb(14, 116, 139); background-color: rgb(188, 219, 225); }
.list-group-item-info.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(14, 116, 139); border-color: rgb(14, 116, 139); }
.list-group-item-warning { color: rgb(100, 83, 20); background-color: rgb(254, 245, 214); }
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus { color: rgb(100, 83, 20); background-color: rgb(229, 221, 193); }
.list-group-item-warning.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(100, 83, 20); border-color: rgb(100, 83, 20); }
.list-group-item-danger { color: rgb(140, 4, 4); background-color: rgb(251, 205, 205); }
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus { color: rgb(140, 4, 4); background-color: rgb(226, 185, 185); }
.list-group-item-danger.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(140, 4, 4); border-color: rgb(140, 4, 4); }
.list-group-item-light { color: rgb(93, 94, 96); background-color: rgb(251, 251, 252); }
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus { color: rgb(93, 94, 96); background-color: rgb(226, 226, 227); }
.list-group-item-light.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(93, 94, 96); border-color: rgb(93, 94, 96); }
.list-group-item-dark { color: rgb(31, 43, 62); background-color: rgb(214, 218, 225); }
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus { color: rgb(31, 43, 62); background-color: rgb(193, 196, 203); }
.list-group-item-dark.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(31, 43, 62); border-color: rgb(31, 43, 62); }
.list-group-item-white { color: rgb(102, 102, 102); background-color: white; }
.list-group-item-white.list-group-item-action:hover, .list-group-item-white.list-group-item-action:focus { color: rgb(102, 102, 102); background-color: rgb(230, 230, 230); }
.list-group-item-white.list-group-item-action.active { color: rgb(255, 255, 255); background-color: rgb(102, 102, 102); border-color: rgb(102, 102, 102); }
.btn-close { box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em; color: rgb(255, 255, 255); background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center center / 1em no-repeat transparent; border: 0px; border-radius: 0.25rem; opacity: 0.5; }
.btn-close:hover { color: rgb(255, 255, 255); text-decoration: none; opacity: 0.75; }
.btn-close:focus { outline: 0px; box-shadow: rgba(203, 12, 159, 0.25) 0px 0px 0px 0.2rem; opacity: 1; }
.btn-close:disabled, .btn-close.disabled { pointer-events: none; user-select: none; opacity: 0.25; }
.btn-close-white { filter: invert(1) grayscale(100%) brightness(200%); }
.toast { width: 350px; max-width: 100%; font-size: 0.875rem; pointer-events: auto; background-color: rgba(255, 255, 255, 0.85); background-clip: padding-box; border: 0px solid transparent; box-shadow: rgba(20, 20, 20, 0.12) 0px 0.25rem 0.375rem -0.0625rem, rgba(20, 20, 20, 0.07) 0px 0.125rem 0.25rem -0.0625rem; border-radius: 0.5rem; }
.toast:not(.showing):not(.show) { opacity: 0; }
.toast.hide { display: none; }
.toast-container { width: max-content; max-width: 100%; pointer-events: none; }
.toast-container > :not(:last-child) { margin-bottom: 1.5rem; }
.toast-header { display: flex; align-items: center; padding: 0.75rem; color: rgb(52, 71, 103); background-color: rgba(255, 255, 255, 0.85); background-clip: padding-box; border-bottom: 0px solid rgba(0, 0, 0, 0.05); border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
.toast-header .btn-close { margin-right: -0.375rem; margin-left: 0.75rem; }
.toast-body { padding: 0.75rem; overflow-wrap: break-word; }
.modal { position: fixed; top: 0px; left: 0px; z-index: 1050; display: none; width: 100%; height: 100%; overflow: hidden auto; outline: 0px; }
.modal-dialog { position: relative; width: auto; margin: 0.5rem; pointer-events: none; }
.modal.fade .modal-dialog { transition: transform 0.3s ease-out 0s; transform: translate(0px, -50px); }
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog { transition: none 0s ease 0s; }
}
.modal.show .modal-dialog { transform: none; }
.modal.modal-static .modal-dialog { transform: scale(1.02); }
.modal-dialog-scrollable { height: calc(100% - 1rem); }
.modal-dialog-scrollable .modal-content { max-height: 100%; overflow: hidden; }
.modal-dialog-scrollable .modal-body { overflow-y: auto; }
.modal-dialog-centered { display: flex; align-items: center; min-height: calc(100% - 1rem); }
.modal-content { position: relative; display: flex; flex-direction: column; width: 100%; pointer-events: auto; background-color: rgb(255, 255, 255); background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.75rem; outline: 0px; }
.modal-backdrop { position: fixed; top: 0px; left: 0px; z-index: 1040; width: 100vw; height: 100vh; background-color: rgb(0, 0, 0); }
.modal-backdrop.fade { opacity: 0; }
.modal-backdrop.show { opacity: 0.5; }
.modal-header { display: flex; flex-shrink: 0; align-items: center; justify-content: space-between; padding: 1rem; border-bottom: 1px solid rgb(222, 226, 230); border-top-left-radius: calc(-1px + 0.75rem); border-top-right-radius: calc(-1px + 0.75rem); }
.modal-header .btn-close { padding: 0.5rem; margin: -0.5rem -0.5rem -0.5rem auto; }
.modal-title { margin-bottom: 0px; line-height: 1.5; }
.modal-body { position: relative; flex: 1 1 auto; padding: 1rem; }
.modal-footer { display: flex; flex-wrap: wrap; flex-shrink: 0; align-items: center; justify-content: flex-end; padding: 0.75rem; border-top: 1px solid rgb(222, 226, 230); border-bottom-right-radius: calc(-1px + 0.75rem); border-bottom-left-radius: calc(-1px + 0.75rem); }
.modal-footer > * { margin: 0.25rem; }
@media (min-width: 576px) {
  .modal-dialog { max-width: 500px; margin: 1.75rem auto; }
  .modal-dialog-scrollable { height: calc(100% - 3.5rem); }
  .modal-dialog-centered { min-height: calc(100% - 3.5rem); }
  .modal-sm { max-width: 300px; }
}
@media (min-width: 992px) {
  .modal-lg, .modal-xl { max-width: 800px; }
}
@media (min-width: 1200px) {
  .modal-xl { max-width: 1140px; }
}
.modal-fullscreen { width: 100vw; max-width: none; height: 100%; margin: 0px; }
.modal-fullscreen .modal-content { height: 100%; border: 0px; border-radius: 0px; }
.modal-fullscreen .modal-header { border-radius: 0px; }
.modal-fullscreen .modal-body { overflow-y: auto; }
.modal-fullscreen .modal-footer { border-radius: 0px; }
@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down { width: 100vw; max-width: none; height: 100%; margin: 0px; }
  .modal-fullscreen-sm-down .modal-content { height: 100%; border: 0px; border-radius: 0px; }
  .modal-fullscreen-sm-down .modal-header { border-radius: 0px; }
  .modal-fullscreen-sm-down .modal-body { overflow-y: auto; }
  .modal-fullscreen-sm-down .modal-footer { border-radius: 0px; }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down { width: 100vw; max-width: none; height: 100%; margin: 0px; }
  .modal-fullscreen-md-down .modal-content { height: 100%; border: 0px; border-radius: 0px; }
  .modal-fullscreen-md-down .modal-header { border-radius: 0px; }
  .modal-fullscreen-md-down .modal-body { overflow-y: auto; }
  .modal-fullscreen-md-down .modal-footer { border-radius: 0px; }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down { width: 100vw; max-width: none; height: 100%; margin: 0px; }
  .modal-fullscreen-lg-down .modal-content { height: 100%; border: 0px; border-radius: 0px; }
  .modal-fullscreen-lg-down .modal-header { border-radius: 0px; }
  .modal-fullscreen-lg-down .modal-body { overflow-y: auto; }
  .modal-fullscreen-lg-down .modal-footer { border-radius: 0px; }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down { width: 100vw; max-width: none; height: 100%; margin: 0px; }
  .modal-fullscreen-xl-down .modal-content { height: 100%; border: 0px; border-radius: 0px; }
  .modal-fullscreen-xl-down .modal-header { border-radius: 0px; }
  .modal-fullscreen-xl-down .modal-body { overflow-y: auto; }
  .modal-fullscreen-xl-down .modal-footer { border-radius: 0px; }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down { width: 100vw; max-width: none; height: 100%; margin: 0px; }
  .modal-fullscreen-xxl-down .modal-content { height: 100%; border: 0px; border-radius: 0px; }
  .modal-fullscreen-xxl-down .modal-header { border-radius: 0px; }
  .modal-fullscreen-xxl-down .modal-body { overflow-y: auto; }
  .modal-fullscreen-xxl-down .modal-footer { border-radius: 0px; }
}
.tooltip { position: absolute; z-index: 1070; display: block; margin: 0px; font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; word-spacing: normal; white-space: normal; line-break: auto; font-size: 0.875rem; overflow-wrap: break-word; opacity: 0; }
.tooltip.show { opacity: 0.9; }
.tooltip .tooltip-arrow { position: absolute; display: block; width: 0.8rem; height: 0.4rem; }
.tooltip .tooltip-arrow::before { position: absolute; content: ""; border-color: transparent; border-style: solid; }
.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^="top"] { padding: 0.4rem 0px; }
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow { bottom: 0px; }
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before { top: -1px; border-width: 0.4rem 0.4rem 0px; border-top-color: rgb(0, 0, 0); }
.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^="right"] { padding: 0px 0.4rem; }
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow { left: 0px; width: 0.4rem; height: 0.8rem; }
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before { right: -1px; border-width: 0.4rem 0.4rem 0.4rem 0px; border-right-color: rgb(0, 0, 0); }
.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^="bottom"] { padding: 0.4rem 0px; }
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow { top: 0px; }
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before { bottom: -1px; border-width: 0px 0.4rem 0.4rem; border-bottom-color: rgb(0, 0, 0); }
.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^="left"] { padding: 0px 0.4rem; }
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow { right: 0px; width: 0.4rem; height: 0.8rem; }
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before { left: -1px; border-width: 0.4rem 0px 0.4rem 0.4rem; border-left-color: rgb(0, 0, 0); }
.tooltip-inner { max-width: 200px; padding: 0.25rem 0.5rem; color: rgb(255, 255, 255); text-align: center; background-color: rgb(0, 0, 0); border-radius: 0.5rem; }
.popover { position: absolute; top: 0px; left: 0px; z-index: 1060; display: block; max-width: 276px; font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; word-spacing: normal; white-space: normal; line-break: auto; font-size: 0.75rem; overflow-wrap: break-word; background-color: rgb(255, 255, 255); background-clip: padding-box; border: 0px solid rgba(0, 0, 0, 0.2); border-radius: 0.75rem; }
.popover .popover-arrow { position: absolute; display: block; width: 1rem; height: 0.5rem; }
.popover .popover-arrow::before, .popover .popover-arrow::after { position: absolute; display: block; content: ""; border-color: transparent; border-style: solid; }
.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow { bottom: calc(0px - 0.5rem); }
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before { bottom: 0px; border-width: 0.5rem 0.5rem 0px; border-top-color: rgba(0, 0, 0, 0.25); }
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after { bottom: 0px; border-width: 0.5rem 0.5rem 0px; border-top-color: rgb(255, 255, 255); }
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow { left: calc(0px - 0.5rem); width: 0.5rem; height: 1rem; }
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before { left: 0px; border-width: 0.5rem 0.5rem 0.5rem 0px; border-right-color: rgba(0, 0, 0, 0.25); }
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after { left: 0px; border-width: 0.5rem 0.5rem 0.5rem 0px; border-right-color: rgb(255, 255, 255); }
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow { top: calc(0px - 0.5rem); }
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before { top: 0px; border-width: 0px 0.5rem 0.5rem; border-bottom-color: rgba(0, 0, 0, 0.25); }
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after { top: 0px; border-width: 0px 0.5rem 0.5rem; border-bottom-color: rgb(255, 255, 255); }
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^="bottom"] .popover-header::before { position: absolute; top: 0px; left: 50%; display: block; width: 1rem; margin-left: -0.5rem; content: ""; border-bottom: 0px solid rgb(233, 236, 239); }
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow { right: calc(0px - 0.5rem); width: 0.5rem; height: 1rem; }
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::before { right: 0px; border-width: 0.5rem 0px 0.5rem 0.5rem; border-left-color: rgba(0, 0, 0, 0.25); }
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::after { right: 0px; border-width: 0.5rem 0px 0.5rem 0.5rem; border-left-color: rgb(255, 255, 255); }
.popover-header { padding: 0.5rem 1rem; margin-bottom: 0px; font-size: 1rem; color: rgb(52, 71, 103); background-color: rgb(233, 236, 239); border-bottom: 0px solid rgba(0, 0, 0, 0.2); border-top-left-radius: calc(0px + 0.75rem); border-top-right-radius: calc(0px + 0.75rem); }
.popover-header:empty { display: none; }
.popover-body { padding: 1rem; color: rgb(103, 116, 142); }
.carousel { position: relative; }
.carousel.pointer-event { touch-action: pan-y; }
.carousel-inner { position: relative; width: 100%; overflow: hidden; }
.carousel-inner::after { display: block; clear: both; content: ""; }
.carousel-item { position: relative; display: none; float: left; width: 100%; margin-right: -100%; backface-visibility: hidden; transition: transform 0.6s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .carousel-item { transition: none 0s ease 0s; }
}
.carousel-item.active, .carousel-item-next, .carousel-item-prev { display: block; }
.carousel-item-next:not(.carousel-item-start), .active.carousel-item-end { transform: translateX(100%); }
.carousel-item-prev:not(.carousel-item-end), .active.carousel-item-start { transform: translateX(-100%); }
.carousel-fade .carousel-item { opacity: 0; transition-property: opacity; transform: none; }
.carousel-fade .carousel-item.active, .carousel-fade .carousel-item-next.carousel-item-start, .carousel-fade .carousel-item-prev.carousel-item-end { z-index: 1; opacity: 1; }
.carousel-fade .active.carousel-item-start, .carousel-fade .active.carousel-item-end { z-index: 0; opacity: 0; transition: opacity 0s ease 0.6s; }
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start, .carousel-fade .active.carousel-item-end { transition: none 0s ease 0s; }
}
.carousel-control-prev, .carousel-control-next { position: absolute; top: 0px; bottom: 0px; z-index: 1; display: flex; align-items: center; justify-content: center; width: 15%; padding: 0px; color: rgb(255, 255, 255); text-align: center; background: none; border: 0px; opacity: 0.5; transition: opacity 0.15s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev, .carousel-control-next { transition: none 0s ease 0s; }
}
.carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus { color: rgb(255, 255, 255); text-decoration: none; outline: 0px; opacity: 0.9; }
.carousel-control-prev { left: 0px; }
.carousel-control-next { right: 0px; }
.carousel-control-prev-icon, .carousel-control-next-icon { display: inline-block; width: 2rem; height: 2rem; background-repeat: no-repeat; background-position: 50% center; background-size: 100% 100%; }
.carousel-control-prev-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e"); }
.carousel-control-next-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"); }
.carousel-indicators { position: absolute; right: 0px; bottom: 0px; left: 0px; z-index: 2; display: flex; justify-content: center; padding: 0px; margin-right: 15%; margin-bottom: 1rem; margin-left: 15%; list-style: none; }
.carousel-indicators [data-bs-target] { box-sizing: content-box; flex: 0 1 auto; width: 30px; height: 3px; padding: 0px; margin-right: 3px; margin-left: 3px; text-indent: -999px; cursor: pointer; background-color: rgb(255, 255, 255); background-clip: padding-box; border-width: 10px 0px; border-right-style: initial; border-left-style: initial; border-right-color: initial; border-left-color: initial; border-image: initial; border-top-style: solid; border-top-color: transparent; border-bottom-style: solid; border-bottom-color: transparent; opacity: 0.5; transition: opacity 0.6s ease 0s; }
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] { transition: none 0s ease 0s; }
}
.carousel-indicators .active { opacity: 1; }
.carousel-caption { position: absolute; right: 15%; bottom: 1.25rem; left: 15%; padding-top: 1.25rem; padding-bottom: 1.25rem; color: rgb(255, 255, 255); text-align: center; }
.carousel-dark .carousel-control-prev-icon, .carousel-dark .carousel-control-next-icon { filter: invert(1) grayscale(1); }
.carousel-dark .carousel-indicators [data-bs-target] { background-color: rgb(0, 0, 0); }
.carousel-dark .carousel-caption { color: rgb(0, 0, 0); }
@keyframes spinner-border { 
  100% { transform: rotate(360deg); }
}
.spinner-border { display: inline-block; width: 2rem; height: 2rem; vertical-align: -0.125em; border-width: 0.25em; border-style: solid; border-color: currentcolor transparent currentcolor currentcolor; border-image: initial; border-radius: 50%; animation: 0.75s linear 0s infinite normal none running spinner-border; }
.spinner-border-sm { width: 1rem; height: 1rem; border-width: 0.2em; }
@keyframes spinner-grow { 
  0% { transform: scale(0); }
  50% { opacity: 1; transform: none; }
}
.spinner-grow { display: inline-block; width: 2rem; height: 2rem; vertical-align: -0.125em; background-color: currentcolor; border-radius: 50%; opacity: 0; animation: 0.75s linear 0s infinite normal none running spinner-grow; }
.spinner-grow-sm { width: 1rem; height: 1rem; }
@media (prefers-reduced-motion: reduce) {
  .spinner-border, .spinner-grow { animation-duration: 1.5s; }
}
.offcanvas { position: fixed; bottom: 0px; z-index: 1050; display: flex; flex-direction: column; max-width: 100%; visibility: hidden; background-color: rgb(255, 255, 255); background-clip: padding-box; outline: 0px; transition: transform 0.3s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .offcanvas { transition: none 0s ease 0s; }
}
.offcanvas-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem; }
.offcanvas-header .btn-close { padding: 0.5rem; margin-top: -0.5rem; margin-right: -0.5rem; margin-bottom: -0.5rem; }
.offcanvas-title { margin-bottom: 0px; line-height: 1.5; }
.offcanvas-body { flex-grow: 1; padding: 1rem; overflow-y: auto; }
.offcanvas-start { top: 0px; left: 0px; width: 400px; border-right: 1px solid rgba(0, 0, 0, 0.2); transform: translateX(-100%); }
.offcanvas-end { top: 0px; right: 0px; width: 400px; border-left: 1px solid rgba(0, 0, 0, 0.2); transform: translateX(100%); }
.offcanvas-top { top: 0px; right: 0px; left: 0px; height: 30vh; max-height: 100%; border-bottom: 1px solid rgba(0, 0, 0, 0.2); transform: translateY(-100%); }
.offcanvas-bottom { right: 0px; left: 0px; height: 30vh; max-height: 100%; border-top: 1px solid rgba(0, 0, 0, 0.2); transform: translateY(100%); }
.offcanvas.show { transform: none; }
.clearfix::after { display: block; clear: both; content: ""; }
.link-primary { color: rgb(203, 12, 159); }
.link-primary:hover, .link-primary:focus { color: rgb(162, 10, 127); }
.link-secondary { color: rgb(131, 146, 171); }
.link-secondary:hover, .link-secondary:focus { color: rgb(156, 168, 188); }
.link-success { color: rgb(130, 214, 22); }
.link-success:hover, .link-success:focus { color: rgb(155, 222, 69); }
.link-info { color: rgb(23, 193, 232); }
.link-info:hover, .link-info:focus { color: rgb(69, 205, 237); }
.link-warning { color: rgb(251, 207, 51); }
.link-warning:hover, .link-warning:focus { color: rgb(252, 217, 92); }
.link-danger { color: rgb(234, 6, 6); }
.link-danger:hover, .link-danger:focus { color: rgb(187, 5, 5); }
.link-light { color: rgb(233, 236, 239); }
.link-light:hover, .link-light:focus { color: rgb(237, 240, 242); }
.link-dark { color: rgb(52, 71, 103); }
.link-dark:hover, .link-dark:focus { color: rgb(42, 57, 82); }
.link-white { color: rgb(255, 255, 255); }
.link-white:hover, .link-white:focus { color: white; }
.ratio { position: relative; width: 100%; }
.ratio::before { display: block; padding-top: var(--bs-aspect-ratio); content: ""; }
.ratio > * { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; }
.ratio-1x1 { --bs-aspect-ratio: 100%; }
.ratio-4x3 { --bs-aspect-ratio: calc(3 / 4 * 100%); }
.ratio-16x9 { --bs-aspect-ratio: calc(9 / 16 * 100%); }
.ratio-21x9 { --bs-aspect-ratio: calc(9 / 21 * 100%); }
.fixed-top { position: fixed; top: 0px; right: 0px; left: 0px; z-index: 1030; }
.fixed-bottom { position: fixed; right: 0px; bottom: 0px; left: 0px; z-index: 1030; }
.sticky-top { position: sticky; top: 0px; z-index: 1020; }
@media (min-width: 576px) {
  .sticky-sm-top { position: sticky; top: 0px; z-index: 1020; }
}
@media (min-width: 768px) {
  .sticky-md-top { position: sticky; top: 0px; z-index: 1020; }
}
@media (min-width: 992px) {
  .sticky-lg-top { position: sticky; top: 0px; z-index: 1020; }
}
@media (min-width: 1200px) {
  .sticky-xl-top { position: sticky; top: 0px; z-index: 1020; }
}
@media (min-width: 1400px) {
  .sticky-xxl-top { position: sticky; top: 0px; z-index: 1020; }
}
.visually-hidden, .visually-hidden-focusable:not(:focus):not(:focus-within) { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; margin: -1px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; white-space: nowrap !important; border: 0px !important; }
.stretched-link::after { position: absolute; inset: 0px; z-index: 1; content: ""; }
.text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.align-baseline { vertical-align: baseline !important; }
.align-top { vertical-align: top !important; }
.align-middle { vertical-align: middle !important; }
.align-bottom { vertical-align: bottom !important; }
.align-text-bottom { vertical-align: text-bottom !important; }
.align-text-top { vertical-align: text-top !important; }
.float-start { float: left !important; }
.float-end { float: right !important; }
.float-none { float: none !important; }
.overflow-auto { overflow: auto !important; }
.overflow-hidden { overflow: hidden !important; }
.overflow-visible { overflow: visible !important; }
.overflow-scroll { overflow: scroll !important; }
.d-inline { display: inline !important; }
.d-inline-block { display: inline-block !important; }
.d-block { display: block !important; }
.d-grid { display: grid !important; }
.d-table { display: table !important; }
.d-table-row { display: table-row !important; }
.d-table-cell { display: table-cell !important; }
.d-flex { display: flex !important; }
.d-inline-flex { display: inline-flex !important; }
.d-none { display: none !important; }
.shadow { box-shadow: rgba(20, 20, 20, 0.12) 0px 0.25rem 0.375rem -0.0625rem, rgba(20, 20, 20, 0.07) 0px 0.125rem 0.25rem -0.0625rem !important; }
.shadow-sm { box-shadow: rgba(0, 0, 0, 0.12) 0px 0.3125rem 0.625rem 0px !important; }
.shadow-lg { box-shadow: rgba(20, 20, 20, 0.15) 0px 8px 26px -4px, rgba(20, 20, 20, 0.06) 0px 8px 9px -5px !important; }
.shadow-xl { box-shadow: rgba(20, 20, 20, 0.25) 0px 23px 45px -11px !important; }
.shadow-none { box-shadow: none !important; }
.position-static { position: static !important; }
.position-relative { position: relative !important; }
.position-absolute { position: absolute !important; }
.position-fixed { position: fixed !important; }
.position-sticky { position: sticky !important; }
.top-0 { top: 0px !important; }
.top-1 { top: 1% !important; }
.top-2 { top: 2% !important; }
.top-3 { top: 3% !important; }
.top-4 { top: 4% !important; }
.top-5 { top: 5% !important; }
.top-6 { top: 6% !important; }
.top-7 { top: 7% !important; }
.top-8 { top: 8% !important; }
.top-9 { top: 9% !important; }
.top-10 { top: 10% !important; }
.top-50 { top: 50% !important; }
.top-100 { top: 100% !important; }
.bottom-0 { bottom: 0px !important; }
.bottom-1 { bottom: 1% !important; }
.bottom-2 { bottom: 2% !important; }
.bottom-3 { bottom: 3% !important; }
.bottom-4 { bottom: 4% !important; }
.bottom-5 { bottom: 5% !important; }
.bottom-6 { bottom: 6% !important; }
.bottom-7 { bottom: 7% !important; }
.bottom-8 { bottom: 8% !important; }
.bottom-9 { bottom: 9% !important; }
.bottom-10 { bottom: 10% !important; }
.bottom-50 { bottom: 50% !important; }
.bottom-100 { bottom: 100% !important; }
.start-0 { left: 0px !important; }
.start-1 { left: 1% !important; }
.start-2 { left: 2% !important; }
.start-3 { left: 3% !important; }
.start-4 { left: 4% !important; }
.start-5 { left: 5% !important; }
.start-6 { left: 6% !important; }
.start-7 { left: 7% !important; }
.start-8 { left: 8% !important; }
.start-9 { left: 9% !important; }
.start-10 { left: 10% !important; }
.start-50 { left: 50% !important; }
.start-100 { left: 100% !important; }
.end-0 { right: 0px !important; }
.end-1 { right: 1% !important; }
.end-2 { right: 2% !important; }
.end-3 { right: 3% !important; }
.end-4 { right: 4% !important; }
.end-5 { right: 5% !important; }
.end-6 { right: 6% !important; }
.end-7 { right: 7% !important; }
.end-8 { right: 8% !important; }
.end-9 { right: 9% !important; }
.end-10 { right: 10% !important; }
.end-50 { right: 50% !important; }
.end-100 { right: 100% !important; }
.translate-middle { transform: translate(-50%, -50%) !important; }
.translate-middle-x { transform: translateX(-50%) !important; }
.translate-middle-y { transform: translateY(-50%) !important; }
.border { border: 1px solid rgb(222, 226, 230) !important; }
.border-0 { border: 0px !important; }
.border-top { border-top: 1px solid rgb(222, 226, 230) !important; }
.border-top-0 { border-top: 0px !important; }
.border-end { border-right: 1px solid rgb(222, 226, 230) !important; }
.border-end-0 { border-right: 0px !important; }
.border-bottom { border-bottom: 1px solid rgb(222, 226, 230) !important; }
.border-bottom-0 { border-bottom: 0px !important; }
.border-start { border-left: 1px solid rgb(222, 226, 230) !important; }
.border-start-0 { border-left: 0px !important; }
.border-primary { border-color: rgb(203, 12, 159) !important; }
.border-secondary { border-color: rgb(131, 146, 171) !important; }
.border-success { border-color: rgb(130, 214, 22) !important; }
.border-info { border-color: rgb(23, 193, 232) !important; }
.border-warning { border-color: rgb(251, 207, 51) !important; }
.border-danger { border-color: rgb(234, 6, 6) !important; }
.border-light { border-color: rgb(233, 236, 239) !important; }
.border-dark { border-color: rgb(52, 71, 103) !important; }
.border-white { border-color: rgb(255, 255, 255) !important; }
.border-0 { border-width: 0px !important; }
.border-1 { border-width: 1px !important; }
.border-2 { border-width: 2px !important; }
.border-3 { border-width: 3px !important; }
.border-4 { border-width: 4px !important; }
.border-5 { border-width: 5px !important; }
.w-0 { width: 0% !important; }
.w-1 { width: 1% !important; }
.w-2 { width: 2% !important; }
.w-3 { width: 3% !important; }
.w-4 { width: 4% !important; }
.w-5 { width: 5% !important; }
.w-6 { width: 6% !important; }
.w-7 { width: 7% !important; }
.w-8 { width: 8% !important; }
.w-9 { width: 9% !important; }
.w-10 { width: 10% !important; }
.w-15 { width: 15% !important; }
.w-20 { width: 20% !important; }
.w-25 { width: 25% !important; }
.w-30 { width: 30% !important; }
.w-35 { width: 35% !important; }
.w-40 { width: 40% !important; }
.w-45 { width: 45% !important; }
.w-50 { width: 50% !important; }
.w-55 { width: 55% !important; }
.w-60 { width: 60% !important; }
.w-65 { width: 65% !important; }
.w-70 { width: 70% !important; }
.w-75 { width: 75% !important; }
.w-80 { width: 80% !important; }
.w-85 { width: 85% !important; }
.w-90 { width: 90% !important; }
.w-95 { width: 95% !important; }
.w-100 { width: 100% !important; }
.w-auto { width: auto !important; }
.mw-100 { max-width: 100% !important; }
.vw-100 { width: 100vw !important; }
.min-vw-100 { min-width: 100vw !important; }
.h-25 { height: 25% !important; }
.h-50 { height: 50% !important; }
.h-75 { height: 75% !important; }
.h-100 { height: 100% !important; }
.h-auto { height: auto !important; }
.mh-100 { max-height: 100% !important; }
.vh-100 { height: 100vh !important; }
.min-vh-25 { min-height: 25vh !important; }
.min-vh-50 { min-height: 50vh !important; }
.min-vh-75 { min-height: 75vh !important; }
.min-vh-85 { min-height: 85vh !important; }
.min-vh-100 { min-height: 100vh !important; }
.flex-fill { flex: 1 1 auto !important; }
.flex-row { flex-direction: row !important; }
.flex-column { flex-direction: column !important; }
.flex-row-reverse { flex-direction: row-reverse !important; }
.flex-column-reverse { flex-direction: column-reverse !important; }
.flex-grow-0 { flex-grow: 0 !important; }
.flex-grow-1 { flex-grow: 1 !important; }
.flex-shrink-0 { flex-shrink: 0 !important; }
.flex-shrink-1 { flex-shrink: 1 !important; }
.flex-wrap { flex-wrap: wrap !important; }
.flex-nowrap { flex-wrap: nowrap !important; }
.flex-wrap-reverse { flex-wrap: wrap-reverse !important; }
.gap-0 { gap: 0px !important; }
.gap-1 { gap: 0.25rem !important; }
.gap-2 { gap: 0.5rem !important; }
.gap-3 { gap: 1rem !important; }
.gap-4 { gap: 1.5rem !important; }
.gap-5 { gap: 3rem !important; }
.gap-6 { gap: 4rem !important; }
.gap-7 { gap: 6rem !important; }
.gap-8 { gap: 8rem !important; }
.gap-9 { gap: 10rem !important; }
.gap-10 { gap: 12rem !important; }
.gap-11 { gap: 14rem !important; }
.gap-12 { gap: 16rem !important; }
.justify-content-start { justify-content: flex-start !important; }
.justify-content-end { justify-content: flex-end !important; }
.justify-content-center { justify-content: center !important; }
.justify-content-between { justify-content: space-between !important; }
.justify-content-around { justify-content: space-around !important; }
.justify-content-evenly { justify-content: space-evenly !important; }
.align-items-start { align-items: flex-start !important; }
.align-items-end { align-items: flex-end !important; }
.align-items-center { align-items: center !important; }
.align-items-baseline { align-items: baseline !important; }
.align-items-stretch { align-items: stretch !important; }
.align-content-start { align-content: flex-start !important; }
.align-content-end { align-content: flex-end !important; }
.align-content-center { align-content: center !important; }
.align-content-between { align-content: space-between !important; }
.align-content-around { align-content: space-around !important; }
.align-content-stretch { align-content: stretch !important; }
.align-self-auto { align-self: auto !important; }
.align-self-start { align-self: flex-start !important; }
.align-self-end { align-self: flex-end !important; }
.align-self-center { align-self: center !important; }
.align-self-baseline { align-self: baseline !important; }
.align-self-stretch { align-self: stretch !important; }
.order-first { order: -1 !important; }
.order-0 { order: 0 !important; }
.order-1 { order: 1 !important; }
.order-2 { order: 2 !important; }
.order-3 { order: 3 !important; }
.order-4 { order: 4 !important; }
.order-5 { order: 5 !important; }
.order-last { order: 6 !important; }
.m-0 { margin: 0px !important; }
.m-1 { margin: 0.25rem !important; }
.m-2 { margin: 0.5rem !important; }
.m-3 { margin: 1rem !important; }
.m-4 { margin: 1.5rem !important; }
.m-5 { margin: 3rem !important; }
.m-6 { margin: 4rem !important; }
.m-7 { margin: 6rem !important; }
.m-8 { margin: 8rem !important; }
.m-9 { margin: 10rem !important; }
.m-10 { margin: 12rem !important; }
.m-11 { margin: 14rem !important; }
.m-12 { margin: 16rem !important; }
.m-auto { margin: auto !important; }
.mx-0 { margin-right: 0px !important; margin-left: 0px !important; }
.mx-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
.mx-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
.mx-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
.mx-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
.mx-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
.mx-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
.mx-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
.mx-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
.mx-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
.mx-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
.mx-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
.mx-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
.mx-auto { margin-right: auto !important; margin-left: auto !important; }
.my-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
.my-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
.my-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
.my-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
.my-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
.my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
.my-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
.my-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
.my-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
.my-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
.my-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
.my-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
.my-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
.my-auto { margin-top: auto !important; margin-bottom: auto !important; }
.mt-0 { margin-top: 0px !important; }
.mt-1 { margin-top: 0.25rem !important; }
.mt-2 { margin-top: 0.5rem !important; }
.mt-3 { margin-top: 1rem !important; }
.mt-4 { margin-top: 1.5rem !important; }
.mt-5 { margin-top: 3rem !important; }
.mt-6 { margin-top: 4rem !important; }
.mt-7 { margin-top: 6rem !important; }
.mt-8 { margin-top: 8rem !important; }
.mt-9 { margin-top: 10rem !important; }
.mt-10 { margin-top: 12rem !important; }
.mt-11 { margin-top: 14rem !important; }
.mt-12 { margin-top: 16rem !important; }
.mt-auto { margin-top: auto !important; }
.me-0 { margin-right: 0px !important; }
.me-1 { margin-right: 0.25rem !important; }
.me-2 { margin-right: 0.5rem !important; }
.me-3 { margin-right: 1rem !important; }
.me-4 { margin-right: 1.5rem !important; }
.me-5 { margin-right: 3rem !important; }
.me-6 { margin-right: 4rem !important; }
.me-7 { margin-right: 6rem !important; }
.me-8 { margin-right: 8rem !important; }
.me-9 { margin-right: 10rem !important; }
.me-10 { margin-right: 12rem !important; }
.me-11 { margin-right: 14rem !important; }
.me-12 { margin-right: 16rem !important; }
.me-auto { margin-right: auto !important; }
.mb-0 { margin-bottom: 0px !important; }
.mb-1 { margin-bottom: 0.25rem !important; }
.mb-2 { margin-bottom: 0.5rem !important; }
.mb-3 { margin-bottom: 1rem !important; }
.mb-4 { margin-bottom: 1.5rem !important; }
.mb-5 { margin-bottom: 3rem !important; }
.mb-6 { margin-bottom: 4rem !important; }
.mb-7 { margin-bottom: 6rem !important; }
.mb-8 { margin-bottom: 8rem !important; }
.mb-9 { margin-bottom: 10rem !important; }
.mb-10 { margin-bottom: 12rem !important; }
.mb-11 { margin-bottom: 14rem !important; }
.mb-12 { margin-bottom: 16rem !important; }
.mb-auto { margin-bottom: auto !important; }
.ms-0 { margin-left: 0px !important; }
.ms-1 { margin-left: 0.25rem !important; }
.ms-2 { margin-left: 0.5rem !important; }
.ms-3 { margin-left: 1rem !important; }
.ms-4 { margin-left: 1.5rem !important; }
.ms-5 { margin-left: 3rem !important; }
.ms-6 { margin-left: 4rem !important; }
.ms-7 { margin-left: 6rem !important; }
.ms-8 { margin-left: 8rem !important; }
.ms-9 { margin-left: 10rem !important; }
.ms-10 { margin-left: 12rem !important; }
.ms-11 { margin-left: 14rem !important; }
.ms-12 { margin-left: 16rem !important; }
.ms-auto { margin-left: auto !important; }
.m-n1 { margin: -0.25rem !important; }
.m-n2 { margin: -0.5rem !important; }
.m-n3 { margin: -1rem !important; }
.m-n4 { margin: -1.5rem !important; }
.m-n5 { margin: -3rem !important; }
.m-n6 { margin: -4rem !important; }
.m-n7 { margin: -6rem !important; }
.m-n8 { margin: -8rem !important; }
.m-n9 { margin: -10rem !important; }
.m-n10 { margin: -12rem !important; }
.m-n11 { margin: -14rem !important; }
.m-n12 { margin: -16rem !important; }
.mx-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
.mx-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
.mx-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
.mx-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
.mx-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
.mx-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
.mx-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
.mx-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
.mx-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
.mx-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
.mx-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
.mx-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
.my-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
.my-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
.my-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
.my-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
.my-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
.my-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
.my-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
.my-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
.my-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
.my-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
.my-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
.my-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
.mt-n1 { margin-top: -0.25rem !important; }
.mt-n2 { margin-top: -0.5rem !important; }
.mt-n3 { margin-top: -1rem !important; }
.mt-n4 { margin-top: -1.5rem !important; }
.mt-n5 { margin-top: -3rem !important; }
.mt-n6 { margin-top: -4rem !important; }
.mt-n7 { margin-top: -6rem !important; }
.mt-n8 { margin-top: -8rem !important; }
.mt-n9 { margin-top: -10rem !important; }
.mt-n10 { margin-top: -12rem !important; }
.mt-n11 { margin-top: -14rem !important; }
.mt-n12 { margin-top: -16rem !important; }
.me-n1 { margin-right: -0.25rem !important; }
.me-n2 { margin-right: -0.5rem !important; }
.me-n3 { margin-right: -1rem !important; }
.me-n4 { margin-right: -1.5rem !important; }
.me-n5 { margin-right: -3rem !important; }
.me-n6 { margin-right: -4rem !important; }
.me-n7 { margin-right: -6rem !important; }
.me-n8 { margin-right: -8rem !important; }
.me-n9 { margin-right: -10rem !important; }
.me-n10 { margin-right: -12rem !important; }
.me-n11 { margin-right: -14rem !important; }
.me-n12 { margin-right: -16rem !important; }
.mb-n1 { margin-bottom: -0.25rem !important; }
.mb-n2 { margin-bottom: -0.5rem !important; }
.mb-n3 { margin-bottom: -1rem !important; }
.mb-n4 { margin-bottom: -1.5rem !important; }
.mb-n5 { margin-bottom: -3rem !important; }
.mb-n6 { margin-bottom: -4rem !important; }
.mb-n7 { margin-bottom: -6rem !important; }
.mb-n8 { margin-bottom: -8rem !important; }
.mb-n9 { margin-bottom: -10rem !important; }
.mb-n10 { margin-bottom: -12rem !important; }
.mb-n11 { margin-bottom: -14rem !important; }
.mb-n12 { margin-bottom: -16rem !important; }
.ms-n1 { margin-left: -0.25rem !important; }
.ms-n2 { margin-left: -0.5rem !important; }
.ms-n3 { margin-left: -1rem !important; }
.ms-n4 { margin-left: -1.5rem !important; }
.ms-n5 { margin-left: -3rem !important; }
.ms-n6 { margin-left: -4rem !important; }
.ms-n7 { margin-left: -6rem !important; }
.ms-n8 { margin-left: -8rem !important; }
.ms-n9 { margin-left: -10rem !important; }
.ms-n10 { margin-left: -12rem !important; }
.ms-n11 { margin-left: -14rem !important; }
.ms-n12 { margin-left: -16rem !important; }
.p-0 { padding: 0px !important; }
.p-1 { padding: 0.25rem !important; }
.p-2 { padding: 0.5rem !important; }
.p-3 { padding: 1rem !important; }
.p-4 { padding: 1.5rem !important; }
.p-5 { padding: 3rem !important; }
.p-6 { padding: 4rem !important; }
.p-7 { padding: 6rem !important; }
.p-8 { padding: 8rem !important; }
.p-9 { padding: 10rem !important; }
.p-10 { padding: 12rem !important; }
.p-11 { padding: 14rem !important; }
.p-12 { padding: 16rem !important; }
.px-0 { padding-right: 0px !important; padding-left: 0px !important; }
.px-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
.px-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
.px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
.px-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
.px-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
.px-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
.px-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
.px-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
.px-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
.px-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
.px-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
.px-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
.py-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
.py-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
.py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
.py-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
.py-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
.py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
.py-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
.py-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
.py-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
.py-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
.py-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
.py-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
.py-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
.pt-0 { padding-top: 0px !important; }
.pt-1 { padding-top: 0.25rem !important; }
.pt-2 { padding-top: 0.5rem !important; }
.pt-3 { padding-top: 1rem !important; }
.pt-4 { padding-top: 1.5rem !important; }
.pt-5 { padding-top: 3rem !important; }
.pt-6 { padding-top: 4rem !important; }
.pt-7 { padding-top: 6rem !important; }
.pt-8 { padding-top: 8rem !important; }
.pt-9 { padding-top: 10rem !important; }
.pt-10 { padding-top: 12rem !important; }
.pt-11 { padding-top: 14rem !important; }
.pt-12 { padding-top: 16rem !important; }
.pe-0 { padding-right: 0px !important; }
.pe-1 { padding-right: 0.25rem !important; }
.pe-2 { padding-right: 0.5rem !important; }
.pe-3 { padding-right: 1rem !important; }
.pe-4 { padding-right: 1.5rem !important; }
.pe-5 { padding-right: 3rem !important; }
.pe-6 { padding-right: 4rem !important; }
.pe-7 { padding-right: 6rem !important; }
.pe-8 { padding-right: 8rem !important; }
.pe-9 { padding-right: 10rem !important; }
.pe-10 { padding-right: 12rem !important; }
.pe-11 { padding-right: 14rem !important; }
.pe-12 { padding-right: 16rem !important; }
.pb-0 { padding-bottom: 0px !important; }
.pb-1 { padding-bottom: 0.25rem !important; }
.pb-2 { padding-bottom: 0.5rem !important; }
.pb-3 { padding-bottom: 1rem !important; }
.pb-4 { padding-bottom: 1.5rem !important; }
.pb-5 { padding-bottom: 3rem !important; }
.pb-6 { padding-bottom: 4rem !important; }
.pb-7 { padding-bottom: 6rem !important; }
.pb-8 { padding-bottom: 8rem !important; }
.pb-9 { padding-bottom: 10rem !important; }
.pb-10 { padding-bottom: 12rem !important; }
.pb-11 { padding-bottom: 14rem !important; }
.pb-12 { padding-bottom: 16rem !important; }
.ps-0 { padding-left: 0px !important; }
.ps-1 { padding-left: 0.25rem !important; }
.ps-2 { padding-left: 0.5rem !important; }
.ps-3 { padding-left: 1rem !important; }
.ps-4 { padding-left: 1.5rem !important; }
.ps-5 { padding-left: 3rem !important; }
.ps-6 { padding-left: 4rem !important; }
.ps-7 { padding-left: 6rem !important; }
.ps-8 { padding-left: 8rem !important; }
.ps-9 { padding-left: 10rem !important; }
.ps-10 { padding-left: 12rem !important; }
.ps-11 { padding-left: 14rem !important; }
.ps-12 { padding-left: 16rem !important; }
.font-monospace { font-family: var(--bs-font-monospace) !important; }
.fs-1 { font-size: calc(1.425rem + 2.1vw) !important; }
.fs-2 { font-size: calc(1.35rem + 1.2vw) !important; }
.fs-3 { font-size: calc(1.3125rem + 0.75vw) !important; }
.fs-4 { font-size: calc(1.275rem + 0.3vw) !important; }
.fs-5 { font-size: 1.25rem !important; }
.fs-6 { font-size: 1rem !important; }
.fst-italic { font-style: italic !important; }
.fst-normal { font-style: normal !important; }
.fw-light { font-weight: 300 !important; }
.fw-lighter { font-weight: lighter !important; }
.fw-normal { font-weight: 400 !important; }
.fw-bold { font-weight: 600 !important; }
.fw-bolder { font-weight: 700 !important; }
.lh-1 { line-height: 1 !important; }
.lh-sm { line-height: 1.25 !important; }
.lh-base { line-height: 1.5 !important; }
.lh-lg { line-height: 2 !important; }
.text-start { text-align: left !important; }
.text-end { text-align: right !important; }
.text-center { text-align: center !important; }
.text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
.text-lowercase { text-transform: lowercase !important; }
.text-uppercase { text-transform: uppercase !important; }
.text-capitalize { text-transform: capitalize !important; }
.text-wrap { white-space: normal !important; }
.text-nowrap { white-space: nowrap !important; }
.text-break { overflow-wrap: break-word !important; word-break: break-word !important; }
.text-primary { color: rgb(203, 12, 159) !important; }
.text-secondary { color: rgb(131, 146, 171) !important; }
.text-success { color: rgb(130, 214, 22) !important; }
.text-info { color: rgb(23, 193, 232) !important; }
.text-warning { color: rgb(251, 207, 51) !important; }
.text-danger { color: rgb(234, 6, 6) !important; }
.text-light { color: rgb(233, 236, 239) !important; }
.text-dark { color: rgb(52, 71, 103) !important; }
.text-white { color: rgb(255, 255, 255) !important; }
.text-body { color: rgb(103, 116, 142) !important; }
.text-muted { color: rgb(108, 117, 125) !important; }
.text-black-50 { color: rgba(0, 0, 0, 0.5) !important; }
.text-white-50 { color: rgba(255, 255, 255, 0.5) !important; }
.text-reset { color: inherit !important; }
.bg-primary { background-color: rgb(203, 12, 159) !important; }
.bg-secondary { background-color: rgb(131, 146, 171) !important; }
.bg-success { background-color: rgb(130, 214, 22) !important; }
.bg-info { background-color: rgb(23, 193, 232) !important; }
.bg-warning { background-color: rgb(251, 207, 51) !important; }
.bg-danger { background-color: rgb(234, 6, 6) !important; }
.bg-light { background-color: rgb(233, 236, 239) !important; }
.bg-dark { background-color: rgb(52, 71, 103) !important; }
.bg-white { background-color: rgb(255, 255, 255) !important; }
.bg-body { background-color: rgb(255, 255, 255) !important; }
.bg-transparent { background-color: transparent !important; }
.bg-gray-100 { background-color: rgb(248, 249, 250) !important; }
.bg-gray-200 { background-color: rgb(233, 236, 239) !important; }
.bg-gray-300 { background-color: rgb(222, 226, 230) !important; }
.bg-gray-400 { background-color: rgb(206, 212, 218) !important; }
.bg-gray-500 { background-color: rgb(173, 181, 189) !important; }
.bg-gray-600 { background-color: rgb(108, 117, 125) !important; }
.bg-gray-700 { background-color: rgb(73, 80, 87) !important; }
.bg-gray-800 { background-color: rgb(52, 58, 64) !important; }
.bg-gray-900 { background-color: rgb(33, 37, 41) !important; }
.bg-gradient { background-image: var(--bs-gradient) !important; }
.user-select-all { user-select: all !important; }
.user-select-auto { user-select: auto !important; }
.user-select-none { user-select: none !important; }
.pe-none { pointer-events: none !important; }
.pe-auto { pointer-events: auto !important; }
.rounded { border-radius: 0.25rem !important; }
.rounded-0 { border-radius: 0px !important; }
.rounded-1 { border-radius: 0.25rem !important; }
.rounded-2 { border-radius: 0.25rem !important; }
.rounded-3 { border-radius: 0.75rem !important; }
.rounded-circle, .avatar.rounded-circle img { border-radius: 50% !important; }
.rounded-pill { border-radius: 50rem !important; }
.rounded-top { border-top-left-radius: 0.25rem !important; border-top-right-radius: 0.25rem !important; }
.rounded-end { border-top-right-radius: 0.25rem !important; border-bottom-right-radius: 0.25rem !important; }
.rounded-bottom { border-bottom-right-radius: 0.25rem !important; border-bottom-left-radius: 0.25rem !important; }
.rounded-start { border-bottom-left-radius: 0.25rem !important; border-top-left-radius: 0.25rem !important; }
.visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
.transform-scale-5 { transform: scale(0.5) !important; }
.transform-scale-6 { transform: scale(0.6) !important; }
.transform-scale-7 { transform: scale(0.7) !important; }
.transform-scale-8 { transform: scale(0.8) !important; }
.transform-scale-9 { transform: scale(0.9) !important; }
.transform-scale-10 { transform: scale(1) !important; }
.opacity-0 { opacity: 0 !important; }
.opacity-1 { opacity: 0.1 !important; }
.opacity-2 { opacity: 0.2 !important; }
.opacity-3 { opacity: 0.3 !important; }
.opacity-4 { opacity: 0.4 !important; }
.opacity-5 { opacity: 0.5 !important; }
.opacity-6 { opacity: 0.6 !important; }
.opacity-7 { opacity: 0.7 !important; }
.opacity-8 { opacity: 0.8 !important; }
.opacity-9 { opacity: 0.9 !important; }
.opacity-10 { opacity: 1 !important; }
.z-index-0 { z-index: 0 !important; }
.z-index-1 { z-index: 1 !important; }
.z-index-2 { z-index: 2 !important; }
.z-index-3 { z-index: 3 !important; }
.letter-spacing-1 { letter-spacing: 1px !important; }
.letter-spacing-2 { letter-spacing: 2px !important; }
.letter-spacing-3 { letter-spacing: 3px !important; }
.letter-spacing-4 { letter-spacing: 4px !important; }
.letter-spacing-5 { letter-spacing: 5px !important; }
.border-radius-top-start-0 { border-top-left-radius: 0px !important; }
.border-radius-top-end-0 { border-top-right-radius: 0px !important; }
.border-radius-bottom-start-0 { border-bottom-left-radius: 0px !important; }
.border-radius-bottom-end-0 { border-bottom-right-radius: 0px !important; }
.max-height-100 { max-height: 100px !important; }
.max-height-150 { max-height: 150px !important; }
.max-height-160 { max-height: 160px !important; }
.max-height-200 { max-height: 200px !important; }
.max-height-250 { max-height: 200px !important; }
.max-height-300 { max-height: 300px !important; }
.max-height-400 { max-height: 400px !important; }
.max-height-500 { max-height: 500px !important; }
.max-height-600 { max-height: 600px !important; }
.max-height-vh-10 { max-height: 10vh !important; }
.max-height-vh-20 { max-height: 20vh !important; }
.max-height-vh-30 { max-height: 30vh !important; }
.max-height-vh-40 { max-height: 40vh !important; }
.max-height-vh-50 { max-height: 50vh !important; }
.max-height-vh-60 { max-height: 60vh !important; }
.max-height-vh-70 { max-height: 70vh !important; }
.max-height-vh-80 { max-height: 80vh !important; }
.max-height-vh-90 { max-height: 90vh !important; }
.max-height-vh-100 { max-height: 100vh !important; }
.min-height-100 { min-height: 100px !important; }
.min-height-150 { min-height: 150px !important; }
.min-height-160 { min-height: 160px !important; }
.min-height-200 { min-height: 200px !important; }
.min-height-250 { min-height: 200px !important; }
.min-height-300 { min-height: 300px !important; }
.min-height-400 { min-height: 400px !important; }
.min-height-500 { min-height: 500px !important; }
.min-height-600 { min-height: 600px !important; }
.height-100 { height: 100px !important; }
.height-200 { height: 200px !important; }
.height-300 { height: 300px !important; }
.height-400 { height: 400px !important; }
.height-500 { height: 500px !important; }
.height-600 { height: 600px !important; }
.max-width-100 { max-width: 100px !important; }
.max-width-200 { max-width: 200px !important; }
.max-width-300 { max-width: 300px !important; }
.max-width-400 { max-width: 400px !important; }
.max-width-500 { max-width: 500px !important; }
@media (min-width: 576px) {
  .float-sm-start { float: left !important; }
  .float-sm-end { float: right !important; }
  .float-sm-none { float: none !important; }
  .d-sm-inline { display: inline !important; }
  .d-sm-inline-block { display: inline-block !important; }
  .d-sm-block { display: block !important; }
  .d-sm-grid { display: grid !important; }
  .d-sm-table { display: table !important; }
  .d-sm-table-row { display: table-row !important; }
  .d-sm-table-cell { display: table-cell !important; }
  .d-sm-flex { display: flex !important; }
  .d-sm-inline-flex { display: inline-flex !important; }
  .d-sm-none { display: none !important; }
  .border-top-sm { border-top: 1px solid rgb(222, 226, 230) !important; }
  .border-top-sm-0 { border-top: 0px !important; }
  .border-end-sm { border-right: 1px solid rgb(222, 226, 230) !important; }
  .border-end-sm-0 { border-right: 0px !important; }
  .border-bottom-sm { border-bottom: 1px solid rgb(222, 226, 230) !important; }
  .border-bottom-sm-0 { border-bottom: 0px !important; }
  .border-start-sm { border-left: 1px solid rgb(222, 226, 230) !important; }
  .border-start-sm-0 { border-left: 0px !important; }
  .w-sm-0 { width: 0% !important; }
  .w-sm-1 { width: 1% !important; }
  .w-sm-2 { width: 2% !important; }
  .w-sm-3 { width: 3% !important; }
  .w-sm-4 { width: 4% !important; }
  .w-sm-5 { width: 5% !important; }
  .w-sm-6 { width: 6% !important; }
  .w-sm-7 { width: 7% !important; }
  .w-sm-8 { width: 8% !important; }
  .w-sm-9 { width: 9% !important; }
  .w-sm-10 { width: 10% !important; }
  .w-sm-15 { width: 15% !important; }
  .w-sm-20 { width: 20% !important; }
  .w-sm-25 { width: 25% !important; }
  .w-sm-30 { width: 30% !important; }
  .w-sm-35 { width: 35% !important; }
  .w-sm-40 { width: 40% !important; }
  .w-sm-45 { width: 45% !important; }
  .w-sm-50 { width: 50% !important; }
  .w-sm-55 { width: 55% !important; }
  .w-sm-60 { width: 60% !important; }
  .w-sm-65 { width: 65% !important; }
  .w-sm-70 { width: 70% !important; }
  .w-sm-75 { width: 75% !important; }
  .w-sm-80 { width: 80% !important; }
  .w-sm-85 { width: 85% !important; }
  .w-sm-90 { width: 90% !important; }
  .w-sm-95 { width: 95% !important; }
  .w-sm-100 { width: 100% !important; }
  .w-sm-auto { width: auto !important; }
  .flex-sm-fill { flex: 1 1 auto !important; }
  .flex-sm-row { flex-direction: row !important; }
  .flex-sm-column { flex-direction: column !important; }
  .flex-sm-row-reverse { flex-direction: row-reverse !important; }
  .flex-sm-column-reverse { flex-direction: column-reverse !important; }
  .flex-sm-grow-0 { flex-grow: 0 !important; }
  .flex-sm-grow-1 { flex-grow: 1 !important; }
  .flex-sm-shrink-0 { flex-shrink: 0 !important; }
  .flex-sm-shrink-1 { flex-shrink: 1 !important; }
  .flex-sm-wrap { flex-wrap: wrap !important; }
  .flex-sm-nowrap { flex-wrap: nowrap !important; }
  .flex-sm-wrap-reverse { flex-wrap: wrap-reverse !important; }
  .gap-sm-0 { gap: 0px !important; }
  .gap-sm-1 { gap: 0.25rem !important; }
  .gap-sm-2 { gap: 0.5rem !important; }
  .gap-sm-3 { gap: 1rem !important; }
  .gap-sm-4 { gap: 1.5rem !important; }
  .gap-sm-5 { gap: 3rem !important; }
  .gap-sm-6 { gap: 4rem !important; }
  .gap-sm-7 { gap: 6rem !important; }
  .gap-sm-8 { gap: 8rem !important; }
  .gap-sm-9 { gap: 10rem !important; }
  .gap-sm-10 { gap: 12rem !important; }
  .gap-sm-11 { gap: 14rem !important; }
  .gap-sm-12 { gap: 16rem !important; }
  .justify-content-sm-start { justify-content: flex-start !important; }
  .justify-content-sm-end { justify-content: flex-end !important; }
  .justify-content-sm-center { justify-content: center !important; }
  .justify-content-sm-between { justify-content: space-between !important; }
  .justify-content-sm-around { justify-content: space-around !important; }
  .justify-content-sm-evenly { justify-content: space-evenly !important; }
  .align-items-sm-start { align-items: flex-start !important; }
  .align-items-sm-end { align-items: flex-end !important; }
  .align-items-sm-center { align-items: center !important; }
  .align-items-sm-baseline { align-items: baseline !important; }
  .align-items-sm-stretch { align-items: stretch !important; }
  .align-content-sm-start { align-content: flex-start !important; }
  .align-content-sm-end { align-content: flex-end !important; }
  .align-content-sm-center { align-content: center !important; }
  .align-content-sm-between { align-content: space-between !important; }
  .align-content-sm-around { align-content: space-around !important; }
  .align-content-sm-stretch { align-content: stretch !important; }
  .align-self-sm-auto { align-self: auto !important; }
  .align-self-sm-start { align-self: flex-start !important; }
  .align-self-sm-end { align-self: flex-end !important; }
  .align-self-sm-center { align-self: center !important; }
  .align-self-sm-baseline { align-self: baseline !important; }
  .align-self-sm-stretch { align-self: stretch !important; }
  .order-sm-first { order: -1 !important; }
  .order-sm-0 { order: 0 !important; }
  .order-sm-1 { order: 1 !important; }
  .order-sm-2 { order: 2 !important; }
  .order-sm-3 { order: 3 !important; }
  .order-sm-4 { order: 4 !important; }
  .order-sm-5 { order: 5 !important; }
  .order-sm-last { order: 6 !important; }
  .m-sm-0 { margin: 0px !important; }
  .m-sm-1 { margin: 0.25rem !important; }
  .m-sm-2 { margin: 0.5rem !important; }
  .m-sm-3 { margin: 1rem !important; }
  .m-sm-4 { margin: 1.5rem !important; }
  .m-sm-5 { margin: 3rem !important; }
  .m-sm-6 { margin: 4rem !important; }
  .m-sm-7 { margin: 6rem !important; }
  .m-sm-8 { margin: 8rem !important; }
  .m-sm-9 { margin: 10rem !important; }
  .m-sm-10 { margin: 12rem !important; }
  .m-sm-11 { margin: 14rem !important; }
  .m-sm-12 { margin: 16rem !important; }
  .m-sm-auto { margin: auto !important; }
  .mx-sm-0 { margin-right: 0px !important; margin-left: 0px !important; }
  .mx-sm-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-sm-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-sm-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-sm-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-sm-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-sm-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
  .mx-sm-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
  .mx-sm-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
  .mx-sm-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
  .mx-sm-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
  .mx-sm-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
  .mx-sm-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
  .mx-sm-auto { margin-right: auto !important; margin-left: auto !important; }
  .my-sm-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
  .my-sm-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-sm-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-sm-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-sm-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-sm-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-sm-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
  .my-sm-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
  .my-sm-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
  .my-sm-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
  .my-sm-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
  .my-sm-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
  .my-sm-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
  .my-sm-auto { margin-top: auto !important; margin-bottom: auto !important; }
  .mt-sm-0 { margin-top: 0px !important; }
  .mt-sm-1 { margin-top: 0.25rem !important; }
  .mt-sm-2 { margin-top: 0.5rem !important; }
  .mt-sm-3 { margin-top: 1rem !important; }
  .mt-sm-4 { margin-top: 1.5rem !important; }
  .mt-sm-5 { margin-top: 3rem !important; }
  .mt-sm-6 { margin-top: 4rem !important; }
  .mt-sm-7 { margin-top: 6rem !important; }
  .mt-sm-8 { margin-top: 8rem !important; }
  .mt-sm-9 { margin-top: 10rem !important; }
  .mt-sm-10 { margin-top: 12rem !important; }
  .mt-sm-11 { margin-top: 14rem !important; }
  .mt-sm-12 { margin-top: 16rem !important; }
  .mt-sm-auto { margin-top: auto !important; }
  .me-sm-0 { margin-right: 0px !important; }
  .me-sm-1 { margin-right: 0.25rem !important; }
  .me-sm-2 { margin-right: 0.5rem !important; }
  .me-sm-3 { margin-right: 1rem !important; }
  .me-sm-4 { margin-right: 1.5rem !important; }
  .me-sm-5 { margin-right: 3rem !important; }
  .me-sm-6 { margin-right: 4rem !important; }
  .me-sm-7 { margin-right: 6rem !important; }
  .me-sm-8 { margin-right: 8rem !important; }
  .me-sm-9 { margin-right: 10rem !important; }
  .me-sm-10 { margin-right: 12rem !important; }
  .me-sm-11 { margin-right: 14rem !important; }
  .me-sm-12 { margin-right: 16rem !important; }
  .me-sm-auto { margin-right: auto !important; }
  .mb-sm-0 { margin-bottom: 0px !important; }
  .mb-sm-1 { margin-bottom: 0.25rem !important; }
  .mb-sm-2 { margin-bottom: 0.5rem !important; }
  .mb-sm-3 { margin-bottom: 1rem !important; }
  .mb-sm-4 { margin-bottom: 1.5rem !important; }
  .mb-sm-5 { margin-bottom: 3rem !important; }
  .mb-sm-6 { margin-bottom: 4rem !important; }
  .mb-sm-7 { margin-bottom: 6rem !important; }
  .mb-sm-8 { margin-bottom: 8rem !important; }
  .mb-sm-9 { margin-bottom: 10rem !important; }
  .mb-sm-10 { margin-bottom: 12rem !important; }
  .mb-sm-11 { margin-bottom: 14rem !important; }
  .mb-sm-12 { margin-bottom: 16rem !important; }
  .mb-sm-auto { margin-bottom: auto !important; }
  .ms-sm-0 { margin-left: 0px !important; }
  .ms-sm-1 { margin-left: 0.25rem !important; }
  .ms-sm-2 { margin-left: 0.5rem !important; }
  .ms-sm-3 { margin-left: 1rem !important; }
  .ms-sm-4 { margin-left: 1.5rem !important; }
  .ms-sm-5 { margin-left: 3rem !important; }
  .ms-sm-6 { margin-left: 4rem !important; }
  .ms-sm-7 { margin-left: 6rem !important; }
  .ms-sm-8 { margin-left: 8rem !important; }
  .ms-sm-9 { margin-left: 10rem !important; }
  .ms-sm-10 { margin-left: 12rem !important; }
  .ms-sm-11 { margin-left: 14rem !important; }
  .ms-sm-12 { margin-left: 16rem !important; }
  .ms-sm-auto { margin-left: auto !important; }
  .m-sm-n1 { margin: -0.25rem !important; }
  .m-sm-n2 { margin: -0.5rem !important; }
  .m-sm-n3 { margin: -1rem !important; }
  .m-sm-n4 { margin: -1.5rem !important; }
  .m-sm-n5 { margin: -3rem !important; }
  .m-sm-n6 { margin: -4rem !important; }
  .m-sm-n7 { margin: -6rem !important; }
  .m-sm-n8 { margin: -8rem !important; }
  .m-sm-n9 { margin: -10rem !important; }
  .m-sm-n10 { margin: -12rem !important; }
  .m-sm-n11 { margin: -14rem !important; }
  .m-sm-n12 { margin: -16rem !important; }
  .mx-sm-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
  .mx-sm-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
  .mx-sm-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
  .mx-sm-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
  .mx-sm-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
  .mx-sm-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
  .mx-sm-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
  .mx-sm-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
  .mx-sm-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
  .mx-sm-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
  .mx-sm-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
  .mx-sm-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
  .my-sm-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
  .my-sm-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
  .my-sm-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
  .my-sm-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
  .my-sm-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
  .my-sm-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
  .my-sm-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
  .my-sm-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
  .my-sm-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
  .my-sm-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
  .my-sm-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
  .my-sm-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
  .mt-sm-n1 { margin-top: -0.25rem !important; }
  .mt-sm-n2 { margin-top: -0.5rem !important; }
  .mt-sm-n3 { margin-top: -1rem !important; }
  .mt-sm-n4 { margin-top: -1.5rem !important; }
  .mt-sm-n5 { margin-top: -3rem !important; }
  .mt-sm-n6 { margin-top: -4rem !important; }
  .mt-sm-n7 { margin-top: -6rem !important; }
  .mt-sm-n8 { margin-top: -8rem !important; }
  .mt-sm-n9 { margin-top: -10rem !important; }
  .mt-sm-n10 { margin-top: -12rem !important; }
  .mt-sm-n11 { margin-top: -14rem !important; }
  .mt-sm-n12 { margin-top: -16rem !important; }
  .me-sm-n1 { margin-right: -0.25rem !important; }
  .me-sm-n2 { margin-right: -0.5rem !important; }
  .me-sm-n3 { margin-right: -1rem !important; }
  .me-sm-n4 { margin-right: -1.5rem !important; }
  .me-sm-n5 { margin-right: -3rem !important; }
  .me-sm-n6 { margin-right: -4rem !important; }
  .me-sm-n7 { margin-right: -6rem !important; }
  .me-sm-n8 { margin-right: -8rem !important; }
  .me-sm-n9 { margin-right: -10rem !important; }
  .me-sm-n10 { margin-right: -12rem !important; }
  .me-sm-n11 { margin-right: -14rem !important; }
  .me-sm-n12 { margin-right: -16rem !important; }
  .mb-sm-n1 { margin-bottom: -0.25rem !important; }
  .mb-sm-n2 { margin-bottom: -0.5rem !important; }
  .mb-sm-n3 { margin-bottom: -1rem !important; }
  .mb-sm-n4 { margin-bottom: -1.5rem !important; }
  .mb-sm-n5 { margin-bottom: -3rem !important; }
  .mb-sm-n6 { margin-bottom: -4rem !important; }
  .mb-sm-n7 { margin-bottom: -6rem !important; }
  .mb-sm-n8 { margin-bottom: -8rem !important; }
  .mb-sm-n9 { margin-bottom: -10rem !important; }
  .mb-sm-n10 { margin-bottom: -12rem !important; }
  .mb-sm-n11 { margin-bottom: -14rem !important; }
  .mb-sm-n12 { margin-bottom: -16rem !important; }
  .ms-sm-n1 { margin-left: -0.25rem !important; }
  .ms-sm-n2 { margin-left: -0.5rem !important; }
  .ms-sm-n3 { margin-left: -1rem !important; }
  .ms-sm-n4 { margin-left: -1.5rem !important; }
  .ms-sm-n5 { margin-left: -3rem !important; }
  .ms-sm-n6 { margin-left: -4rem !important; }
  .ms-sm-n7 { margin-left: -6rem !important; }
  .ms-sm-n8 { margin-left: -8rem !important; }
  .ms-sm-n9 { margin-left: -10rem !important; }
  .ms-sm-n10 { margin-left: -12rem !important; }
  .ms-sm-n11 { margin-left: -14rem !important; }
  .ms-sm-n12 { margin-left: -16rem !important; }
  .p-sm-0 { padding: 0px !important; }
  .p-sm-1 { padding: 0.25rem !important; }
  .p-sm-2 { padding: 0.5rem !important; }
  .p-sm-3 { padding: 1rem !important; }
  .p-sm-4 { padding: 1.5rem !important; }
  .p-sm-5 { padding: 3rem !important; }
  .p-sm-6 { padding: 4rem !important; }
  .p-sm-7 { padding: 6rem !important; }
  .p-sm-8 { padding: 8rem !important; }
  .p-sm-9 { padding: 10rem !important; }
  .p-sm-10 { padding: 12rem !important; }
  .p-sm-11 { padding: 14rem !important; }
  .p-sm-12 { padding: 16rem !important; }
  .px-sm-0 { padding-right: 0px !important; padding-left: 0px !important; }
  .px-sm-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-sm-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-sm-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-sm-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-sm-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
  .px-sm-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
  .px-sm-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
  .px-sm-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
  .px-sm-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
  .px-sm-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
  .px-sm-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
  .px-sm-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
  .py-sm-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
  .py-sm-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-sm-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-sm-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-sm-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-sm-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .py-sm-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
  .py-sm-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
  .py-sm-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
  .py-sm-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
  .py-sm-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
  .py-sm-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
  .py-sm-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
  .pt-sm-0 { padding-top: 0px !important; }
  .pt-sm-1 { padding-top: 0.25rem !important; }
  .pt-sm-2 { padding-top: 0.5rem !important; }
  .pt-sm-3 { padding-top: 1rem !important; }
  .pt-sm-4 { padding-top: 1.5rem !important; }
  .pt-sm-5 { padding-top: 3rem !important; }
  .pt-sm-6 { padding-top: 4rem !important; }
  .pt-sm-7 { padding-top: 6rem !important; }
  .pt-sm-8 { padding-top: 8rem !important; }
  .pt-sm-9 { padding-top: 10rem !important; }
  .pt-sm-10 { padding-top: 12rem !important; }
  .pt-sm-11 { padding-top: 14rem !important; }
  .pt-sm-12 { padding-top: 16rem !important; }
  .pe-sm-0 { padding-right: 0px !important; }
  .pe-sm-1 { padding-right: 0.25rem !important; }
  .pe-sm-2 { padding-right: 0.5rem !important; }
  .pe-sm-3 { padding-right: 1rem !important; }
  .pe-sm-4 { padding-right: 1.5rem !important; }
  .pe-sm-5 { padding-right: 3rem !important; }
  .pe-sm-6 { padding-right: 4rem !important; }
  .pe-sm-7 { padding-right: 6rem !important; }
  .pe-sm-8 { padding-right: 8rem !important; }
  .pe-sm-9 { padding-right: 10rem !important; }
  .pe-sm-10 { padding-right: 12rem !important; }
  .pe-sm-11 { padding-right: 14rem !important; }
  .pe-sm-12 { padding-right: 16rem !important; }
  .pb-sm-0 { padding-bottom: 0px !important; }
  .pb-sm-1 { padding-bottom: 0.25rem !important; }
  .pb-sm-2 { padding-bottom: 0.5rem !important; }
  .pb-sm-3 { padding-bottom: 1rem !important; }
  .pb-sm-4 { padding-bottom: 1.5rem !important; }
  .pb-sm-5 { padding-bottom: 3rem !important; }
  .pb-sm-6 { padding-bottom: 4rem !important; }
  .pb-sm-7 { padding-bottom: 6rem !important; }
  .pb-sm-8 { padding-bottom: 8rem !important; }
  .pb-sm-9 { padding-bottom: 10rem !important; }
  .pb-sm-10 { padding-bottom: 12rem !important; }
  .pb-sm-11 { padding-bottom: 14rem !important; }
  .pb-sm-12 { padding-bottom: 16rem !important; }
  .ps-sm-0 { padding-left: 0px !important; }
  .ps-sm-1 { padding-left: 0.25rem !important; }
  .ps-sm-2 { padding-left: 0.5rem !important; }
  .ps-sm-3 { padding-left: 1rem !important; }
  .ps-sm-4 { padding-left: 1.5rem !important; }
  .ps-sm-5 { padding-left: 3rem !important; }
  .ps-sm-6 { padding-left: 4rem !important; }
  .ps-sm-7 { padding-left: 6rem !important; }
  .ps-sm-8 { padding-left: 8rem !important; }
  .ps-sm-9 { padding-left: 10rem !important; }
  .ps-sm-10 { padding-left: 12rem !important; }
  .ps-sm-11 { padding-left: 14rem !important; }
  .ps-sm-12 { padding-left: 16rem !important; }
  .text-sm-start { text-align: left !important; }
  .text-sm-end { text-align: right !important; }
  .text-sm-center { text-align: center !important; }
  .transform-scale-sm-5 { transform: scale(0.5) !important; }
  .transform-scale-sm-6 { transform: scale(0.6) !important; }
  .transform-scale-sm-7 { transform: scale(0.7) !important; }
  .transform-scale-sm-8 { transform: scale(0.8) !important; }
  .transform-scale-sm-9 { transform: scale(0.9) !important; }
  .transform-scale-sm-10 { transform: scale(1) !important; }
  .border-radius-top-start-sm-0 { border-top-left-radius: 0px !important; }
  .border-radius-top-end-sm-0 { border-top-right-radius: 0px !important; }
  .border-radius-bottom-start-sm-0 { border-bottom-left-radius: 0px !important; }
  .border-radius-bottom-end-sm-0 { border-bottom-right-radius: 0px !important; }
}
@media (min-width: 768px) {
  .float-md-start { float: left !important; }
  .float-md-end { float: right !important; }
  .float-md-none { float: none !important; }
  .d-md-inline { display: inline !important; }
  .d-md-inline-block { display: inline-block !important; }
  .d-md-block { display: block !important; }
  .d-md-grid { display: grid !important; }
  .d-md-table { display: table !important; }
  .d-md-table-row { display: table-row !important; }
  .d-md-table-cell { display: table-cell !important; }
  .d-md-flex { display: flex !important; }
  .d-md-inline-flex { display: inline-flex !important; }
  .d-md-none { display: none !important; }
  .border-top-md { border-top: 1px solid rgb(222, 226, 230) !important; }
  .border-top-md-0 { border-top: 0px !important; }
  .border-end-md { border-right: 1px solid rgb(222, 226, 230) !important; }
  .border-end-md-0 { border-right: 0px !important; }
  .border-bottom-md { border-bottom: 1px solid rgb(222, 226, 230) !important; }
  .border-bottom-md-0 { border-bottom: 0px !important; }
  .border-start-md { border-left: 1px solid rgb(222, 226, 230) !important; }
  .border-start-md-0 { border-left: 0px !important; }
  .w-md-0 { width: 0% !important; }
  .w-md-1 { width: 1% !important; }
  .w-md-2 { width: 2% !important; }
  .w-md-3 { width: 3% !important; }
  .w-md-4 { width: 4% !important; }
  .w-md-5 { width: 5% !important; }
  .w-md-6 { width: 6% !important; }
  .w-md-7 { width: 7% !important; }
  .w-md-8 { width: 8% !important; }
  .w-md-9 { width: 9% !important; }
  .w-md-10 { width: 10% !important; }
  .w-md-15 { width: 15% !important; }
  .w-md-20 { width: 20% !important; }
  .w-md-25 { width: 25% !important; }
  .w-md-30 { width: 30% !important; }
  .w-md-35 { width: 35% !important; }
  .w-md-40 { width: 40% !important; }
  .w-md-45 { width: 45% !important; }
  .w-md-50 { width: 50% !important; }
  .w-md-55 { width: 55% !important; }
  .w-md-60 { width: 60% !important; }
  .w-md-65 { width: 65% !important; }
  .w-md-70 { width: 70% !important; }
  .w-md-75 { width: 75% !important; }
  .w-md-80 { width: 80% !important; }
  .w-md-85 { width: 85% !important; }
  .w-md-90 { width: 90% !important; }
  .w-md-95 { width: 95% !important; }
  .w-md-100 { width: 100% !important; }
  .w-md-auto { width: auto !important; }
  .flex-md-fill { flex: 1 1 auto !important; }
  .flex-md-row { flex-direction: row !important; }
  .flex-md-column { flex-direction: column !important; }
  .flex-md-row-reverse { flex-direction: row-reverse !important; }
  .flex-md-column-reverse { flex-direction: column-reverse !important; }
  .flex-md-grow-0 { flex-grow: 0 !important; }
  .flex-md-grow-1 { flex-grow: 1 !important; }
  .flex-md-shrink-0 { flex-shrink: 0 !important; }
  .flex-md-shrink-1 { flex-shrink: 1 !important; }
  .flex-md-wrap { flex-wrap: wrap !important; }
  .flex-md-nowrap { flex-wrap: nowrap !important; }
  .flex-md-wrap-reverse { flex-wrap: wrap-reverse !important; }
  .gap-md-0 { gap: 0px !important; }
  .gap-md-1 { gap: 0.25rem !important; }
  .gap-md-2 { gap: 0.5rem !important; }
  .gap-md-3 { gap: 1rem !important; }
  .gap-md-4 { gap: 1.5rem !important; }
  .gap-md-5 { gap: 3rem !important; }
  .gap-md-6 { gap: 4rem !important; }
  .gap-md-7 { gap: 6rem !important; }
  .gap-md-8 { gap: 8rem !important; }
  .gap-md-9 { gap: 10rem !important; }
  .gap-md-10 { gap: 12rem !important; }
  .gap-md-11 { gap: 14rem !important; }
  .gap-md-12 { gap: 16rem !important; }
  .justify-content-md-start { justify-content: flex-start !important; }
  .justify-content-md-end { justify-content: flex-end !important; }
  .justify-content-md-center { justify-content: center !important; }
  .justify-content-md-between { justify-content: space-between !important; }
  .justify-content-md-around { justify-content: space-around !important; }
  .justify-content-md-evenly { justify-content: space-evenly !important; }
  .align-items-md-start { align-items: flex-start !important; }
  .align-items-md-end { align-items: flex-end !important; }
  .align-items-md-center { align-items: center !important; }
  .align-items-md-baseline { align-items: baseline !important; }
  .align-items-md-stretch { align-items: stretch !important; }
  .align-content-md-start { align-content: flex-start !important; }
  .align-content-md-end { align-content: flex-end !important; }
  .align-content-md-center { align-content: center !important; }
  .align-content-md-between { align-content: space-between !important; }
  .align-content-md-around { align-content: space-around !important; }
  .align-content-md-stretch { align-content: stretch !important; }
  .align-self-md-auto { align-self: auto !important; }
  .align-self-md-start { align-self: flex-start !important; }
  .align-self-md-end { align-self: flex-end !important; }
  .align-self-md-center { align-self: center !important; }
  .align-self-md-baseline { align-self: baseline !important; }
  .align-self-md-stretch { align-self: stretch !important; }
  .order-md-first { order: -1 !important; }
  .order-md-0 { order: 0 !important; }
  .order-md-1 { order: 1 !important; }
  .order-md-2 { order: 2 !important; }
  .order-md-3 { order: 3 !important; }
  .order-md-4 { order: 4 !important; }
  .order-md-5 { order: 5 !important; }
  .order-md-last { order: 6 !important; }
  .m-md-0 { margin: 0px !important; }
  .m-md-1 { margin: 0.25rem !important; }
  .m-md-2 { margin: 0.5rem !important; }
  .m-md-3 { margin: 1rem !important; }
  .m-md-4 { margin: 1.5rem !important; }
  .m-md-5 { margin: 3rem !important; }
  .m-md-6 { margin: 4rem !important; }
  .m-md-7 { margin: 6rem !important; }
  .m-md-8 { margin: 8rem !important; }
  .m-md-9 { margin: 10rem !important; }
  .m-md-10 { margin: 12rem !important; }
  .m-md-11 { margin: 14rem !important; }
  .m-md-12 { margin: 16rem !important; }
  .m-md-auto { margin: auto !important; }
  .mx-md-0 { margin-right: 0px !important; margin-left: 0px !important; }
  .mx-md-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-md-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-md-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-md-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-md-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-md-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
  .mx-md-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
  .mx-md-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
  .mx-md-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
  .mx-md-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
  .mx-md-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
  .mx-md-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
  .mx-md-auto { margin-right: auto !important; margin-left: auto !important; }
  .my-md-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
  .my-md-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-md-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-md-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-md-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-md-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-md-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
  .my-md-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
  .my-md-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
  .my-md-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
  .my-md-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
  .my-md-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
  .my-md-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
  .my-md-auto { margin-top: auto !important; margin-bottom: auto !important; }
  .mt-md-0 { margin-top: 0px !important; }
  .mt-md-1 { margin-top: 0.25rem !important; }
  .mt-md-2 { margin-top: 0.5rem !important; }
  .mt-md-3 { margin-top: 1rem !important; }
  .mt-md-4 { margin-top: 1.5rem !important; }
  .mt-md-5 { margin-top: 3rem !important; }
  .mt-md-6 { margin-top: 4rem !important; }
  .mt-md-7 { margin-top: 6rem !important; }
  .mt-md-8 { margin-top: 8rem !important; }
  .mt-md-9 { margin-top: 10rem !important; }
  .mt-md-10 { margin-top: 12rem !important; }
  .mt-md-11 { margin-top: 14rem !important; }
  .mt-md-12 { margin-top: 16rem !important; }
  .mt-md-auto { margin-top: auto !important; }
  .me-md-0 { margin-right: 0px !important; }
  .me-md-1 { margin-right: 0.25rem !important; }
  .me-md-2 { margin-right: 0.5rem !important; }
  .me-md-3 { margin-right: 1rem !important; }
  .me-md-4 { margin-right: 1.5rem !important; }
  .me-md-5 { margin-right: 3rem !important; }
  .me-md-6 { margin-right: 4rem !important; }
  .me-md-7 { margin-right: 6rem !important; }
  .me-md-8 { margin-right: 8rem !important; }
  .me-md-9 { margin-right: 10rem !important; }
  .me-md-10 { margin-right: 12rem !important; }
  .me-md-11 { margin-right: 14rem !important; }
  .me-md-12 { margin-right: 16rem !important; }
  .me-md-auto { margin-right: auto !important; }
  .mb-md-0 { margin-bottom: 0px !important; }
  .mb-md-1 { margin-bottom: 0.25rem !important; }
  .mb-md-2 { margin-bottom: 0.5rem !important; }
  .mb-md-3 { margin-bottom: 1rem !important; }
  .mb-md-4 { margin-bottom: 1.5rem !important; }
  .mb-md-5 { margin-bottom: 3rem !important; }
  .mb-md-6 { margin-bottom: 4rem !important; }
  .mb-md-7 { margin-bottom: 6rem !important; }
  .mb-md-8 { margin-bottom: 8rem !important; }
  .mb-md-9 { margin-bottom: 10rem !important; }
  .mb-md-10 { margin-bottom: 12rem !important; }
  .mb-md-11 { margin-bottom: 14rem !important; }
  .mb-md-12 { margin-bottom: 16rem !important; }
  .mb-md-auto { margin-bottom: auto !important; }
  .ms-md-0 { margin-left: 0px !important; }
  .ms-md-1 { margin-left: 0.25rem !important; }
  .ms-md-2 { margin-left: 0.5rem !important; }
  .ms-md-3 { margin-left: 1rem !important; }
  .ms-md-4 { margin-left: 1.5rem !important; }
  .ms-md-5 { margin-left: 3rem !important; }
  .ms-md-6 { margin-left: 4rem !important; }
  .ms-md-7 { margin-left: 6rem !important; }
  .ms-md-8 { margin-left: 8rem !important; }
  .ms-md-9 { margin-left: 10rem !important; }
  .ms-md-10 { margin-left: 12rem !important; }
  .ms-md-11 { margin-left: 14rem !important; }
  .ms-md-12 { margin-left: 16rem !important; }
  .ms-md-auto { margin-left: auto !important; }
  .m-md-n1 { margin: -0.25rem !important; }
  .m-md-n2 { margin: -0.5rem !important; }
  .m-md-n3 { margin: -1rem !important; }
  .m-md-n4 { margin: -1.5rem !important; }
  .m-md-n5 { margin: -3rem !important; }
  .m-md-n6 { margin: -4rem !important; }
  .m-md-n7 { margin: -6rem !important; }
  .m-md-n8 { margin: -8rem !important; }
  .m-md-n9 { margin: -10rem !important; }
  .m-md-n10 { margin: -12rem !important; }
  .m-md-n11 { margin: -14rem !important; }
  .m-md-n12 { margin: -16rem !important; }
  .mx-md-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
  .mx-md-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
  .mx-md-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
  .mx-md-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
  .mx-md-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
  .mx-md-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
  .mx-md-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
  .mx-md-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
  .mx-md-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
  .mx-md-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
  .mx-md-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
  .mx-md-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
  .my-md-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
  .my-md-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
  .my-md-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
  .my-md-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
  .my-md-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
  .my-md-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
  .my-md-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
  .my-md-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
  .my-md-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
  .my-md-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
  .my-md-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
  .my-md-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
  .mt-md-n1 { margin-top: -0.25rem !important; }
  .mt-md-n2 { margin-top: -0.5rem !important; }
  .mt-md-n3 { margin-top: -1rem !important; }
  .mt-md-n4 { margin-top: -1.5rem !important; }
  .mt-md-n5 { margin-top: -3rem !important; }
  .mt-md-n6 { margin-top: -4rem !important; }
  .mt-md-n7 { margin-top: -6rem !important; }
  .mt-md-n8 { margin-top: -8rem !important; }
  .mt-md-n9 { margin-top: -10rem !important; }
  .mt-md-n10 { margin-top: -12rem !important; }
  .mt-md-n11 { margin-top: -14rem !important; }
  .mt-md-n12 { margin-top: -16rem !important; }
  .me-md-n1 { margin-right: -0.25rem !important; }
  .me-md-n2 { margin-right: -0.5rem !important; }
  .me-md-n3 { margin-right: -1rem !important; }
  .me-md-n4 { margin-right: -1.5rem !important; }
  .me-md-n5 { margin-right: -3rem !important; }
  .me-md-n6 { margin-right: -4rem !important; }
  .me-md-n7 { margin-right: -6rem !important; }
  .me-md-n8 { margin-right: -8rem !important; }
  .me-md-n9 { margin-right: -10rem !important; }
  .me-md-n10 { margin-right: -12rem !important; }
  .me-md-n11 { margin-right: -14rem !important; }
  .me-md-n12 { margin-right: -16rem !important; }
  .mb-md-n1 { margin-bottom: -0.25rem !important; }
  .mb-md-n2 { margin-bottom: -0.5rem !important; }
  .mb-md-n3 { margin-bottom: -1rem !important; }
  .mb-md-n4 { margin-bottom: -1.5rem !important; }
  .mb-md-n5 { margin-bottom: -3rem !important; }
  .mb-md-n6 { margin-bottom: -4rem !important; }
  .mb-md-n7 { margin-bottom: -6rem !important; }
  .mb-md-n8 { margin-bottom: -8rem !important; }
  .mb-md-n9 { margin-bottom: -10rem !important; }
  .mb-md-n10 { margin-bottom: -12rem !important; }
  .mb-md-n11 { margin-bottom: -14rem !important; }
  .mb-md-n12 { margin-bottom: -16rem !important; }
  .ms-md-n1 { margin-left: -0.25rem !important; }
  .ms-md-n2 { margin-left: -0.5rem !important; }
  .ms-md-n3 { margin-left: -1rem !important; }
  .ms-md-n4 { margin-left: -1.5rem !important; }
  .ms-md-n5 { margin-left: -3rem !important; }
  .ms-md-n6 { margin-left: -4rem !important; }
  .ms-md-n7 { margin-left: -6rem !important; }
  .ms-md-n8 { margin-left: -8rem !important; }
  .ms-md-n9 { margin-left: -10rem !important; }
  .ms-md-n10 { margin-left: -12rem !important; }
  .ms-md-n11 { margin-left: -14rem !important; }
  .ms-md-n12 { margin-left: -16rem !important; }
  .p-md-0 { padding: 0px !important; }
  .p-md-1 { padding: 0.25rem !important; }
  .p-md-2 { padding: 0.5rem !important; }
  .p-md-3 { padding: 1rem !important; }
  .p-md-4 { padding: 1.5rem !important; }
  .p-md-5 { padding: 3rem !important; }
  .p-md-6 { padding: 4rem !important; }
  .p-md-7 { padding: 6rem !important; }
  .p-md-8 { padding: 8rem !important; }
  .p-md-9 { padding: 10rem !important; }
  .p-md-10 { padding: 12rem !important; }
  .p-md-11 { padding: 14rem !important; }
  .p-md-12 { padding: 16rem !important; }
  .px-md-0 { padding-right: 0px !important; padding-left: 0px !important; }
  .px-md-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-md-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-md-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-md-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-md-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
  .px-md-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
  .px-md-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
  .px-md-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
  .px-md-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
  .px-md-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
  .px-md-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
  .px-md-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
  .py-md-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
  .py-md-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-md-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-md-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-md-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-md-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .py-md-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
  .py-md-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
  .py-md-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
  .py-md-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
  .py-md-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
  .py-md-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
  .py-md-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
  .pt-md-0 { padding-top: 0px !important; }
  .pt-md-1 { padding-top: 0.25rem !important; }
  .pt-md-2 { padding-top: 0.5rem !important; }
  .pt-md-3 { padding-top: 1rem !important; }
  .pt-md-4 { padding-top: 1.5rem !important; }
  .pt-md-5 { padding-top: 3rem !important; }
  .pt-md-6 { padding-top: 4rem !important; }
  .pt-md-7 { padding-top: 6rem !important; }
  .pt-md-8 { padding-top: 8rem !important; }
  .pt-md-9 { padding-top: 10rem !important; }
  .pt-md-10 { padding-top: 12rem !important; }
  .pt-md-11 { padding-top: 14rem !important; }
  .pt-md-12 { padding-top: 16rem !important; }
  .pe-md-0 { padding-right: 0px !important; }
  .pe-md-1 { padding-right: 0.25rem !important; }
  .pe-md-2 { padding-right: 0.5rem !important; }
  .pe-md-3 { padding-right: 1rem !important; }
  .pe-md-4 { padding-right: 1.5rem !important; }
  .pe-md-5 { padding-right: 3rem !important; }
  .pe-md-6 { padding-right: 10rem !important; }
  .pe-md-7 { padding-right: 6rem !important; }
  .pe-md-8 { padding-right: 8rem !important; }
  .pe-md-9 { padding-right: 10rem !important; }
  .pe-md-10 { padding-right: 12rem !important; }
  .pe-md-11 { padding-right: 14rem !important; }
  .pe-md-12 { padding-right: 16rem !important; }
  .pb-md-0 { padding-bottom: 0px !important; }
  .pb-md-1 { padding-bottom: 0.25rem !important; }
  .pb-md-2 { padding-bottom: 0.5rem !important; }
  .pb-md-3 { padding-bottom: 1rem !important; }
  .pb-md-4 { padding-bottom: 1.5rem !important; }
  .pb-md-5 { padding-bottom: 3rem !important; }
  .pb-md-6 { padding-bottom: 4rem !important; }
  .pb-md-7 { padding-bottom: 6rem !important; }
  .pb-md-8 { padding-bottom: 8rem !important; }
  .pb-md-9 { padding-bottom: 10rem !important; }
  .pb-md-10 { padding-bottom: 12rem !important; }
  .pb-md-11 { padding-bottom: 14rem !important; }
  .pb-md-12 { padding-bottom: 16rem !important; }
  .ps-md-0 { padding-left: 0px !important; }
  .ps-md-1 { padding-left: 0.25rem !important; }
  .ps-md-2 { padding-left: 0.5rem !important; }
  .ps-md-3 { padding-left: 1rem !important; }
  .ps-md-4 { padding-left: 1.5rem !important; }
  .ps-md-5 { padding-left: 3rem !important; }
  .ps-md-6 { padding-left: 4rem !important; }
  .ps-md-7 { padding-left: 6rem !important; }
  .ps-md-8 { padding-left: 8rem !important; }
  .ps-md-9 { padding-left: 10rem !important; }
  .ps-md-10 { padding-left: 12rem !important; }
  .ps-md-11 { padding-left: 14rem !important; }
  .ps-md-12 { padding-left: 16rem !important; }
  .text-md-start { text-align: left !important; }
  .text-md-end { text-align: right !important; }
  .text-md-center { text-align: center !important; }
  .transform-scale-md-5 { transform: scale(0.5) !important; }
  .transform-scale-md-6 { transform: scale(0.6) !important; }
  .transform-scale-md-7 { transform: scale(0.7) !important; }
  .transform-scale-md-8 { transform: scale(0.8) !important; }
  .transform-scale-md-9 { transform: scale(0.9) !important; }
  .transform-scale-md-10 { transform: scale(1) !important; }
  .border-radius-top-start-md-0 { border-top-left-radius: 0px !important; }
  .border-radius-top-end-md-0 { border-top-right-radius: 0px !important; }
  .border-radius-bottom-start-md-0 { border-bottom-left-radius: 0px !important; }
  .border-radius-bottom-end-md-0 { border-bottom-right-radius: 0px !important; }
}
@media (min-width: 992px) {
  .float-lg-start { float: left !important; }
  .float-lg-end { float: right !important; }
  .float-lg-none { float: none !important; }
  .d-lg-inline { display: inline !important; }
  .d-lg-inline-block { display: inline-block !important; }
  .d-lg-block { display: block !important; }
  .d-lg-grid { display: grid !important; }
  .d-lg-table { display: table !important; }
  .d-lg-table-row { display: table-row !important; }
  .d-lg-table-cell { display: table-cell !important; }
  .d-lg-flex { display: flex !important; }
  .d-lg-inline-flex { display: inline-flex !important; }
  .d-lg-none { display: none !important; }
  .border-top-lg { border-top: 1px solid rgb(222, 226, 230) !important; }
  .border-top-lg-0 { border-top: 0px !important; }
  .border-end-lg { border-right: 1px solid rgb(222, 226, 230) !important; }
  .border-end-lg-0 { border-right: 0px !important; }
  .border-bottom-lg { border-bottom: 1px solid rgb(222, 226, 230) !important; }
  .border-bottom-lg-0 { border-bottom: 0px !important; }
  .border-start-lg { border-left: 1px solid rgb(222, 226, 230) !important; }
  .border-start-lg-0 { border-left: 0px !important; }
  .w-lg-0 { width: 0% !important; }
  .w-lg-1 { width: 1% !important; }
  .w-lg-2 { width: 2% !important; }
  .w-lg-3 { width: 3% !important; }
  .w-lg-4 { width: 4% !important; }
  .w-lg-5 { width: 5% !important; }
  .w-lg-6 { width: 6% !important; }
  .w-lg-7 { width: 7% !important; }
  .w-lg-8 { width: 8% !important; }
  .w-lg-9 { width: 9% !important; }
  .w-lg-10 { width: 10% !important; }
  .w-lg-15 { width: 15% !important; }
  .w-lg-20 { width: 20% !important; }
  .w-lg-25 { width: 25% !important; }
  .w-lg-30 { width: 30% !important; }
  .w-lg-35 { width: 35% !important; }
  .w-lg-40 { width: 40% !important; }
  .w-lg-45 { width: 45% !important; }
  .w-lg-50 { width: 50% !important; }
  .w-lg-55 { width: 55% !important; }
  .w-lg-60 { width: 60% !important; }
  .w-lg-65 { width: 65% !important; }
  .w-lg-70 { width: 70% !important; }
  .w-lg-75 { width: 75% !important; }
  .w-lg-80 { width: 80% !important; }
  .w-lg-85 { width: 85% !important; }
  .w-lg-90 { width: 90% !important; }
  .w-lg-95 { width: 95% !important; }
  .w-lg-100 { width: 100% !important; }
  .w-lg-auto { width: auto !important; }
  .flex-lg-fill { flex: 1 1 auto !important; }
  .flex-lg-row { flex-direction: row !important; }
  .flex-lg-column { flex-direction: column !important; }
  .flex-lg-row-reverse { flex-direction: row-reverse !important; }
  .flex-lg-column-reverse { flex-direction: column-reverse !important; }
  .flex-lg-grow-0 { flex-grow: 0 !important; }
  .flex-lg-grow-1 { flex-grow: 1 !important; }
  .flex-lg-shrink-0 { flex-shrink: 0 !important; }
  .flex-lg-shrink-1 { flex-shrink: 1 !important; }
  .flex-lg-wrap { flex-wrap: wrap !important; }
  .flex-lg-nowrap { flex-wrap: nowrap !important; }
  .flex-lg-wrap-reverse { flex-wrap: wrap-reverse !important; }
  .gap-lg-0 { gap: 0px !important; }
  .gap-lg-1 { gap: 0.25rem !important; }
  .gap-lg-2 { gap: 0.5rem !important; }
  .gap-lg-3 { gap: 1rem !important; }
  .gap-lg-4 { gap: 1.5rem !important; }
  .gap-lg-5 { gap: 3rem !important; }
  .gap-lg-6 { gap: 4rem !important; }
  .gap-lg-7 { gap: 6rem !important; }
  .gap-lg-8 { gap: 8rem !important; }
  .gap-lg-9 { gap: 10rem !important; }
  .gap-lg-10 { gap: 12rem !important; }
  .gap-lg-11 { gap: 14rem !important; }
  .gap-lg-12 { gap: 16rem !important; }
  .justify-content-lg-start { justify-content: flex-start !important; }
  .justify-content-lg-end { justify-content: flex-end !important; }
  .justify-content-lg-center { justify-content: center !important; }
  .justify-content-lg-between { justify-content: space-between !important; }
  .justify-content-lg-around { justify-content: space-around !important; }
  .justify-content-lg-evenly { justify-content: space-evenly !important; }
  .align-items-lg-start { align-items: flex-start !important; }
  .align-items-lg-end { align-items: flex-end !important; }
  .align-items-lg-center { align-items: center !important; }
  .align-items-lg-baseline { align-items: baseline !important; }
  .align-items-lg-stretch { align-items: stretch !important; }
  .align-content-lg-start { align-content: flex-start !important; }
  .align-content-lg-end { align-content: flex-end !important; }
  .align-content-lg-center { align-content: center !important; }
  .align-content-lg-between { align-content: space-between !important; }
  .align-content-lg-around { align-content: space-around !important; }
  .align-content-lg-stretch { align-content: stretch !important; }
  .align-self-lg-auto { align-self: auto !important; }
  .align-self-lg-start { align-self: flex-start !important; }
  .align-self-lg-end { align-self: flex-end !important; }
  .align-self-lg-center { align-self: center !important; }
  .align-self-lg-baseline { align-self: baseline !important; }
  .align-self-lg-stretch { align-self: stretch !important; }
  .order-lg-first { order: -1 !important; }
  .order-lg-0 { order: 0 !important; }
  .order-lg-1 { order: 1 !important; }
  .order-lg-2 { order: 2 !important; }
  .order-lg-3 { order: 3 !important; }
  .order-lg-4 { order: 4 !important; }
  .order-lg-5 { order: 5 !important; }
  .order-lg-last { order: 6 !important; }
  .m-lg-0 { margin: 0px !important; }
  .m-lg-1 { margin: 0.25rem !important; }
  .m-lg-2 { margin: 0.5rem !important; }
  .m-lg-3 { margin: 1rem !important; }
  .m-lg-4 { margin: 1.5rem !important; }
  .m-lg-5 { margin: 3rem !important; }
  .m-lg-6 { margin: 4rem !important; }
  .m-lg-7 { margin: 6rem !important; }
  .m-lg-8 { margin: 8rem !important; }
  .m-lg-9 { margin: 10rem !important; }
  .m-lg-10 { margin: 12rem !important; }
  .m-lg-11 { margin: 14rem !important; }
  .m-lg-12 { margin: 16rem !important; }
  .m-lg-auto { margin: auto !important; }
  .mx-lg-0 { margin-right: 0px !important; margin-left: 0px !important; }
  .mx-lg-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-lg-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-lg-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-lg-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-lg-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-lg-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
  .mx-lg-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
  .mx-lg-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
  .mx-lg-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
  .mx-lg-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
  .mx-lg-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
  .mx-lg-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
  .mx-lg-auto { margin-right: auto !important; margin-left: auto !important; }
  .my-lg-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
  .my-lg-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-lg-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-lg-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-lg-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-lg-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-lg-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
  .my-lg-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
  .my-lg-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
  .my-lg-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
  .my-lg-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
  .my-lg-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
  .my-lg-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
  .my-lg-auto { margin-top: auto !important; margin-bottom: auto !important; }
  .mt-lg-0 { margin-top: 0px !important; }
  .mt-lg-1 { margin-top: 0.25rem !important; }
  .mt-lg-2 { margin-top: 0.5rem !important; }
  .mt-lg-3 { margin-top: 1rem !important; }
  .mt-lg-4 { margin-top: 1.5rem !important; }
  .mt-lg-5 { margin-top: 3rem !important; }
  .mt-lg-6 { margin-top: 4rem !important; }
  .mt-lg-7 { margin-top: 6rem !important; }
  .mt-lg-8 { margin-top: 8rem !important; }
  .mt-lg-9 { margin-top: 10rem !important; }
  .mt-lg-10 { margin-top: 12rem !important; }
  .mt-lg-11 { margin-top: 14rem !important; }
  .mt-lg-12 { margin-top: 16rem !important; }
  .mt-lg-auto { margin-top: auto !important; }
  .me-lg-0 { margin-right: 0px !important; }
  .me-lg-1 { margin-right: 0.25rem !important; }
  .me-lg-2 { margin-right: 0.5rem !important; }
  .me-lg-3 { margin-right: 1rem !important; }
  .me-lg-4 { margin-right: 1.5rem !important; }
  .me-lg-5 { margin-right: 3rem !important; }
  .me-lg-6 { margin-right: 4rem !important; }
  .me-lg-7 { margin-right: 6rem !important; }
  .me-lg-8 { margin-right: 8rem !important; }
  .me-lg-9 { margin-right: 10rem !important; }
  .me-lg-10 { margin-right: 12rem !important; }
  .me-lg-11 { margin-right: 14rem !important; }
  .me-lg-12 { margin-right: 16rem !important; }
  .me-lg-auto { margin-right: auto !important; }
  .mb-lg-0 { margin-bottom: 0px !important; }
  .mb-lg-1 { margin-bottom: 0.25rem !important; }
  .mb-lg-2 { margin-bottom: 0.5rem !important; }
  .mb-lg-3 { margin-bottom: 1rem !important; }
  .mb-lg-4 { margin-bottom: 1.5rem !important; }
  .mb-lg-5 { margin-bottom: 3rem !important; }
  .mb-lg-6 { margin-bottom: 4rem !important; }
  .mb-lg-7 { margin-bottom: 6rem !important; }
  .mb-lg-8 { margin-bottom: 8rem !important; }
  .mb-lg-9 { margin-bottom: 10rem !important; }
  .mb-lg-10 { margin-bottom: 12rem !important; }
  .mb-lg-11 { margin-bottom: 14rem !important; }
  .mb-lg-12 { margin-bottom: 16rem !important; }
  .mb-lg-auto { margin-bottom: auto !important; }
  .ms-lg-0 { margin-left: 0px !important; }
  .ms-lg-1 { margin-left: 0.25rem !important; }
  .ms-lg-2 { margin-left: 0.5rem !important; }
  .ms-lg-3 { margin-left: 1rem !important; }
  .ms-lg-4 { margin-left: 1.5rem !important; }
  .ms-lg-5 { margin-left: 3rem !important; }
  .ms-lg-6 { margin-left: 4rem !important; }
  .ms-lg-7 { margin-left: 6rem !important; }
  .ms-lg-8 { margin-left: 8rem !important; }
  .ms-lg-9 { margin-left: 10rem !important; }
  .ms-lg-10 { margin-left: 12rem !important; }
  .ms-lg-11 { margin-left: 14rem !important; }
  .ms-lg-12 { margin-left: 16rem !important; }
  .ms-lg-auto { margin-left: auto !important; }
  .m-lg-n1 { margin: -0.25rem !important; }
  .m-lg-n2 { margin: -0.5rem !important; }
  .m-lg-n3 { margin: -1rem !important; }
  .m-lg-n4 { margin: -1.5rem !important; }
  .m-lg-n5 { margin: -3rem !important; }
  .m-lg-n6 { margin: -4rem !important; }
  .m-lg-n7 { margin: -6rem !important; }
  .m-lg-n8 { margin: -8rem !important; }
  .m-lg-n9 { margin: -10rem !important; }
  .m-lg-n10 { margin: -12rem !important; }
  .m-lg-n11 { margin: -14rem !important; }
  .m-lg-n12 { margin: -16rem !important; }
  .mx-lg-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
  .mx-lg-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
  .mx-lg-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
  .mx-lg-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
  .mx-lg-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
  .mx-lg-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
  .mx-lg-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
  .mx-lg-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
  .mx-lg-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
  .mx-lg-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
  .mx-lg-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
  .mx-lg-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
  .my-lg-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
  .my-lg-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
  .my-lg-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
  .my-lg-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
  .my-lg-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
  .my-lg-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
  .my-lg-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
  .my-lg-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
  .my-lg-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
  .my-lg-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
  .my-lg-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
  .my-lg-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
  .mt-lg-n1 { margin-top: -0.25rem !important; }
  .mt-lg-n2 { margin-top: -0.5rem !important; }
  .mt-lg-n3 { margin-top: -1rem !important; }
  .mt-lg-n4 { margin-top: -1.5rem !important; }
  .mt-lg-n5 { margin-top: -3rem !important; }
  .mt-lg-n6 { margin-top: -4rem !important; }
  .mt-lg-n7 { margin-top: -6rem !important; }
  .mt-lg-n8 { margin-top: -8rem !important; }
  .mt-lg-n9 { margin-top: -10rem !important; }
  .mt-lg-n10 { margin-top: -12rem !important; }
  .mt-lg-n11 { margin-top: -14rem !important; }
  .mt-lg-n12 { margin-top: -16rem !important; }
  .me-lg-n1 { margin-right: -0.25rem !important; }
  .me-lg-n2 { margin-right: -0.5rem !important; }
  .me-lg-n3 { margin-right: -1rem !important; }
  .me-lg-n4 { margin-right: -1.5rem !important; }
  .me-lg-n5 { margin-right: -3rem !important; }
  .me-lg-n6 { margin-right: -4rem !important; }
  .me-lg-n7 { margin-right: -6rem !important; }
  .me-lg-n8 { margin-right: -8rem !important; }
  .me-lg-n9 { margin-right: -10rem !important; }
  .me-lg-n10 { margin-right: -12rem !important; }
  .me-lg-n11 { margin-right: -14rem !important; }
  .me-lg-n12 { margin-right: -16rem !important; }
  .mb-lg-n1 { margin-bottom: -0.25rem !important; }
  .mb-lg-n2 { margin-bottom: -0.5rem !important; }
  .mb-lg-n3 { margin-bottom: -1rem !important; }
  .mb-lg-n4 { margin-bottom: -1.5rem !important; }
  .mb-lg-n5 { margin-bottom: -3rem !important; }
  .mb-lg-n6 { margin-bottom: -4rem !important; }
  .mb-lg-n7 { margin-bottom: -6rem !important; }
  .mb-lg-n8 { margin-bottom: -8rem !important; }
  .mb-lg-n9 { margin-bottom: -10rem !important; }
  .mb-lg-n10 { margin-bottom: -12rem !important; }
  .mb-lg-n11 { margin-bottom: -14rem !important; }
  .mb-lg-n12 { margin-bottom: -16rem !important; }
  .ms-lg-n1 { margin-left: -0.25rem !important; }
  .ms-lg-n2 { margin-left: -0.5rem !important; }
  .ms-lg-n3 { margin-left: -1rem !important; }
  .ms-lg-n4 { margin-left: -1.5rem !important; }
  .ms-lg-n5 { margin-left: -3rem !important; }
  .ms-lg-n6 { margin-left: -4rem !important; }
  .ms-lg-n7 { margin-left: -6rem !important; }
  .ms-lg-n8 { margin-left: -8rem !important; }
  .ms-lg-n9 { margin-left: -10rem !important; }
  .ms-lg-n10 { margin-left: -12rem !important; }
  .ms-lg-n11 { margin-left: -14rem !important; }
  .ms-lg-n12 { margin-left: -16rem !important; }
  .p-lg-0 { padding: 0px !important; }
  .p-lg-1 { padding: 0.25rem !important; }
  .p-lg-2 { padding: 0.5rem !important; }
  .p-lg-3 { padding: 1rem !important; }
  .p-lg-4 { padding: 1.5rem !important; }
  .p-lg-5 { padding: 3rem !important; }
  .p-lg-6 { padding: 4rem !important; }
  .p-lg-7 { padding: 6rem !important; }
  .p-lg-8 { padding: 8rem !important; }
  .p-lg-9 { padding: 10rem !important; }
  .p-lg-10 { padding: 12rem !important; }
  .p-lg-11 { padding: 14rem !important; }
  .p-lg-12 { padding: 16rem !important; }
  .px-lg-0 { padding-right: 0px !important; padding-left: 0px !important; }
  .px-lg-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-lg-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-lg-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-lg-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-lg-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
  .px-lg-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
  .px-lg-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
  .px-lg-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
  .px-lg-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
  .px-lg-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
  .px-lg-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
  .px-lg-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
  .py-lg-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
  .py-lg-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-lg-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-lg-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-lg-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-lg-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .py-lg-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
  .py-lg-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
  .py-lg-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
  .py-lg-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
  .py-lg-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
  .py-lg-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
  .py-lg-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
  .pt-lg-0 { padding-top: 0px !important; }
  .pt-lg-1 { padding-top: 0.25rem !important; }
  .pt-lg-2 { padding-top: 0.5rem !important; }
  .pt-lg-3 { padding-top: 1rem !important; }
  .pt-lg-4 { padding-top: 1.5rem !important; }
  .pt-lg-5 { padding-top: 3rem !important; }
  .pt-lg-6 { padding-top: 4rem !important; }
  .pt-lg-7 { padding-top: 6rem !important; }
  .pt-lg-8 { padding-top: 8rem !important; }
  .pt-lg-9 { padding-top: 10rem !important; }
  .pt-lg-10 { padding-top: 12rem !important; }
  .pt-lg-11 { padding-top: 14rem !important; }
  .pt-lg-12 { padding-top: 16rem !important; }
  .pe-lg-0 { padding-right: 0px !important; }
  .pe-lg-1 { padding-right: 0.25rem !important; }
  .pe-lg-2 { padding-right: 0.5rem !important; }
  .pe-lg-3 { padding-right: 1rem !important; }
  .pe-lg-4 { padding-right: 1.5rem !important; }
  .pe-lg-5 { padding-right: 3rem !important; }
  .pe-lg-6 { padding-right: 4rem !important; }
  .pe-lg-7 { padding-right: 6rem !important; }
  .pe-lg-8 { padding-right: 8rem !important; }
  .pe-lg-9 { padding-right: 10rem !important; }
  .pe-lg-10 { padding-right: 12rem !important; }
  .pe-lg-11 { padding-right: 14rem !important; }
  .pe-lg-12 { padding-right: 16rem !important; }
  .pb-lg-0 { padding-bottom: 0px !important; }
  .pb-lg-1 { padding-bottom: 0.25rem !important; }
  .pb-lg-2 { padding-bottom: 0.5rem !important; }
  .pb-lg-3 { padding-bottom: 1rem !important; }
  .pb-lg-4 { padding-bottom: 1.5rem !important; }
  .pb-lg-5 { padding-bottom: 3rem !important; }
  .pb-lg-6 { padding-bottom: 4rem !important; }
  .pb-lg-7 { padding-bottom: 6rem !important; }
  .pb-lg-8 { padding-bottom: 8rem !important; }
  .pb-lg-9 { padding-bottom: 10rem !important; }
  .pb-lg-10 { padding-bottom: 12rem !important; }
  .pb-lg-11 { padding-bottom: 14rem !important; }
  .pb-lg-12 { padding-bottom: 16rem !important; }
  .ps-lg-0 { padding-left: 0px !important; }
  .ps-lg-1 { padding-left: 0.25rem !important; }
  .ps-lg-2 { padding-left: 0.5rem !important; }
  .ps-lg-3 { padding-left: 1rem !important; }
  .ps-lg-4 { padding-left: 1.5rem !important; }
  .ps-lg-5 { padding-left: 3rem !important; }
  .ps-lg-6 { padding-left: 4rem !important; }
  .ps-lg-7 { padding-left: 6rem !important; }
  .ps-lg-8 { padding-left: 8rem !important; }
  .ps-lg-9 { padding-left: 10rem !important; }
  .ps-lg-10 { padding-left: 12rem !important; }
  .ps-lg-11 { padding-left: 14rem !important; }
  .ps-lg-12 { padding-left: 16rem !important; }
  .text-lg-start { text-align: left !important; }
  .text-lg-end { text-align: right !important; }
  .text-lg-center { text-align: center !important; }
  .transform-scale-lg-5 { transform: scale(0.5) !important; }
  .transform-scale-lg-6 { transform: scale(0.6) !important; }
  .transform-scale-lg-7 { transform: scale(0.7) !important; }
  .transform-scale-lg-8 { transform: scale(0.8) !important; }
  .transform-scale-lg-9 { transform: scale(0.9) !important; }
  .transform-scale-lg-10 { transform: scale(1) !important; }
  .border-radius-top-start-lg-0 { border-top-left-radius: 0px !important; }
  .border-radius-top-end-lg-0 { border-top-right-radius: 0px !important; }
  .border-radius-bottom-start-lg-0 { border-bottom-left-radius: 0px !important; }
  .border-radius-bottom-end-lg-0 { border-bottom-right-radius: 0px !important; }
}
@media (min-width: 1200px) {
  .float-xl-start { float: left !important; }
  .float-xl-end { float: right !important; }
  .float-xl-none { float: none !important; }
  .d-xl-inline { display: inline !important; }
  .d-xl-inline-block { display: inline-block !important; }
  .d-xl-block { display: block !important; }
  .d-xl-grid { display: grid !important; }
  .d-xl-table { display: table !important; }
  .d-xl-table-row { display: table-row !important; }
  .d-xl-table-cell { display: table-cell !important; }
  .d-xl-flex { display: flex !important; }
  .d-xl-inline-flex { display: inline-flex !important; }
  .d-xl-none { display: none !important; }
  .border-top-xl { border-top: 1px solid rgb(222, 226, 230) !important; }
  .border-top-xl-0 { border-top: 0px !important; }
  .border-end-xl { border-right: 1px solid rgb(222, 226, 230) !important; }
  .border-end-xl-0 { border-right: 0px !important; }
  .border-bottom-xl { border-bottom: 1px solid rgb(222, 226, 230) !important; }
  .border-bottom-xl-0 { border-bottom: 0px !important; }
  .border-start-xl { border-left: 1px solid rgb(222, 226, 230) !important; }
  .border-start-xl-0 { border-left: 0px !important; }
  .w-xl-0 { width: 0% !important; }
  .w-xl-1 { width: 1% !important; }
  .w-xl-2 { width: 2% !important; }
  .w-xl-3 { width: 3% !important; }
  .w-xl-4 { width: 4% !important; }
  .w-xl-5 { width: 5% !important; }
  .w-xl-6 { width: 6% !important; }
  .w-xl-7 { width: 7% !important; }
  .w-xl-8 { width: 8% !important; }
  .w-xl-9 { width: 9% !important; }
  .w-xl-10 { width: 10% !important; }
  .w-xl-15 { width: 15% !important; }
  .w-xl-20 { width: 20% !important; }
  .w-xl-25 { width: 25% !important; }
  .w-xl-30 { width: 30% !important; }
  .w-xl-35 { width: 35% !important; }
  .w-xl-40 { width: 40% !important; }
  .w-xl-45 { width: 45% !important; }
  .w-xl-50 { width: 50% !important; }
  .w-xl-55 { width: 55% !important; }
  .w-xl-60 { width: 60% !important; }
  .w-xl-65 { width: 65% !important; }
  .w-xl-70 { width: 70% !important; }
  .w-xl-75 { width: 75% !important; }
  .w-xl-80 { width: 80% !important; }
  .w-xl-85 { width: 85% !important; }
  .w-xl-90 { width: 90% !important; }
  .w-xl-95 { width: 95% !important; }
  .w-xl-100 { width: 100% !important; }
  .w-xl-auto { width: auto !important; }
  .flex-xl-fill { flex: 1 1 auto !important; }
  .flex-xl-row { flex-direction: row !important; }
  .flex-xl-column { flex-direction: column !important; }
  .flex-xl-row-reverse { flex-direction: row-reverse !important; }
  .flex-xl-column-reverse { flex-direction: column-reverse !important; }
  .flex-xl-grow-0 { flex-grow: 0 !important; }
  .flex-xl-grow-1 { flex-grow: 1 !important; }
  .flex-xl-shrink-0 { flex-shrink: 0 !important; }
  .flex-xl-shrink-1 { flex-shrink: 1 !important; }
  .flex-xl-wrap { flex-wrap: wrap !important; }
  .flex-xl-nowrap { flex-wrap: nowrap !important; }
  .flex-xl-wrap-reverse { flex-wrap: wrap-reverse !important; }
  .gap-xl-0 { gap: 0px !important; }
  .gap-xl-1 { gap: 0.25rem !important; }
  .gap-xl-2 { gap: 0.5rem !important; }
  .gap-xl-3 { gap: 1rem !important; }
  .gap-xl-4 { gap: 1.5rem !important; }
  .gap-xl-5 { gap: 3rem !important; }
  .gap-xl-6 { gap: 4rem !important; }
  .gap-xl-7 { gap: 6rem !important; }
  .gap-xl-8 { gap: 8rem !important; }
  .gap-xl-9 { gap: 10rem !important; }
  .gap-xl-10 { gap: 12rem !important; }
  .gap-xl-11 { gap: 14rem !important; }
  .gap-xl-12 { gap: 16rem !important; }
  .justify-content-xl-start { justify-content: flex-start !important; }
  .justify-content-xl-end { justify-content: flex-end !important; }
  .justify-content-xl-center { justify-content: center !important; }
  .justify-content-xl-between { justify-content: space-between !important; }
  .justify-content-xl-around { justify-content: space-around !important; }
  .justify-content-xl-evenly { justify-content: space-evenly !important; }
  .align-items-xl-start { align-items: flex-start !important; }
  .align-items-xl-end { align-items: flex-end !important; }
  .align-items-xl-center { align-items: center !important; }
  .align-items-xl-baseline { align-items: baseline !important; }
  .align-items-xl-stretch { align-items: stretch !important; }
  .align-content-xl-start { align-content: flex-start !important; }
  .align-content-xl-end { align-content: flex-end !important; }
  .align-content-xl-center { align-content: center !important; }
  .align-content-xl-between { align-content: space-between !important; }
  .align-content-xl-around { align-content: space-around !important; }
  .align-content-xl-stretch { align-content: stretch !important; }
  .align-self-xl-auto { align-self: auto !important; }
  .align-self-xl-start { align-self: flex-start !important; }
  .align-self-xl-end { align-self: flex-end !important; }
  .align-self-xl-center { align-self: center !important; }
  .align-self-xl-baseline { align-self: baseline !important; }
  .align-self-xl-stretch { align-self: stretch !important; }
  .order-xl-first { order: -1 !important; }
  .order-xl-0 { order: 0 !important; }
  .order-xl-1 { order: 1 !important; }
  .order-xl-2 { order: 2 !important; }
  .order-xl-3 { order: 3 !important; }
  .order-xl-4 { order: 4 !important; }
  .order-xl-5 { order: 5 !important; }
  .order-xl-last { order: 6 !important; }
  .m-xl-0 { margin: 0px !important; }
  .m-xl-1 { margin: 0.25rem !important; }
  .m-xl-2 { margin: 0.5rem !important; }
  .m-xl-3 { margin: 1rem !important; }
  .m-xl-4 { margin: 1.5rem !important; }
  .m-xl-5 { margin: 3rem !important; }
  .m-xl-6 { margin: 4rem !important; }
  .m-xl-7 { margin: 6rem !important; }
  .m-xl-8 { margin: 8rem !important; }
  .m-xl-9 { margin: 10rem !important; }
  .m-xl-10 { margin: 12rem !important; }
  .m-xl-11 { margin: 14rem !important; }
  .m-xl-12 { margin: 16rem !important; }
  .m-xl-auto { margin: auto !important; }
  .mx-xl-0 { margin-right: 0px !important; margin-left: 0px !important; }
  .mx-xl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-xl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-xl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-xl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-xl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-xl-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
  .mx-xl-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
  .mx-xl-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
  .mx-xl-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
  .mx-xl-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
  .mx-xl-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
  .mx-xl-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
  .mx-xl-auto { margin-right: auto !important; margin-left: auto !important; }
  .my-xl-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
  .my-xl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-xl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-xl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-xl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-xl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-xl-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
  .my-xl-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
  .my-xl-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
  .my-xl-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
  .my-xl-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
  .my-xl-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
  .my-xl-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
  .my-xl-auto { margin-top: auto !important; margin-bottom: auto !important; }
  .mt-xl-0 { margin-top: 0px !important; }
  .mt-xl-1 { margin-top: 0.25rem !important; }
  .mt-xl-2 { margin-top: 0.5rem !important; }
  .mt-xl-3 { margin-top: 1rem !important; }
  .mt-xl-4 { margin-top: 1.5rem !important; }
  .mt-xl-5 { margin-top: 3rem !important; }
  .mt-xl-6 { margin-top: 4rem !important; }
  .mt-xl-7 { margin-top: 6rem !important; }
  .mt-xl-8 { margin-top: 8rem !important; }
  .mt-xl-9 { margin-top: 10rem !important; }
  .mt-xl-10 { margin-top: 12rem !important; }
  .mt-xl-11 { margin-top: 14rem !important; }
  .mt-xl-12 { margin-top: 16rem !important; }
  .mt-xl-auto { margin-top: auto !important; }
  .me-xl-0 { margin-right: 0px !important; }
  .me-xl-1 { margin-right: 0.25rem !important; }
  .me-xl-2 { margin-right: 0.5rem !important; }
  .me-xl-3 { margin-right: 1rem !important; }
  .me-xl-4 { margin-right: 1.5rem !important; }
  .me-xl-5 { margin-right: 3rem !important; }
  .me-xl-6 { margin-right: 4rem !important; }
  .me-xl-7 { margin-right: 6rem !important; }
  .me-xl-8 { margin-right: 8rem !important; }
  .me-xl-9 { margin-right: 10rem !important; }
  .me-xl-10 { margin-right: 12rem !important; }
  .me-xl-11 { margin-right: 14rem !important; }
  .me-xl-12 { margin-right: 16rem !important; }
  .me-xl-auto { margin-right: auto !important; }
  .mb-xl-0 { margin-bottom: 0px !important; }
  .mb-xl-1 { margin-bottom: 0.25rem !important; }
  .mb-xl-2 { margin-bottom: 0.5rem !important; }
  .mb-xl-3 { margin-bottom: 1rem !important; }
  .mb-xl-4 { margin-bottom: 1.5rem !important; }
  .mb-xl-5 { margin-bottom: 3rem !important; }
  .mb-xl-6 { margin-bottom: 4rem !important; }
  .mb-xl-7 { margin-bottom: 6rem !important; }
  .mb-xl-8 { margin-bottom: 8rem !important; }
  .mb-xl-9 { margin-bottom: 10rem !important; }
  .mb-xl-10 { margin-bottom: 12rem !important; }
  .mb-xl-11 { margin-bottom: 14rem !important; }
  .mb-xl-12 { margin-bottom: 16rem !important; }
  .mb-xl-auto { margin-bottom: auto !important; }
  .ms-xl-0 { margin-left: 0px !important; }
  .ms-xl-1 { margin-left: 0.25rem !important; }
  .ms-xl-2 { margin-left: 0.5rem !important; }
  .ms-xl-3 { margin-left: 1rem !important; }
  .ms-xl-4 { margin-left: 1.5rem !important; }
  .ms-xl-5 { margin-left: 3rem !important; }
  .ms-xl-6 { margin-left: 4rem !important; }
  .ms-xl-7 { margin-left: 6rem !important; }
  .ms-xl-8 { margin-left: 8rem !important; }
  .ms-xl-9 { margin-left: 10rem !important; }
  .ms-xl-10 { margin-left: 12rem !important; }
  .ms-xl-11 { margin-left: 14rem !important; }
  .ms-xl-12 { margin-left: 16rem !important; }
  .ms-xl-auto { margin-left: auto !important; }
  .m-xl-n1 { margin: -0.25rem !important; }
  .m-xl-n2 { margin: -0.5rem !important; }
  .m-xl-n3 { margin: -1rem !important; }
  .m-xl-n4 { margin: -1.5rem !important; }
  .m-xl-n5 { margin: -3rem !important; }
  .m-xl-n6 { margin: -4rem !important; }
  .m-xl-n7 { margin: -6rem !important; }
  .m-xl-n8 { margin: -8rem !important; }
  .m-xl-n9 { margin: -10rem !important; }
  .m-xl-n10 { margin: -12rem !important; }
  .m-xl-n11 { margin: -14rem !important; }
  .m-xl-n12 { margin: -16rem !important; }
  .mx-xl-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
  .mx-xl-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
  .mx-xl-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
  .mx-xl-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
  .mx-xl-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
  .mx-xl-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
  .mx-xl-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
  .mx-xl-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
  .mx-xl-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
  .mx-xl-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
  .mx-xl-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
  .mx-xl-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
  .my-xl-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
  .my-xl-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
  .my-xl-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
  .my-xl-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
  .my-xl-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
  .my-xl-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
  .my-xl-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
  .my-xl-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
  .my-xl-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
  .my-xl-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
  .my-xl-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
  .my-xl-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
  .mt-xl-n1 { margin-top: -0.25rem !important; }
  .mt-xl-n2 { margin-top: -0.5rem !important; }
  .mt-xl-n3 { margin-top: -1rem !important; }
  .mt-xl-n4 { margin-top: -1.5rem !important; }
  .mt-xl-n5 { margin-top: -3rem !important; }
  .mt-xl-n6 { margin-top: -4rem !important; }
  .mt-xl-n7 { margin-top: -6rem !important; }
  .mt-xl-n8 { margin-top: -8rem !important; }
  .mt-xl-n9 { margin-top: -10rem !important; }
  .mt-xl-n10 { margin-top: -12rem !important; }
  .mt-xl-n11 { margin-top: -14rem !important; }
  .mt-xl-n12 { margin-top: -16rem !important; }
  .me-xl-n1 { margin-right: -0.25rem !important; }
  .me-xl-n2 { margin-right: -0.5rem !important; }
  .me-xl-n3 { margin-right: -1rem !important; }
  .me-xl-n4 { margin-right: -1.5rem !important; }
  .me-xl-n5 { margin-right: -3rem !important; }
  .me-xl-n6 { margin-right: -4rem !important; }
  .me-xl-n7 { margin-right: -6rem !important; }
  .me-xl-n8 { margin-right: -8rem !important; }
  .me-xl-n9 { margin-right: -10rem !important; }
  .me-xl-n10 { margin-right: -12rem !important; }
  .me-xl-n11 { margin-right: -14rem !important; }
  .me-xl-n12 { margin-right: -16rem !important; }
  .mb-xl-n1 { margin-bottom: -0.25rem !important; }
  .mb-xl-n2 { margin-bottom: -0.5rem !important; }
  .mb-xl-n3 { margin-bottom: -1rem !important; }
  .mb-xl-n4 { margin-bottom: -1.5rem !important; }
  .mb-xl-n5 { margin-bottom: -3rem !important; }
  .mb-xl-n6 { margin-bottom: -4rem !important; }
  .mb-xl-n7 { margin-bottom: -6rem !important; }
  .mb-xl-n8 { margin-bottom: -8rem !important; }
  .mb-xl-n9 { margin-bottom: -10rem !important; }
  .mb-xl-n10 { margin-bottom: -12rem !important; }
  .mb-xl-n11 { margin-bottom: -14rem !important; }
  .mb-xl-n12 { margin-bottom: -16rem !important; }
  .ms-xl-n1 { margin-left: -0.25rem !important; }
  .ms-xl-n2 { margin-left: -0.5rem !important; }
  .ms-xl-n3 { margin-left: -1rem !important; }
  .ms-xl-n4 { margin-left: -1.5rem !important; }
  .ms-xl-n5 { margin-left: -3rem !important; }
  .ms-xl-n6 { margin-left: -4rem !important; }
  .ms-xl-n7 { margin-left: -6rem !important; }
  .ms-xl-n8 { margin-left: -8rem !important; }
  .ms-xl-n9 { margin-left: -10rem !important; }
  .ms-xl-n10 { margin-left: -12rem !important; }
  .ms-xl-n11 { margin-left: -14rem !important; }
  .ms-xl-n12 { margin-left: -16rem !important; }
  .p-xl-0 { padding: 0px !important; }
  .p-xl-1 { padding: 0.25rem !important; }
  .p-xl-2 { padding: 0.5rem !important; }
  .p-xl-3 { padding: 1rem !important; }
  .p-xl-4 { padding: 1.5rem !important; }
  .p-xl-5 { padding: 3rem !important; }
  .p-xl-6 { padding: 4rem !important; }
  .p-xl-7 { padding: 6rem !important; }
  .p-xl-8 { padding: 8rem !important; }
  .p-xl-9 { padding: 10rem !important; }
  .p-xl-10 { padding: 12rem !important; }
  .p-xl-11 { padding: 14rem !important; }
  .p-xl-12 { padding: 16rem !important; }
  .px-xl-0 { padding-right: 0px !important; padding-left: 0px !important; }
  .px-xl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-xl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-xl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-xl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-xl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
  .px-xl-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
  .px-xl-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
  .px-xl-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
  .px-xl-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
  .px-xl-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
  .px-xl-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
  .px-xl-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
  .py-xl-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
  .py-xl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-xl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-xl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-xl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-xl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .py-xl-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
  .py-xl-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
  .py-xl-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
  .py-xl-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
  .py-xl-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
  .py-xl-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
  .py-xl-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
  .pt-xl-0 { padding-top: 0px !important; }
  .pt-xl-1 { padding-top: 0.25rem !important; }
  .pt-xl-2 { padding-top: 0.5rem !important; }
  .pt-xl-3 { padding-top: 1rem !important; }
  .pt-xl-4 { padding-top: 1.5rem !important; }
  .pt-xl-5 { padding-top: 3rem !important; }
  .pt-xl-6 { padding-top: 4rem !important; }
  .pt-xl-7 { padding-top: 6rem !important; }
  .pt-xl-8 { padding-top: 8rem !important; }
  .pt-xl-9 { padding-top: 10rem !important; }
  .pt-xl-10 { padding-top: 12rem !important; }
  .pt-xl-11 { padding-top: 14rem !important; }
  .pt-xl-12 { padding-top: 16rem !important; }
  .pe-xl-0 { padding-right: 0px !important; }
  .pe-xl-1 { padding-right: 0.25rem !important; }
  .pe-xl-2 { padding-right: 0.5rem !important; }
  .pe-xl-3 { padding-right: 1rem !important; }
  .pe-xl-4 { padding-right: 1.5rem !important; }
  .pe-xl-5 { padding-right: 3rem !important; }
  .pe-xl-6 { padding-right: 4rem !important; }
  .pe-xl-7 { padding-right: 6rem !important; }
  .pe-xl-8 { padding-right: 8rem !important; }
  .pe-xl-9 { padding-right: 10rem !important; }
  .pe-xl-10 { padding-right: 12rem !important; }
  .pe-xl-11 { padding-right: 14rem !important; }
  .pe-xl-12 { padding-right: 16rem !important; }
  .pb-xl-0 { padding-bottom: 0px !important; }
  .pb-xl-1 { padding-bottom: 0.25rem !important; }
  .pb-xl-2 { padding-bottom: 0.5rem !important; }
  .pb-xl-3 { padding-bottom: 1rem !important; }
  .pb-xl-4 { padding-bottom: 1.5rem !important; }
  .pb-xl-5 { padding-bottom: 3rem !important; }
  .pb-xl-6 { padding-bottom: 4rem !important; }
  .pb-xl-7 { padding-bottom: 6rem !important; }
  .pb-xl-8 { padding-bottom: 8rem !important; }
  .pb-xl-9 { padding-bottom: 10rem !important; }
  .pb-xl-10 { padding-bottom: 12rem !important; }
  .pb-xl-11 { padding-bottom: 14rem !important; }
  .pb-xl-12 { padding-bottom: 16rem !important; }
  .ps-xl-0 { padding-left: 0px !important; }
  .ps-xl-1 { padding-left: 0.25rem !important; }
  .ps-xl-2 { padding-left: 0.5rem !important; }
  .ps-xl-3 { padding-left: 1rem !important; }
  .ps-xl-4 { padding-left: 1.5rem !important; }
  .ps-xl-5 { padding-left: 3rem !important; }
  .ps-xl-6 { padding-left: 4rem !important; }
  .ps-xl-7 { padding-left: 6rem !important; }
  .ps-xl-8 { padding-left: 8rem !important; }
  .ps-xl-9 { padding-left: 10rem !important; }
  .ps-xl-10 { padding-left: 12rem !important; }
  .ps-xl-11 { padding-left: 14rem !important; }
  .ps-xl-12 { padding-left: 16rem !important; }
  .text-xl-start { text-align: left !important; }
  .text-xl-end { text-align: right !important; }
  .text-xl-center { text-align: center !important; }
  .transform-scale-xl-5 { transform: scale(0.5) !important; }
  .transform-scale-xl-6 { transform: scale(0.6) !important; }
  .transform-scale-xl-7 { transform: scale(0.7) !important; }
  .transform-scale-xl-8 { transform: scale(0.8) !important; }
  .transform-scale-xl-9 { transform: scale(0.9) !important; }
  .transform-scale-xl-10 { transform: scale(1) !important; }
  .border-radius-top-start-xl-0 { border-top-left-radius: 0px !important; }
  .border-radius-top-end-xl-0 { border-top-right-radius: 0px !important; }
  .border-radius-bottom-start-xl-0 { border-bottom-left-radius: 0px !important; }
  .border-radius-bottom-end-xl-0 { border-bottom-right-radius: 0px !important; }
}
@media (min-width: 1400px) {
  .float-xxl-start { float: left !important; }
  .float-xxl-end { float: right !important; }
  .float-xxl-none { float: none !important; }
  .d-xxl-inline { display: inline !important; }
  .d-xxl-inline-block { display: inline-block !important; }
  .d-xxl-block { display: block !important; }
  .d-xxl-grid { display: grid !important; }
  .d-xxl-table { display: table !important; }
  .d-xxl-table-row { display: table-row !important; }
  .d-xxl-table-cell { display: table-cell !important; }
  .d-xxl-flex { display: flex !important; }
  .d-xxl-inline-flex { display: inline-flex !important; }
  .d-xxl-none { display: none !important; }
  .border-top-xxl { border-top: 1px solid rgb(222, 226, 230) !important; }
  .border-top-xxl-0 { border-top: 0px !important; }
  .border-end-xxl { border-right: 1px solid rgb(222, 226, 230) !important; }
  .border-end-xxl-0 { border-right: 0px !important; }
  .border-bottom-xxl { border-bottom: 1px solid rgb(222, 226, 230) !important; }
  .border-bottom-xxl-0 { border-bottom: 0px !important; }
  .border-start-xxl { border-left: 1px solid rgb(222, 226, 230) !important; }
  .border-start-xxl-0 { border-left: 0px !important; }
  .w-xxl-0 { width: 0% !important; }
  .w-xxl-1 { width: 1% !important; }
  .w-xxl-2 { width: 2% !important; }
  .w-xxl-3 { width: 3% !important; }
  .w-xxl-4 { width: 4% !important; }
  .w-xxl-5 { width: 5% !important; }
  .w-xxl-6 { width: 6% !important; }
  .w-xxl-7 { width: 7% !important; }
  .w-xxl-8 { width: 8% !important; }
  .w-xxl-9 { width: 9% !important; }
  .w-xxl-10 { width: 10% !important; }
  .w-xxl-15 { width: 15% !important; }
  .w-xxl-20 { width: 20% !important; }
  .w-xxl-25 { width: 25% !important; }
  .w-xxl-30 { width: 30% !important; }
  .w-xxl-35 { width: 35% !important; }
  .w-xxl-40 { width: 40% !important; }
  .w-xxl-45 { width: 45% !important; }
  .w-xxl-50 { width: 50% !important; }
  .w-xxl-55 { width: 55% !important; }
  .w-xxl-60 { width: 60% !important; }
  .w-xxl-65 { width: 65% !important; }
  .w-xxl-70 { width: 70% !important; }
  .w-xxl-75 { width: 75% !important; }
  .w-xxl-80 { width: 80% !important; }
  .w-xxl-85 { width: 85% !important; }
  .w-xxl-90 { width: 90% !important; }
  .w-xxl-95 { width: 95% !important; }
  .w-xxl-100 { width: 100% !important; }
  .w-xxl-auto { width: auto !important; }
  .flex-xxl-fill { flex: 1 1 auto !important; }
  .flex-xxl-row { flex-direction: row !important; }
  .flex-xxl-column { flex-direction: column !important; }
  .flex-xxl-row-reverse { flex-direction: row-reverse !important; }
  .flex-xxl-column-reverse { flex-direction: column-reverse !important; }
  .flex-xxl-grow-0 { flex-grow: 0 !important; }
  .flex-xxl-grow-1 { flex-grow: 1 !important; }
  .flex-xxl-shrink-0 { flex-shrink: 0 !important; }
  .flex-xxl-shrink-1 { flex-shrink: 1 !important; }
  .flex-xxl-wrap { flex-wrap: wrap !important; }
  .flex-xxl-nowrap { flex-wrap: nowrap !important; }
  .flex-xxl-wrap-reverse { flex-wrap: wrap-reverse !important; }
  .gap-xxl-0 { gap: 0px !important; }
  .gap-xxl-1 { gap: 0.25rem !important; }
  .gap-xxl-2 { gap: 0.5rem !important; }
  .gap-xxl-3 { gap: 1rem !important; }
  .gap-xxl-4 { gap: 1.5rem !important; }
  .gap-xxl-5 { gap: 3rem !important; }
  .gap-xxl-6 { gap: 4rem !important; }
  .gap-xxl-7 { gap: 6rem !important; }
  .gap-xxl-8 { gap: 8rem !important; }
  .gap-xxl-9 { gap: 10rem !important; }
  .gap-xxl-10 { gap: 12rem !important; }
  .gap-xxl-11 { gap: 14rem !important; }
  .gap-xxl-12 { gap: 16rem !important; }
  .justify-content-xxl-start { justify-content: flex-start !important; }
  .justify-content-xxl-end { justify-content: flex-end !important; }
  .justify-content-xxl-center { justify-content: center !important; }
  .justify-content-xxl-between { justify-content: space-between !important; }
  .justify-content-xxl-around { justify-content: space-around !important; }
  .justify-content-xxl-evenly { justify-content: space-evenly !important; }
  .align-items-xxl-start { align-items: flex-start !important; }
  .align-items-xxl-end { align-items: flex-end !important; }
  .align-items-xxl-center { align-items: center !important; }
  .align-items-xxl-baseline { align-items: baseline !important; }
  .align-items-xxl-stretch { align-items: stretch !important; }
  .align-content-xxl-start { align-content: flex-start !important; }
  .align-content-xxl-end { align-content: flex-end !important; }
  .align-content-xxl-center { align-content: center !important; }
  .align-content-xxl-between { align-content: space-between !important; }
  .align-content-xxl-around { align-content: space-around !important; }
  .align-content-xxl-stretch { align-content: stretch !important; }
  .align-self-xxl-auto { align-self: auto !important; }
  .align-self-xxl-start { align-self: flex-start !important; }
  .align-self-xxl-end { align-self: flex-end !important; }
  .align-self-xxl-center { align-self: center !important; }
  .align-self-xxl-baseline { align-self: baseline !important; }
  .align-self-xxl-stretch { align-self: stretch !important; }
  .order-xxl-first { order: -1 !important; }
  .order-xxl-0 { order: 0 !important; }
  .order-xxl-1 { order: 1 !important; }
  .order-xxl-2 { order: 2 !important; }
  .order-xxl-3 { order: 3 !important; }
  .order-xxl-4 { order: 4 !important; }
  .order-xxl-5 { order: 5 !important; }
  .order-xxl-last { order: 6 !important; }
  .m-xxl-0 { margin: 0px !important; }
  .m-xxl-1 { margin: 0.25rem !important; }
  .m-xxl-2 { margin: 0.5rem !important; }
  .m-xxl-3 { margin: 1rem !important; }
  .m-xxl-4 { margin: 1.5rem !important; }
  .m-xxl-5 { margin: 3rem !important; }
  .m-xxl-6 { margin: 4rem !important; }
  .m-xxl-7 { margin: 6rem !important; }
  .m-xxl-8 { margin: 8rem !important; }
  .m-xxl-9 { margin: 10rem !important; }
  .m-xxl-10 { margin: 12rem !important; }
  .m-xxl-11 { margin: 14rem !important; }
  .m-xxl-12 { margin: 16rem !important; }
  .m-xxl-auto { margin: auto !important; }
  .mx-xxl-0 { margin-right: 0px !important; margin-left: 0px !important; }
  .mx-xxl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-xxl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-xxl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-xxl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-xxl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-xxl-6 { margin-right: 4rem !important; margin-left: 4rem !important; }
  .mx-xxl-7 { margin-right: 6rem !important; margin-left: 6rem !important; }
  .mx-xxl-8 { margin-right: 8rem !important; margin-left: 8rem !important; }
  .mx-xxl-9 { margin-right: 10rem !important; margin-left: 10rem !important; }
  .mx-xxl-10 { margin-right: 12rem !important; margin-left: 12rem !important; }
  .mx-xxl-11 { margin-right: 14rem !important; margin-left: 14rem !important; }
  .mx-xxl-12 { margin-right: 16rem !important; margin-left: 16rem !important; }
  .mx-xxl-auto { margin-right: auto !important; margin-left: auto !important; }
  .my-xxl-0 { margin-top: 0px !important; margin-bottom: 0px !important; }
  .my-xxl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-xxl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-xxl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-xxl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-xxl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-xxl-6 { margin-top: 4rem !important; margin-bottom: 4rem !important; }
  .my-xxl-7 { margin-top: 6rem !important; margin-bottom: 6rem !important; }
  .my-xxl-8 { margin-top: 8rem !important; margin-bottom: 8rem !important; }
  .my-xxl-9 { margin-top: 10rem !important; margin-bottom: 10rem !important; }
  .my-xxl-10 { margin-top: 12rem !important; margin-bottom: 12rem !important; }
  .my-xxl-11 { margin-top: 14rem !important; margin-bottom: 14rem !important; }
  .my-xxl-12 { margin-top: 16rem !important; margin-bottom: 16rem !important; }
  .my-xxl-auto { margin-top: auto !important; margin-bottom: auto !important; }
  .mt-xxl-0 { margin-top: 0px !important; }
  .mt-xxl-1 { margin-top: 0.25rem !important; }
  .mt-xxl-2 { margin-top: 0.5rem !important; }
  .mt-xxl-3 { margin-top: 1rem !important; }
  .mt-xxl-4 { margin-top: 1.5rem !important; }
  .mt-xxl-5 { margin-top: 3rem !important; }
  .mt-xxl-6 { margin-top: 4rem !important; }
  .mt-xxl-7 { margin-top: 6rem !important; }
  .mt-xxl-8 { margin-top: 8rem !important; }
  .mt-xxl-9 { margin-top: 10rem !important; }
  .mt-xxl-10 { margin-top: 12rem !important; }
  .mt-xxl-11 { margin-top: 14rem !important; }
  .mt-xxl-12 { margin-top: 16rem !important; }
  .mt-xxl-auto { margin-top: auto !important; }
  .me-xxl-0 { margin-right: 0px !important; }
  .me-xxl-1 { margin-right: 0.25rem !important; }
  .me-xxl-2 { margin-right: 0.5rem !important; }
  .me-xxl-3 { margin-right: 1rem !important; }
  .me-xxl-4 { margin-right: 1.5rem !important; }
  .me-xxl-5 { margin-right: 3rem !important; }
  .me-xxl-6 { margin-right: 4rem !important; }
  .me-xxl-7 { margin-right: 6rem !important; }
  .me-xxl-8 { margin-right: 8rem !important; }
  .me-xxl-9 { margin-right: 10rem !important; }
  .me-xxl-10 { margin-right: 12rem !important; }
  .me-xxl-11 { margin-right: 14rem !important; }
  .me-xxl-12 { margin-right: 16rem !important; }
  .me-xxl-auto { margin-right: auto !important; }
  .mb-xxl-0 { margin-bottom: 0px !important; }
  .mb-xxl-1 { margin-bottom: 0.25rem !important; }
  .mb-xxl-2 { margin-bottom: 0.5rem !important; }
  .mb-xxl-3 { margin-bottom: 1rem !important; }
  .mb-xxl-4 { margin-bottom: 1.5rem !important; }
  .mb-xxl-5 { margin-bottom: 3rem !important; }
  .mb-xxl-6 { margin-bottom: 4rem !important; }
  .mb-xxl-7 { margin-bottom: 6rem !important; }
  .mb-xxl-8 { margin-bottom: 8rem !important; }
  .mb-xxl-9 { margin-bottom: 10rem !important; }
  .mb-xxl-10 { margin-bottom: 12rem !important; }
  .mb-xxl-11 { margin-bottom: 14rem !important; }
  .mb-xxl-12 { margin-bottom: 16rem !important; }
  .mb-xxl-auto { margin-bottom: auto !important; }
  .ms-xxl-0 { margin-left: 0px !important; }
  .ms-xxl-1 { margin-left: 0.25rem !important; }
  .ms-xxl-2 { margin-left: 0.5rem !important; }
  .ms-xxl-3 { margin-left: 1rem !important; }
  .ms-xxl-4 { margin-left: 1.5rem !important; }
  .ms-xxl-5 { margin-left: 3rem !important; }
  .ms-xxl-6 { margin-left: 4rem !important; }
  .ms-xxl-7 { margin-left: 6rem !important; }
  .ms-xxl-8 { margin-left: 8rem !important; }
  .ms-xxl-9 { margin-left: 10rem !important; }
  .ms-xxl-10 { margin-left: 12rem !important; }
  .ms-xxl-11 { margin-left: 14rem !important; }
  .ms-xxl-12 { margin-left: 16rem !important; }
  .ms-xxl-auto { margin-left: auto !important; }
  .m-xxl-n1 { margin: -0.25rem !important; }
  .m-xxl-n2 { margin: -0.5rem !important; }
  .m-xxl-n3 { margin: -1rem !important; }
  .m-xxl-n4 { margin: -1.5rem !important; }
  .m-xxl-n5 { margin: -3rem !important; }
  .m-xxl-n6 { margin: -4rem !important; }
  .m-xxl-n7 { margin: -6rem !important; }
  .m-xxl-n8 { margin: -8rem !important; }
  .m-xxl-n9 { margin: -10rem !important; }
  .m-xxl-n10 { margin: -12rem !important; }
  .m-xxl-n11 { margin: -14rem !important; }
  .m-xxl-n12 { margin: -16rem !important; }
  .mx-xxl-n1 { margin-right: -0.25rem !important; margin-left: -0.25rem !important; }
  .mx-xxl-n2 { margin-right: -0.5rem !important; margin-left: -0.5rem !important; }
  .mx-xxl-n3 { margin-right: -1rem !important; margin-left: -1rem !important; }
  .mx-xxl-n4 { margin-right: -1.5rem !important; margin-left: -1.5rem !important; }
  .mx-xxl-n5 { margin-right: -3rem !important; margin-left: -3rem !important; }
  .mx-xxl-n6 { margin-right: -4rem !important; margin-left: -4rem !important; }
  .mx-xxl-n7 { margin-right: -6rem !important; margin-left: -6rem !important; }
  .mx-xxl-n8 { margin-right: -8rem !important; margin-left: -8rem !important; }
  .mx-xxl-n9 { margin-right: -10rem !important; margin-left: -10rem !important; }
  .mx-xxl-n10 { margin-right: -12rem !important; margin-left: -12rem !important; }
  .mx-xxl-n11 { margin-right: -14rem !important; margin-left: -14rem !important; }
  .mx-xxl-n12 { margin-right: -16rem !important; margin-left: -16rem !important; }
  .my-xxl-n1 { margin-top: -0.25rem !important; margin-bottom: -0.25rem !important; }
  .my-xxl-n2 { margin-top: -0.5rem !important; margin-bottom: -0.5rem !important; }
  .my-xxl-n3 { margin-top: -1rem !important; margin-bottom: -1rem !important; }
  .my-xxl-n4 { margin-top: -1.5rem !important; margin-bottom: -1.5rem !important; }
  .my-xxl-n5 { margin-top: -3rem !important; margin-bottom: -3rem !important; }
  .my-xxl-n6 { margin-top: -4rem !important; margin-bottom: -4rem !important; }
  .my-xxl-n7 { margin-top: -6rem !important; margin-bottom: -6rem !important; }
  .my-xxl-n8 { margin-top: -8rem !important; margin-bottom: -8rem !important; }
  .my-xxl-n9 { margin-top: -10rem !important; margin-bottom: -10rem !important; }
  .my-xxl-n10 { margin-top: -12rem !important; margin-bottom: -12rem !important; }
  .my-xxl-n11 { margin-top: -14rem !important; margin-bottom: -14rem !important; }
  .my-xxl-n12 { margin-top: -16rem !important; margin-bottom: -16rem !important; }
  .mt-xxl-n1 { margin-top: -0.25rem !important; }
  .mt-xxl-n2 { margin-top: -0.5rem !important; }
  .mt-xxl-n3 { margin-top: -1rem !important; }
  .mt-xxl-n4 { margin-top: -1.5rem !important; }
  .mt-xxl-n5 { margin-top: -3rem !important; }
  .mt-xxl-n6 { margin-top: -4rem !important; }
  .mt-xxl-n7 { margin-top: -6rem !important; }
  .mt-xxl-n8 { margin-top: -8rem !important; }
  .mt-xxl-n9 { margin-top: -10rem !important; }
  .mt-xxl-n10 { margin-top: -12rem !important; }
  .mt-xxl-n11 { margin-top: -14rem !important; }
  .mt-xxl-n12 { margin-top: -16rem !important; }
  .me-xxl-n1 { margin-right: -0.25rem !important; }
  .me-xxl-n2 { margin-right: -0.5rem !important; }
  .me-xxl-n3 { margin-right: -1rem !important; }
  .me-xxl-n4 { margin-right: -1.5rem !important; }
  .me-xxl-n5 { margin-right: -3rem !important; }
  .me-xxl-n6 { margin-right: -4rem !important; }
  .me-xxl-n7 { margin-right: -6rem !important; }
  .me-xxl-n8 { margin-right: -8rem !important; }
  .me-xxl-n9 { margin-right: -10rem !important; }
  .me-xxl-n10 { margin-right: -12rem !important; }
  .me-xxl-n11 { margin-right: -14rem !important; }
  .me-xxl-n12 { margin-right: -16rem !important; }
  .mb-xxl-n1 { margin-bottom: -0.25rem !important; }
  .mb-xxl-n2 { margin-bottom: -0.5rem !important; }
  .mb-xxl-n3 { margin-bottom: -1rem !important; }
  .mb-xxl-n4 { margin-bottom: -1.5rem !important; }
  .mb-xxl-n5 { margin-bottom: -3rem !important; }
  .mb-xxl-n6 { margin-bottom: -4rem !important; }
  .mb-xxl-n7 { margin-bottom: -6rem !important; }
  .mb-xxl-n8 { margin-bottom: -8rem !important; }
  .mb-xxl-n9 { margin-bottom: -10rem !important; }
  .mb-xxl-n10 { margin-bottom: -12rem !important; }
  .mb-xxl-n11 { margin-bottom: -14rem !important; }
  .mb-xxl-n12 { margin-bottom: -16rem !important; }
  .ms-xxl-n1 { margin-left: -0.25rem !important; }
  .ms-xxl-n2 { margin-left: -0.5rem !important; }
  .ms-xxl-n3 { margin-left: -1rem !important; }
  .ms-xxl-n4 { margin-left: -1.5rem !important; }
  .ms-xxl-n5 { margin-left: -3rem !important; }
  .ms-xxl-n6 { margin-left: -4rem !important; }
  .ms-xxl-n7 { margin-left: -6rem !important; }
  .ms-xxl-n8 { margin-left: -8rem !important; }
  .ms-xxl-n9 { margin-left: -10rem !important; }
  .ms-xxl-n10 { margin-left: -12rem !important; }
  .ms-xxl-n11 { margin-left: -14rem !important; }
  .ms-xxl-n12 { margin-left: -16rem !important; }
  .p-xxl-0 { padding: 0px !important; }
  .p-xxl-1 { padding: 0.25rem !important; }
  .p-xxl-2 { padding: 0.5rem !important; }
  .p-xxl-3 { padding: 1rem !important; }
  .p-xxl-4 { padding: 1.5rem !important; }
  .p-xxl-5 { padding: 3rem !important; }
  .p-xxl-6 { padding: 4rem !important; }
  .p-xxl-7 { padding: 6rem !important; }
  .p-xxl-8 { padding: 8rem !important; }
  .p-xxl-9 { padding: 10rem !important; }
  .p-xxl-10 { padding: 12rem !important; }
  .p-xxl-11 { padding: 14rem !important; }
  .p-xxl-12 { padding: 16rem !important; }
  .px-xxl-0 { padding-right: 0px !important; padding-left: 0px !important; }
  .px-xxl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-xxl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-xxl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-xxl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-xxl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }
  .px-xxl-6 { padding-right: 4rem !important; padding-left: 4rem !important; }
  .px-xxl-7 { padding-right: 6rem !important; padding-left: 6rem !important; }
  .px-xxl-8 { padding-right: 8rem !important; padding-left: 8rem !important; }
  .px-xxl-9 { padding-right: 10rem !important; padding-left: 10rem !important; }
  .px-xxl-10 { padding-right: 12rem !important; padding-left: 12rem !important; }
  .px-xxl-11 { padding-right: 14rem !important; padding-left: 14rem !important; }
  .px-xxl-12 { padding-right: 16rem !important; padding-left: 16rem !important; }
  .py-xxl-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
  .py-xxl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-xxl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-xxl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-xxl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-xxl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .py-xxl-6 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
  .py-xxl-7 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
  .py-xxl-8 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
  .py-xxl-9 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
  .py-xxl-10 { padding-top: 12rem !important; padding-bottom: 12rem !important; }
  .py-xxl-11 { padding-top: 14rem !important; padding-bottom: 14rem !important; }
  .py-xxl-12 { padding-top: 16rem !important; padding-bottom: 16rem !important; }
  .pt-xxl-0 { padding-top: 0px !important; }
  .pt-xxl-1 { padding-top: 0.25rem !important; }
  .pt-xxl-2 { padding-top: 0.5rem !important; }
  .pt-xxl-3 { padding-top: 1rem !important; }
  .pt-xxl-4 { padding-top: 1.5rem !important; }
  .pt-xxl-5 { padding-top: 3rem !important; }
  .pt-xxl-6 { padding-top: 4rem !important; }
  .pt-xxl-7 { padding-top: 6rem !important; }
  .pt-xxl-8 { padding-top: 8rem !important; }
  .pt-xxl-9 { padding-top: 10rem !important; }
  .pt-xxl-10 { padding-top: 12rem !important; }
  .pt-xxl-11 { padding-top: 14rem !important; }
  .pt-xxl-12 { padding-top: 16rem !important; }
  .pe-xxl-0 { padding-right: 0px !important; }
  .pe-xxl-1 { padding-right: 0.25rem !important; }
  .pe-xxl-2 { padding-right: 0.5rem !important; }
  .pe-xxl-3 { padding-right: 1rem !important; }
  .pe-xxl-4 { padding-right: 1.5rem !important; }
  .pe-xxl-5 { padding-right: 3rem !important; }
  .pe-xxl-6 { padding-right: 4rem !important; }
  .pe-xxl-7 { padding-right: 6rem !important; }
  .pe-xxl-8 { padding-right: 8rem !important; }
  .pe-xxl-9 { padding-right: 10rem !important; }
  .pe-xxl-10 { padding-right: 12rem !important; }
  .pe-xxl-11 { padding-right: 14rem !important; }
  .pe-xxl-12 { padding-right: 16rem !important; }
  .pb-xxl-0 { padding-bottom: 0px !important; }
  .pb-xxl-1 { padding-bottom: 0.25rem !important; }
  .pb-xxl-2 { padding-bottom: 0.5rem !important; }
  .pb-xxl-3 { padding-bottom: 1rem !important; }
  .pb-xxl-4 { padding-bottom: 1.5rem !important; }
  .pb-xxl-5 { padding-bottom: 3rem !important; }
  .pb-xxl-6 { padding-bottom: 4rem !important; }
  .pb-xxl-7 { padding-bottom: 6rem !important; }
  .pb-xxl-8 { padding-bottom: 8rem !important; }
  .pb-xxl-9 { padding-bottom: 10rem !important; }
  .pb-xxl-10 { padding-bottom: 12rem !important; }
  .pb-xxl-11 { padding-bottom: 14rem !important; }
  .pb-xxl-12 { padding-bottom: 16rem !important; }
  .ps-xxl-0 { padding-left: 0px !important; }
  .ps-xxl-1 { padding-left: 0.25rem !important; }
  .ps-xxl-2 { padding-left: 0.5rem !important; }
  .ps-xxl-3 { padding-left: 1rem !important; }
  .ps-xxl-4 { padding-left: 1.5rem !important; }
  .ps-xxl-5 { padding-left: 3rem !important; }
  .ps-xxl-6 { padding-left: 4rem !important; }
  .ps-xxl-7 { padding-left: 6rem !important; }
  .ps-xxl-8 { padding-left: 8rem !important; }
  .ps-xxl-9 { padding-left: 10rem !important; }
  .ps-xxl-10 { padding-left: 12rem !important; }
  .ps-xxl-11 { padding-left: 14rem !important; }
  .ps-xxl-12 { padding-left: 16rem !important; }
  .text-xxl-start { text-align: left !important; }
  .text-xxl-end { text-align: right !important; }
  .text-xxl-center { text-align: center !important; }
  .transform-scale-xxl-5 { transform: scale(0.5) !important; }
  .transform-scale-xxl-6 { transform: scale(0.6) !important; }
  .transform-scale-xxl-7 { transform: scale(0.7) !important; }
  .transform-scale-xxl-8 { transform: scale(0.8) !important; }
  .transform-scale-xxl-9 { transform: scale(0.9) !important; }
  .transform-scale-xxl-10 { transform: scale(1) !important; }
  .border-radius-top-start-xxl-0 { border-top-left-radius: 0px !important; }
  .border-radius-top-end-xxl-0 { border-top-right-radius: 0px !important; }
  .border-radius-bottom-start-xxl-0 { border-bottom-left-radius: 0px !important; }
  .border-radius-bottom-end-xxl-0 { border-bottom-right-radius: 0px !important; }
}
@media (min-width: 1200px) {
  .fs-1 { font-size: 3rem !important; }
  .fs-2 { font-size: 2.25rem !important; }
  .fs-3 { font-size: 1.875rem !important; }
  .fs-4 { font-size: 1.5rem !important; }
}
@media print {
  .d-print-inline { display: inline !important; }
  .d-print-inline-block { display: inline-block !important; }
  .d-print-block { display: block !important; }
  .d-print-grid { display: grid !important; }
  .d-print-table { display: table !important; }
  .d-print-table-row { display: table-row !important; }
  .d-print-table-cell { display: table-cell !important; }
  .d-print-flex { display: flex !important; }
  .d-print-inline-flex { display: inline-flex !important; }
  .d-print-none { display: none !important; }
}
.alert-primary { background-image: linear-gradient(310deg, rgb(121, 40, 202) 0%, rgb(214, 0, 108) 100%); }
.alert-secondary { background-image: linear-gradient(310deg, rgb(98, 117, 148) 0%, rgb(140, 161, 203) 100%); }
.alert-success { background-image: linear-gradient(310deg, rgb(23, 173, 55) 0%, rgb(132, 220, 20) 100%); }
.alert-info { background-image: linear-gradient(310deg, rgb(33, 82, 255) 0%, rgb(2, 198, 243) 100%); }
.alert-warning { background-image: linear-gradient(310deg, rgb(245, 57, 57) 0%, rgb(250, 198, 11) 100%); }
.alert-danger { background-image: linear-gradient(310deg, rgb(234, 6, 6) 0%, rgb(255, 61, 89) 100%); }
.alert-light { background-image: linear-gradient(310deg, rgb(206, 212, 218) 0%, rgb(209, 218, 230) 100%); }
.alert-dark { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(44, 49, 84) 100%); }
.btn-close:focus { box-shadow: none; }
.alert-dismissible .btn-close { background-image: none; }
.avatar { color: rgb(255, 255, 255); display: inline-flex; align-items: center; justify-content: center; font-size: 1rem; border-radius: 0.75rem; height: 48px; width: 48px; transition: all 0.2s ease-in-out 0s; }
.avatar img { width: 100%; }
.avatar + .avatar-content { display: inline-block; margin-left: 0.75rem; }
.avatar.avatar-raised { margin-top: -24px; }
.avatar.avatar-scale-up:hover { transform: scale(1.2); }
.active .avatar.avatar-scale-up { transform: scale(1.2); }
.avatar-xxl { width: 110px !important; height: 110px !important; }
.avatar-xxl.avatar-raised { margin-top: -55px; }
.avatar-xl { width: 74px !important; height: 74px !important; }
.avatar-xl.avatar-raised { margin-top: -37px; }
.avatar-lg { font-size: 0.875rem; width: 58px !important; height: 58px !important; }
.avatar-lg.avatar-raised { margin-top: -29px; }
.avatar-sm { font-size: 0.875rem; width: 36px !important; height: 36px !important; }
.avatar-sm.avatar-raised { margin-top: -18px; }
.avatar-xs { font-size: 0.75rem; width: 24px !important; height: 24px !important; }
.avatar-xs.avatar-raised { margin-top: -12px; }
.avatar-group .avatar { position: relative; z-index: 2; border: 2px solid rgb(255, 255, 255); }
.avatar-group .avatar:hover { z-index: 3; }
.avatar-group .avatar + .avatar { margin-left: -1rem; }
.badge.bg-primary { background: rgb(203, 12, 159); }
.badge.bg-secondary { background: rgb(131, 146, 171); }
.badge.bg-success { background: rgb(130, 214, 22); }
.badge.bg-info { background: rgb(23, 193, 232); }
.badge.bg-warning { background: rgb(251, 207, 51); }
.badge.bg-danger { background: rgb(234, 6, 6); }
.badge.bg-light { background: rgb(233, 236, 239); }
.badge.bg-dark { background: rgb(52, 71, 103); }
.badge.bg-white { background: rgb(255, 255, 255); }
.badge { text-transform: uppercase; }
.btn { margin-bottom: 1rem; letter-spacing: -0.025rem; text-transform: uppercase; box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px; background-size: 150%; background-position-x: 25%; }
.btn:not([class*="btn-outline-"]) { border: 0px; }
.btn:active, .btn:active:focus, .btn:active:hover { box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px -1px, rgba(0, 0, 0, 0.07) 0px 2px 3px -1px; transform: scale(1); opacity: 0.85; }
.btn:hover:not(.btn-icon-only) { box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px -1px, rgba(0, 0, 0, 0.07) 0px 2px 3px -1px; transform: scale(1.02); }
.btn.bg-white:hover { color: rgb(103, 116, 142); }
.btn.btn-link { box-shadow: none; font-weight: 700; }
.btn.btn-link:hover, .btn.btn-link:focus { box-shadow: none; }
.btn.btn-round { border-radius: 1.875rem; }
.btn.btn-icon-only { width: 2.375rem; height: 2.375rem; padding: 0.7rem; }
.btn.btn-sm.btn-icon-only, .btn-group-sm > .btn.btn-icon-only { width: 1.5875rem; height: 1.5875rem; padding: 0.3rem; }
.btn.btn-sm i, .btn-group-sm > .btn i { font-size: 0.5rem; }
.btn.btn-lg.btn-icon-only, .btn-group-lg > .btn.btn-icon-only { width: 3.25rem; height: 3.25rem; padding: 1rem; }
.btn.btn-lg i, .btn-group-lg > .btn i { font-size: 1.2rem; position: relative; top: 2px; }
.btn.btn-rounded { border-radius: 1.875rem; }
.btn-check:checked + .btn svg .color-background { fill: rgb(255, 255, 255); }
.btn-check:checked + .btn:hover svg .color-background { fill: rgb(52, 71, 103); }
.icon-move-right i { transition: all 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3) 0s; }
.icon-move-right:hover i, .icon-move-right:focus i { transform: translateX(5px); }
.icon-move-left i { transition: all 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3) 0s; }
.icon-move-left:hover i, .icon-move-left:focus i { transform: translateX(-5px); }
.btn-primary:hover, .btn.bg-gradient-primary:hover { background-color: rgb(203, 12, 159); border-color: rgb(203, 12, 159); }
.btn-primary .btn.bg-outline-primary, .btn.bg-gradient-primary .btn.bg-outline-primary { border: 1px solid rgb(203, 12, 159); }
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle, .btn.bg-gradient-primary:not(:disabled):not(.disabled).active, .btn.bg-gradient-primary:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-primary.dropdown-toggle { background-color: rgb(203, 12, 159); }
.btn-primary.focus, .btn-primary:focus, .btn.bg-gradient-primary.focus, .btn.bg-gradient-primary:focus { color: rgb(255, 255, 255); }
.btn-outline-primary { box-shadow: none; }
.btn-outline-primary:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(203, 12, 159); }
.btn-secondary:hover, .btn.bg-gradient-secondary:hover { background-color: rgb(131, 146, 171); border-color: rgb(131, 146, 171); }
.btn-secondary .btn.bg-outline-secondary, .btn.bg-gradient-secondary .btn.bg-outline-secondary { border: 1px solid rgb(131, 146, 171); }
.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle, .btn.bg-gradient-secondary:not(:disabled):not(.disabled).active, .btn.bg-gradient-secondary:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-secondary.dropdown-toggle { background-color: rgb(131, 146, 171); }
.btn-secondary.focus, .btn-secondary:focus, .btn.bg-gradient-secondary.focus, .btn.bg-gradient-secondary:focus { color: rgb(255, 255, 255); }
.btn-outline-secondary { box-shadow: none; }
.btn-outline-secondary:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(131, 146, 171); }
.btn-success:hover, .btn.bg-gradient-success:hover { background-color: rgb(130, 214, 22); border-color: rgb(130, 214, 22); }
.btn-success .btn.bg-outline-success, .btn.bg-gradient-success .btn.bg-outline-success { border: 1px solid rgb(130, 214, 22); }
.btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show > .btn-success.dropdown-toggle, .btn.bg-gradient-success:not(:disabled):not(.disabled).active, .btn.bg-gradient-success:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-success.dropdown-toggle { background-color: rgb(130, 214, 22); }
.btn-success.focus, .btn-success:focus, .btn.bg-gradient-success.focus, .btn.bg-gradient-success:focus { color: rgb(255, 255, 255); }
.btn-outline-success { box-shadow: none; }
.btn-outline-success:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(130, 214, 22); }
.btn-info:hover, .btn.bg-gradient-info:hover { background-color: rgb(23, 193, 232); border-color: rgb(23, 193, 232); }
.btn-info .btn.bg-outline-info, .btn.bg-gradient-info .btn.bg-outline-info { border: 1px solid rgb(23, 193, 232); }
.btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show > .btn-info.dropdown-toggle, .btn.bg-gradient-info:not(:disabled):not(.disabled).active, .btn.bg-gradient-info:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-info.dropdown-toggle { background-color: rgb(23, 193, 232); }
.btn-info.focus, .btn-info:focus, .btn.bg-gradient-info.focus, .btn.bg-gradient-info:focus { color: rgb(255, 255, 255); }
.btn-outline-info { box-shadow: none; }
.btn-outline-info:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(23, 193, 232); }
.btn-warning:hover, .btn.bg-gradient-warning:hover { background-color: rgb(251, 207, 51); border-color: rgb(251, 207, 51); }
.btn-warning .btn.bg-outline-warning, .btn.bg-gradient-warning .btn.bg-outline-warning { border: 1px solid rgb(251, 207, 51); }
.btn-warning:not(:disabled):not(.disabled).active, .btn-warning:not(:disabled):not(.disabled):active, .show > .btn-warning.dropdown-toggle, .btn.bg-gradient-warning:not(:disabled):not(.disabled).active, .btn.bg-gradient-warning:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-warning.dropdown-toggle { background-color: rgb(251, 207, 51); }
.btn-warning.focus, .btn-warning:focus, .btn.bg-gradient-warning.focus, .btn.bg-gradient-warning:focus { color: rgb(255, 255, 255); }
.btn-outline-warning { box-shadow: none; }
.btn-outline-warning:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(251, 207, 51); }
.btn-danger:hover, .btn.bg-gradient-danger:hover { background-color: rgb(234, 6, 6); border-color: rgb(234, 6, 6); }
.btn-danger .btn.bg-outline-danger, .btn.bg-gradient-danger .btn.bg-outline-danger { border: 1px solid rgb(234, 6, 6); }
.btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle, .btn.bg-gradient-danger:not(:disabled):not(.disabled).active, .btn.bg-gradient-danger:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-danger.dropdown-toggle { background-color: rgb(234, 6, 6); }
.btn-danger.focus, .btn-danger:focus, .btn.bg-gradient-danger.focus, .btn.bg-gradient-danger:focus { color: rgb(255, 255, 255); }
.btn-outline-danger { box-shadow: none; }
.btn-outline-danger:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(234, 6, 6); }
.btn-light:hover, .btn.bg-gradient-light:hover { background-color: rgb(233, 236, 239); border-color: rgb(233, 236, 239); }
.btn-light .btn.bg-outline-light, .btn.bg-gradient-light .btn.bg-outline-light { border: 1px solid rgb(233, 236, 239); }
.btn-light:not(:disabled):not(.disabled).active, .btn-light:not(:disabled):not(.disabled):active, .show > .btn-light.dropdown-toggle, .btn.bg-gradient-light:not(:disabled):not(.disabled).active, .btn.bg-gradient-light:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-light.dropdown-toggle { background-color: rgb(233, 236, 239); }
.btn-outline-light { box-shadow: none; }
.btn-outline-light:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(233, 236, 239); }
.btn-dark:hover, .btn.bg-gradient-dark:hover { background-color: rgb(52, 71, 103); border-color: rgb(52, 71, 103); }
.btn-dark .btn.bg-outline-dark, .btn.bg-gradient-dark .btn.bg-outline-dark { border: 1px solid rgb(52, 71, 103); }
.btn-dark:not(:disabled):not(.disabled).active, .btn-dark:not(:disabled):not(.disabled):active, .show > .btn-dark.dropdown-toggle, .btn.bg-gradient-dark:not(:disabled):not(.disabled).active, .btn.bg-gradient-dark:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-dark.dropdown-toggle { background-color: rgb(52, 71, 103); }
.btn-dark.focus, .btn-dark:focus, .btn.bg-gradient-dark.focus, .btn.bg-gradient-dark:focus { color: rgb(255, 255, 255); }
.btn-outline-dark { box-shadow: none; }
.btn-outline-dark:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(52, 71, 103); }
.btn-white:hover, .btn.bg-gradient-white:hover { background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }
.btn-white .btn.bg-outline-white, .btn.bg-gradient-white .btn.bg-outline-white { border: 1px solid rgb(255, 255, 255); }
.btn-white:not(:disabled):not(.disabled).active, .btn-white:not(:disabled):not(.disabled):active, .show > .btn-white.dropdown-toggle, .btn.bg-gradient-white:not(:disabled):not(.disabled).active, .btn.bg-gradient-white:not(:disabled):not(.disabled):active, .show > .btn.bg-gradient-white.dropdown-toggle { background-color: rgb(255, 255, 255); }
.btn-outline-white { box-shadow: none; }
.btn-outline-white:hover:not(.active) { background-color: transparent; opacity: 0.75; box-shadow: none; color: rgb(255, 255, 255); }
.btn-outline-white { border-color: rgba(255, 255, 255, 0.75); background: rgba(255, 255, 255, 0.1); }
.btn-primary, .btn.bg-gradient-primary { color: rgb(255, 255, 255); }
.btn-primary:hover, .btn.bg-gradient-primary:hover { color: rgb(255, 255, 255); }
.btn-secondary, .btn.bg-gradient-secondary { color: rgb(255, 255, 255); }
.btn-secondary:hover, .btn.bg-gradient-secondary:hover { color: rgb(255, 255, 255); }
.btn-danger, .btn.bg-gradient-danger { color: rgb(255, 255, 255); }
.btn-danger:hover, .btn.bg-gradient-danger:hover { color: rgb(255, 255, 255); }
.btn-info, .btn.bg-gradient-info { color: rgb(255, 255, 255); }
.btn-info:hover, .btn.bg-gradient-info:hover { color: rgb(255, 255, 255); }
.btn-success, .btn.bg-gradient-success { color: rgb(255, 255, 255); }
.btn-success:hover, .btn.bg-gradient-success:hover { color: rgb(255, 255, 255); }
.btn-warning, .btn.bg-gradient-warning { color: rgb(255, 255, 255); }
.btn-warning:hover, .btn.bg-gradient-warning:hover { color: rgb(255, 255, 255); }
.btn-dark, .btn.bg-gradient-dark { color: rgb(255, 255, 255); }
.btn-dark:hover, .btn.bg-gradient-dark:hover { color: rgb(255, 255, 255); }
.btn-light, .btn.bg-gradient-light { color: rgb(58, 65, 111); }
.btn-light:hover, .btn.bg-gradient-light:hover { color: rgb(58, 65, 111); }
.breadcrumb-item { font-size: 0.875rem; }
.breadcrumb-item.text-white::before { color: rgb(255, 255, 255); }
.breadcrumb-dark { background-color: rgb(52, 71, 103); }
.breadcrumb-dark .breadcrumb-item { font-weight: 600; }
.breadcrumb-dark .breadcrumb-item a { color: rgb(248, 249, 250); }
.breadcrumb-dark .breadcrumb-item a:hover { color: rgb(255, 255, 255); }
.breadcrumb-dark .breadcrumb-item + .breadcrumb-item::before { color: rgb(173, 181, 189); }
.breadcrumb-dark .breadcrumb-item.active { color: rgb(222, 226, 230); }
.breadcrumb-links { padding: 0px; margin: 0px; background: transparent; }
.card { box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px; }
.card .card-header { padding: 1.5rem; }
.card .card-body { font-family: "Open Sans"; padding: 1.5rem; }
.card.card-plain { background-color: transparent; box-shadow: none; }
.card .card-footer { padding: 1.5rem; background-color: transparent; }
.author { display: flex; }
.author .name > span { line-height: 1.571; font-weight: 600; font-size: 0.875rem; color: rgb(58, 65, 111); }
.author .stats { font-size: 0.875rem; font-weight: 400; }
.card.card-background { align-items: center; }
.card.card-background .full-background { background-position: 50% center; background-size: cover; margin-bottom: 30px; width: 100%; height: 100%; position: absolute; border-radius: 1rem; }
.card.card-background .card-body { color: rgb(255, 255, 255); position: relative; z-index: 2; }
.card.card-background .card-body .content-center, .card.card-background .card-body .content-left { min-height: 330px; max-width: 450px; padding-top: 60px; padding-bottom: 60px; }
.card.card-background .card-body .content-center { text-align: center; }
.card.card-background .card-body.body-left { width: 90%; }
.card.card-background .card-body .author .name span, .card.card-background .card-body .author .name .stats { color: rgb(255, 255, 255); }
.card.card-background::after { position: absolute; top: 0px; bottom: 0px; left: 0px; height: 100%; width: 100%; z-index: 1; display: block; content: ""; background: rgba(0, 0, 0, 0.4); border-radius: 1rem; }
.card.card-background.card-background-mask-primary::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-primary::after { background-image: linear-gradient(310deg, rgb(121, 40, 202) 0%, rgb(255, 0, 128) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-secondary::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-secondary::after { background-image: linear-gradient(310deg, rgb(98, 117, 148) 0%, rgb(168, 184, 216) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-success::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-success::after { background-image: linear-gradient(310deg, rgb(23, 173, 55) 0%, rgb(152, 236, 45) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-info::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-info::after { background-image: linear-gradient(310deg, rgb(33, 82, 255) 0%, rgb(33, 212, 253) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-warning::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-warning::after { background-image: linear-gradient(310deg, rgb(245, 57, 57) 0%, rgb(251, 207, 51) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-danger::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-danger::after { background-image: linear-gradient(310deg, rgb(234, 6, 6) 0%, rgb(255, 102, 124) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-light::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-light::after { background-image: linear-gradient(310deg, rgb(206, 212, 218) 0%, rgb(235, 239, 244) 100%); opacity: 0.85; }
.card.card-background.card-background-mask-dark::before { background: rgba(0, 0, 0, 0.2); }
.card.card-background.card-background-mask-dark::after { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(58, 65, 111) 100%); opacity: 0.85; }
.card.card-background .card-category { font-size: 0.875rem; font-weight: 600; }
.card.card-background .card-description { margin-top: 24px; margin-bottom: 24px; }
@media (min-width: 992px) {
  .dropdown .dropdown-menu, .dropup .dropdown-menu, .dropstart .dropdown-menu, .dropend .dropdown-menu { box-shadow: rgba(20, 20, 20, 0.15) 0px 8px 26px -4px, rgba(20, 20, 20, 0.06) 0px 8px 9px -5px; transition: visibility 0.25s ease 0s, opacity 0.25s ease 0s, transform 0.25s ease 0s; cursor: pointer; }
  .dropdown .dropdown-toggle::after, .dropup .dropdown-toggle::after, .dropstart .dropdown-toggle::after, .dropend .dropdown-toggle::after { content: ""; font: 600 14px / 1 FontAwesome; border: none; vertical-align: middle; }
  .dropdown .dropdown-toggle.show::after, .dropup .dropdown-toggle.show::after, .dropstart .dropdown-toggle.show::after, .dropend .dropdown-toggle.show::after { transform: rotate(180deg); }
  .dropdown .dropdown-toggle::after, .dropup .dropdown-toggle::after, .dropstart .dropdown-toggle::after, .dropend .dropdown-toggle::after { transition: all 0.3s ease 0s; }
  .dropdown.dropdown-hover .dropdown-menu, .dropdown .dropdown-menu { display: block; opacity: 0; top: 0px; transform-origin: 50% 0px; pointer-events: none; backface-visibility: hidden; will-change: transform, box-shadow; transform: perspective(999px) rotateX(-10deg) translateZ(0px) translate3d(0px, 37px, 0px) !important; }
  .dropdown.dropdown-hover:hover > .dropdown-menu, .dropdown .dropdown-menu.show { opacity: 1; pointer-events: auto; visibility: visible; transform: perspective(999px) rotateX(0deg) translateZ(0px) translate3d(0px, 37px, 5px) !important; }
  .dropdown.dropdown-hover:hover > .dropdown-menu::before, .dropdown .dropdown-menu.show::before { top: -20px; }
  .dropdown.dropdown-hover::after { content: ""; position: absolute; left: 0px; bottom: -24px; width: 100%; height: 100%; }
  .dropdown:not(.dropdown-hover) .dropdown-menu { margin-top: 8px !important; }
  .dropdown .dropdown-menu::before { font-family: FontAwesome; content: ""; position: absolute; top: 0px; left: 28px; right: auto; font-size: 22px; color: rgb(255, 255, 255); transition: top 0.35s ease 0s; }
  .dropdown .dropdown-item .arrow { transform: rotate(-90deg); }
  .dropdown-item { transition: background-color 0.3s ease 0s, color 0.3s ease 0s; }
}
@media (max-width: 991.98px) {
  .dropdown:not(.nav-item) .dropdown-menu { display: block; opacity: 0; top: 0px; transform-origin: 50% 0px; pointer-events: none; transition: visibility 0.25s ease 0s, opacity 0.25s ease 0s, transform 0.25s ease 0s; backface-visibility: hidden; will-change: transform, box-shadow; box-shadow: rgba(20, 20, 20, 0.15) 0px 8px 26px -4px, rgba(20, 20, 20, 0.06) 0px 8px 9px -5px; transform: perspective(999px) rotateX(-10deg) translateZ(0px) translate3d(0px, 37px, 0px) !important; }
  .dropdown:not(.nav-item) .dropdown-menu::before { font-family: FontAwesome; content: ""; position: absolute; top: 0px; left: 28px; right: auto; font-size: 22px; color: rgb(255, 255, 255); transition: top 0.35s ease 0s; }
  .dropdown:not(.nav-item):not(.dropdown-hover) .dropdown-menu { margin-top: 8px !important; }
  .dropdown:not(.nav-item) .dropdown-menu.show { opacity: 1; pointer-events: auto; visibility: visible; transform: perspective(999px) rotateX(0deg) translateZ(0px) translate3d(0px, 37px, 5px) !important; }
  .dropdown:not(.nav-item) .dropdown-menu.show::before { top: -20px; }
  .dropdown.nav-item .dropdown-menu { background-color: transparent; overflow: scroll; }
  .dropdown.nav-item .dropdown-menu-animation { display: block; height: 0px; transition: all 0.35s ease 0s; opacity: 0; padding-top: 0px !important; padding-bottom: 0px !important; }
  .dropdown.nav-item .dropdown-menu-animation.show { height: 250px; opacity: 1; }
}
.dropdown-menu li { position: relative; }
.dropdown.dropdown-subitem::after { left: 100%; bottom: 0px; width: 50%; }
.dropdown .dropdown-menu .dropdown-item + .dropdown-menu::before { transform: rotate(-90deg); left: 0px; top: 0px; z-index: -1; transition: left 0.35s ease 0s; }
.dropdown .dropdown-menu.dropdown-menu-end { right: 0px !important; left: auto !important; }
.dropdown .dropdown-menu.dropdown-menu-end::before { right: 28px; left: auto; }
.dropdown.dropdown-subitem:hover .dropdown-item + .dropdown-menu::before { left: -8px; }
.dropdown > .dropdown-menu .dropdown-item + .dropdown-menu { transform: perspective(999px) rotateX(0deg) translateZ(0px) translate3d(0px, 0px, 5px) !important; }
.dropdown .dropdown-menu .dropdown-item + .dropdown-menu { right: -197px; left: auto; top: 0px; }
.dropdown-image { background-size: cover; }
@media (min-width: 992px) {
  .dropdown-xl { min-width: 40rem; }
  .dropdown-lg { min-width: 23rem; }
  .dropdown-md { min-width: 15rem; }
}
@media (max-width: 1199.98px) {
  .dropdown-lg-responsive { min-width: 19rem; }
}
.dropup .dropdown-menu { box-shadow: rgba(20, 20, 20, 0.15) 0px 8px 26px -4px, rgba(20, 20, 20, 0.06) 0px 8px 9px -5px; transition: visibility 0.25s ease 0s, opacity 0.25s ease 0s, transform 0.25s ease 0s; cursor: pointer; display: block; opacity: 0; transform-origin: center bottom; pointer-events: none; backface-visibility: hidden; will-change: transform, box-shadow; top: auto !important; bottom: 100% !important; margin-bottom: 0.5rem !important; transform: perspective(999px) rotateX(12deg) translateZ(0px) translate3d(0px, 0px, 0px) !important; }
.dropup .dropdown-menu.show { pointer-events: auto; opacity: 1; transform: perspective(999px) rotateX(0deg) translateZ(0px) translate3d(1px, 0px, 5px) !important; }
.dropup .dropdown-menu.show::after { bottom: -20px; }
.dropup .dropdown-menu::after { font-family: FontAwesome; content: ""; position: absolute; z-index: -1; bottom: 22px; left: 28px; right: auto; font-size: 22px; color: rgb(255, 255, 255); transition: bottom 0.35s ease 0s; }
.page-header { padding: 0px; position: relative; overflow: hidden; display: flex; align-items: center; background-size: cover; background-position: 50% center; }
.page-header .container { z-index: 1; }
.oblique { transform: skewX(-10deg); overflow: hidden; width: 60%; right: -10rem; border-bottom-left-radius: 0.75rem; }
.oblique .oblique-image { transform: skewX(10deg); }
.fixed-plugin .fixed-plugin-button { background: rgb(255, 255, 255); border-radius: 50%; bottom: 30px; right: 30px; font-size: 1.25rem; z-index: 990; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 12px 0px; cursor: pointer; }
.fixed-plugin .fixed-plugin-button i { pointer-events: none; }
.fixed-plugin .card { right: -360px; top: 0px; height: 100%; width: 360px; border-radius: 0px; padding: 0px 10px; transition: all 0.2s ease 0s; z-index: 1020; position: fixed !important; left: auto !important; transform: unset !important; }
.fixed-plugin .badge { border: 1px solid rgb(255, 255, 255); border-radius: 50%; cursor: pointer; display: inline-block; height: 23px; margin-right: 5px; position: relative; width: 23px; transition: all 0.2s ease-in-out 0s; }
.fixed-plugin .badge:hover, .fixed-plugin .badge.active { border-color: rgb(52, 71, 103); }
.fixed-plugin .btn.bg-gradient-primary:not(:disabled):not(.disabled) { border: 1px solid transparent; }
.fixed-plugin .btn.bg-gradient-primary:not(:disabled):not(.disabled):not(.active) { background-color: transparent; background-image: none; border: 1px solid rgb(203, 12, 159); color: rgb(203, 12, 159); }
.fixed-plugin.show .card { right: 0px; }
.input-group { border-radius: 0.5rem; }
.input-group, .input-group .input-group-text { transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s; }
.input-group > :not(:first-child):not(.dropdown-menu) { margin-left: 0px; }
.input-group .form-control:focus { border-left: 1px solid rgb(226, 147, 211) !important; border-right: 1px solid rgb(226, 147, 211) !important; }
.input-group .form-control:not(:first-child) { border-left: 0px; padding-left: 0px; }
.input-group .form-control:not(:last-child) { border-right: 0px; padding-right: 0px; }
.input-group .form-control + .input-group-text { border-left: 0px; border-right: 1px solid rgb(210, 214, 218); }
.input-group .input-group-text { border-right: 0px; }
.form-group { margin-bottom: 1rem; }
.form-check:not(.form-switch) .form-check-input[type="checkbox"], .form-check:not(.form-switch) .form-check-input[type="radio"] { border: 1px solid rgb(203, 211, 218); margin-top: 0.25rem; position: relative; }
.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked, .form-check:not(.form-switch) .form-check-input[type="radio"]:checked { border: 0px; }
.form-check:not(.form-switch) .form-check-input[type="checkbox"]::after { transition: opacity 0.25s ease-in-out 0s; font-family: FontAwesome; content: ""; width: 100%; height: 100%; color: rgb(255, 255, 255); position: absolute; display: flex; justify-content: center; align-items: center; font-size: 0.67rem; opacity: 0; }
.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked::after { opacity: 1; }
.form-check:not(.form-switch) .form-check-input[type="radio"] { transition: border 0s ease 0s; }
.form-check:not(.form-switch) .form-check-input[type="radio"]::after { transition: opacity 0.25s ease-in-out 0s; content: ""; position: absolute; width: 0.4375rem; height: 0.4375rem; border-radius: 50%; background-color: rgb(255, 255, 255); opacity: 0; }
.form-check:not(.form-switch) .form-check-input[type="radio"]:checked { padding: 6px; }
.form-check:not(.form-switch) .form-check-input[type="radio"]:checked::after { opacity: 1; }
.form-check-label, .form-check-input[type="checkbox"] { cursor: pointer; }
.form-check-label { font-size: 0.875rem; font-weight: 400; }
.form-check-input { appearance: none; }
.form-switch .form-check-input { border: 1px solid rgb(233, 236, 239); position: relative; background-color: rgba(58, 65, 111, 0.1); height: 1.25em; }
.form-switch .form-check-input::after { transition: transform 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s; content: ""; width: 1rem; height: 1rem; border-radius: 50%; position: absolute; background-color: rgb(255, 255, 255); transform: translateX(1px); box-shadow: rgba(20, 20, 20, 0.12) 0px 0.25rem 0.375rem -0.0625rem, rgba(20, 20, 20, 0.07) 0px 0.125rem 0.25rem -0.0625rem; top: 1px; }
.form-switch .form-check-input:checked::after { transform: translateX(21px); }
.form-switch .form-check-input:checked { border-color: rgba(58, 65, 111, 0.95); background-color: rgba(58, 65, 111, 0.95); }
.form-select { transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s; }
label, .form-label { font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem; color: rgb(52, 71, 103); margin-left: 0.25rem; }
.form-control.is-invalid:focus { box-shadow: rgba(253, 92, 112, 0.6) 0px 0px 0px 2px; }
.form-control.is-valid:focus { box-shadow: rgba(102, 212, 50, 0.65) 0px 0px 0px 2px; }
.footer .nav-link { color: rgb(52, 71, 103); font-weight: 400; font-size: 0.875rem; padding-top: 0px; padding-bottom: 0.25rem; }
.footer .nav-link:hover { opacity: 1 !important; }
.bg-gradient-primary { background-image: linear-gradient(310deg, rgb(121, 40, 202) 0%, rgb(255, 0, 128) 100%); }
.bg-gradient-secondary { background-image: linear-gradient(310deg, rgb(98, 117, 148) 0%, rgb(168, 184, 216) 100%); }
.bg-gradient-success { background-image: linear-gradient(310deg, rgb(23, 173, 55) 0%, rgb(152, 236, 45) 100%); }
.bg-gradient-info { background-image: linear-gradient(310deg, rgb(33, 82, 255) 0%, rgb(33, 212, 253) 100%); }
.bg-gradient-warning { background-image: linear-gradient(310deg, rgb(245, 57, 57) 0%, rgb(251, 207, 51) 100%); }
.bg-gradient-danger { background-image: linear-gradient(310deg, rgb(234, 6, 6) 0%, rgb(255, 102, 124) 100%); }
.bg-gradient-light { background-image: linear-gradient(310deg, rgb(206, 212, 218) 0%, rgb(235, 239, 244) 100%); }
.bg-gradient-dark { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(58, 65, 111) 100%); }
.bg-gradient-faded-primary { background-image: radial-gradient(370px at 80% 50%, rgba(203, 12, 159, 0.6) 0px, rgb(155, 9, 121) 100%); }
.bg-gradient-faded-secondary { background-image: radial-gradient(370px at 80% 50%, rgba(131, 146, 171, 0.6) 0px, rgb(101, 119, 150) 100%); }
.bg-gradient-faded-success { background-image: radial-gradient(370px at 80% 50%, rgba(130, 214, 22, 0.6) 0px, rgb(102, 168, 17) 100%); }
.bg-gradient-faded-info { background-image: radial-gradient(370px at 80% 50%, rgba(23, 193, 232, 0.6) 0px, rgb(18, 154, 186) 100%); }
.bg-gradient-faded-warning { background-image: radial-gradient(370px at 80% 50%, rgba(251, 207, 51, 0.6) 0px, rgb(246, 193, 5) 100%); }
.bg-gradient-faded-danger { background-image: radial-gradient(370px at 80% 50%, rgba(234, 6, 6, 0.6) 0px, rgb(184, 5, 5) 100%); }
.bg-gradient-faded-light { background-image: radial-gradient(370px at 80% 50%, rgba(233, 236, 239, 0.6) 0px, rgb(203, 211, 218) 100%); }
.bg-gradient-faded-dark { background-image: radial-gradient(370px at 80% 50%, rgba(52, 71, 103, 0.6) 0px, rgb(35, 48, 69) 100%); }
.bg-gradient-faded-white { background-image: radial-gradient(370px at 80% 50%, rgba(255, 255, 255, 0.6) 0px, rgb(230, 230, 230) 100%); }
.bg-gradient-faded-primary-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(203, 12, 159, 0.3) 0px, rgb(203, 12, 159) 100%); }
.bg-gradient-faded-secondary-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(131, 146, 171, 0.3) 0px, rgb(131, 146, 171) 100%); }
.bg-gradient-faded-success-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(130, 214, 22, 0.3) 0px, rgb(130, 214, 22) 100%); }
.bg-gradient-faded-info-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(23, 193, 232, 0.3) 0px, rgb(23, 193, 232) 100%); }
.bg-gradient-faded-warning-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(251, 207, 51, 0.3) 0px, rgb(251, 207, 51) 100%); }
.bg-gradient-faded-danger-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(234, 6, 6, 0.3) 0px, rgb(234, 6, 6) 100%); }
.bg-gradient-faded-light-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(233, 236, 239, 0.3) 0px, rgb(233, 236, 239) 100%); }
.bg-gradient-faded-dark-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(52, 71, 103, 0.3) 0px, rgb(52, 71, 103) 100%); }
.bg-gradient-faded-white-vertical { background-image: radial-gradient(200px at 50% 70%, rgba(255, 255, 255, 0.3) 0px, rgb(255, 255, 255) 100%); }
.icon-shape { width: 48px; height: 48px; background-position: center center; border-radius: 0.75rem; }
.icon-shape i { color: rgb(255, 255, 255); opacity: 0.8; top: 11px; position: relative; }
.icon-shape .ni { top: 14px; }
.icon-xxs { width: 20px; height: 20px; }
.icon-xxs i { top: -4px; font-size: 0.5rem; }
.icon-xs { width: 24px; height: 24px; }
.icon-xs i { top: -4px; font-size: 0.5rem; }
.icon-sm { width: 32px; height: 32px; }
.icon-sm i { top: 2px; font-size: 0.65rem; }
.icon-md { width: 48px; height: 48px; }
.icon-md i { top: 22%; font-size: 0.875rem; }
.icon-md.icon-striped { background-position: 85px 85px; }
.icon-md.icon-striped i { top: 11%; margin-left: -10px; font-size: 0.875rem; }
.icon-lg { width: 64px; height: 64px; }
.icon-lg i { top: 31%; font-size: 1.25rem; }
.icon-lg.icon-striped { background-position: 111px 111px; }
.icon-lg.icon-striped i { top: 21%; margin-left: -15px; }
.icon-xl { width: 100px; height: 100px; border-radius: 0.75rem; }
.icon-xl i { top: 37%; font-size: 1.6rem; }
.icon-xl.icon-striped { background-position: 80px 80px; }
.icon-xl.icon-striped i { top: 30%; margin-left: -15px; }
.info-horizontal { text-align: left !important; }
.info-horizontal .icon { float: left; }
.info-horizontal .description { overflow: hidden; }
svg.text-primary .color-foreground { fill: rgb(121, 40, 202); }
svg.text-primary .color-background { fill: rgb(255, 0, 128); }
svg.text-secondary .color-foreground { fill: rgb(98, 117, 148); }
svg.text-secondary .color-background { fill: rgb(168, 184, 216); }
svg.text-info .color-foreground { fill: rgb(33, 82, 255); }
svg.text-info .color-background { fill: rgb(33, 212, 253); }
svg.text-warning .color-foreground { fill: rgb(245, 57, 57); }
svg.text-warning .color-background { fill: rgb(251, 207, 51); }
svg.text-danger .color-foreground { fill: rgb(234, 6, 6); }
svg.text-danger .color-background { fill: rgb(255, 102, 124); }
svg.text-success .color-foreground { fill: rgb(23, 173, 55); }
svg.text-success .color-background { fill: rgb(152, 236, 45); }
svg.text-dark .color-foreground { fill: rgb(20, 23, 39); }
svg.text-dark .color-background { fill: rgb(58, 65, 111); }
.blur { box-shadow: rgba(254, 254, 254, 0.82) 0px 0px 2px inset; backdrop-filter: saturate(200%) blur(30px); background-color: rgba(255, 255, 255, 0.8) !important; }
.blur.saturation-less { backdrop-filter: saturate(20%) blur(30px); }
.blur.blur-rounded { border-radius: 40px; }
.blur.blur-light { background-color: rgba(255, 255, 255, 0.4); }
.blur.blur-dark { background-color: rgba(0, 0, 0, 0.3); }
.shadow-blur { box-shadow: rgba(254, 254, 254, 0.9) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.05) 0px 20px 27px 0px !important; }
.shadow-card { box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px !important; }
.navbar-blur { backdrop-filter: saturate(200%) blur(30px); background-color: rgba(255, 255, 255, 0.58) !important; }
.blur-section { backdrop-filter: saturate(200%) blur(30px); }
.blur-section.blur-gradient-primary { background-image: linear-gradient(310deg, rgba(121, 40, 202, 0.95) 0%, rgba(255, 0, 128, 0.95) 100%); }
.move-on-hover { transition: all 0.2s ease-out 0s; overflow: hidden; transform-origin: 50% 0px; transform: perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px); backface-visibility: hidden; will-change: transform, box-shadow; }
.move-on-hover:hover { transform: perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px); }
.gradient-animation { background-image: linear-gradient(-45deg, rgb(33, 82, 255), rgb(234, 6, 6), rgb(251, 207, 51), rgb(121, 40, 202), rgb(52, 71, 103)); background-position: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: initial; animation: 10s ease 0s infinite normal none running gradient; background-size: 400% 400% !important; }
hr.vertical { position: absolute; background-color: transparent; height: 100%; right: 0px; top: 0px; width: 1px; }
hr.vertical.light { background-image: linear-gradient(rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0)); }
hr.vertical.dark { background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); }
hr.vertical.gray-light { background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)); }
hr.horizontal { background-color: transparent; }
hr.horizontal.light { background-image: linear-gradient(to right, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0)); }
hr.horizontal.dark { background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); }
hr.horizontal.gray-light { background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)); }
.lock-size { width: 1.7rem; height: 1.7rem; }
.border-radius-xs { border-radius: 0.125rem; }
.border-radius-sm { border-radius: 0.25rem; }
.border-radius-md { border-radius: 0.5rem; }
.border-radius-lg { border-radius: 0.75rem; }
.border-radius-xl { border-radius: 1rem; }
.border-radius-2xl { border-radius: 1.5rem; }
.border-radius-section { border-radius: 10rem; }
.border-bottom-end-radius-0 { border-bottom-right-radius: 0px; }
.border-top-end-radius-0 { border-top-right-radius: 0px; }
.border-bottom-start-radius-0 { border-bottom-left-radius: 0px; }
.border-top-start-radius-0 { border-top-left-radius: 0px; }
.border-dashed { border-style: dashed; }
.z-index-sticky { z-index: 1020; }
.waves { position: relative; width: 100%; height: 16vh; margin-bottom: -7px; min-height: 100px; max-height: 150px; }
.waves.waves-sm { height: 50px; min-height: 50px; }
.waves.no-animation .moving-waves > use { animation: auto ease 0s 1 normal none running none; }
.wave-rotate { transform: rotate(180deg); }
.moving-waves > use { animation: 40s cubic-bezier(0.55, 0.5, 0.45, 0.5) 0s infinite normal none running move-forever; }
.moving-waves > use:nth-child(1) { animation-delay: -2s; animation-duration: 11s; }
.moving-waves > use:nth-child(2) { animation-delay: -4s; animation-duration: 13s; }
.moving-waves > use:nth-child(3) { animation-delay: -3s; animation-duration: 15s; }
.moving-waves > use:nth-child(4) { animation-delay: -4s; animation-duration: 20s; }
.moving-waves > use:nth-child(5) { animation-delay: -4s; animation-duration: 25s; }
.moving-waves > use:nth-child(6) { animation-delay: -3s; animation-duration: 30s; }
@keyframes move-forever { 
  0% { transform: translate3d(-90px, 0px, 0px); }
  100% { transform: translate3d(85px, 0px, 0px); }
}
@media (max-width: 767.98px) {
  .waves { height: 40px; min-height: 40px; }
  hr.horizontal { background-color: transparent; }
  hr.horizontal:not(.dark) { background-image: linear-gradient(to right, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0)); }
  hr.horizontal.vertical { transform: rotate(90deg); }
  hr.horizontal.dark { background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); }
}
.overflow-visible { overflow: visible !important; }
.popover .popover-header { font-weight: 600; }
.bg-cover { background-size: cover; }
.mask { position: absolute; background-size: cover; background-position: center center; top: 0px; left: 0px; width: 100%; height: 100%; opacity: 0.8; }
.cursor-pointer { cursor: pointer; }
.transform-translate-50 { transform: translate(0px, -50%); }
@media (min-width: 992px) {
  .virtual-reality .sidenav { margin-top: 1.5rem; animation-name: fadeInBottom; animation-fill-mode: both; animation-duration: 1.5s; transform: scale(0.6); background: rgb(255, 255, 255); position: absolute; left: 18% !important; }
}
.navbar { box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 12px 0px; }
.navbar .navbar-brand { color: rgb(52, 71, 103); font-size: 0.875rem; }
.navbar .nav-link { color: rgb(52, 71, 103); padding: 0.5rem 1rem; font-weight: 400; font-size: 0.875rem; }
.navbar.navbar-absolute { position: absolute; width: 100%; z-index: 1; }
.navbar.navbar-transparent .nav-link, .navbar.navbar-transparent .nav-link i { color: rgb(255, 255, 255); }
.navbar.navbar-transparent .nav-link:hover, .navbar.navbar-transparent .nav-link:focus { color: rgba(255, 255, 255, 0.75); }
.navbar.navbar-transparent .navbar-toggler .navbar-toggler-icon .navbar-toggler-bar { background: rgb(255, 255, 255); }
.navbar.navbar-transparent .navbar-collapse { border-radius: 1rem; }
.navbar.navbar-dark .navbar-collapse.show .dropdown-header.text-dark, .navbar.navbar-dark .navbar-collapse.collapsing .dropdown-header.text-dark { color: rgb(255, 255, 255) !important; }
.navbar .sidenav-toggler-inner { width: 18px; }
.navbar .sidenav-toggler-inner .sidenav-toggler-line { transition: all 0.15s ease 0s; background: rgb(103, 116, 142); border-radius: 0.125rem; position: relative; display: block; height: 2px; }
.navbar .sidenav-toggler-inner .sidenav-toggler-line:not(:last-child) { margin-bottom: 3px; }
.g-sidenav-show.g-sidenav-pinned .navbar .sidenav-toggler-inner .sidenav-toggler-line:first-child, .g-sidenav-show.g-sidenav-pinned .navbar .sidenav-toggler-inner .sidenav-toggler-line:last-child { width: 13px; transform: translateX(5px); }
.navbar-light { background-color: rgb(255, 255, 255) !important; }
.navbar-light .navbar-toggler { border: none; }
.navbar-light .navbar-toggler:focus { box-shadow: none; }
.navbar-toggler .navbar-toggler-icon { background-image: none; }
.navbar-toggler .navbar-toggler-icon .navbar-toggler-bar { display: block; position: relative; width: 22px; height: 1px; border-radius: 1px; background: rgb(108, 117, 125); transition: all 0.2s ease 0s; margin: 0px auto; }
.navbar-toggler .navbar-toggler-icon .navbar-toggler-bar.bar2, .navbar-toggler .navbar-toggler-icon .navbar-toggler-bar.bar3 { margin-top: 7px; }
.navbar-toggler[aria-expanded="true"] .navbar-toggler-bar.bar1 { transform: rotate(45deg); transform-origin: 10% 10%; margin-top: 4px; }
.navbar-toggler[aria-expanded="true"] .navbar-toggler-bar.bar2 { opacity: 0; }
.navbar-toggler[aria-expanded="true"] .navbar-toggler-bar.bar3 { transform: rotate(-45deg); transform-origin: 10% 90%; margin-top: 3px; }
@media (max-width: 991.98px) {
  .navbar.navbar-transparent .navbar-collapse { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .navbar.navbar-transparent .navbar-collapse.collapsing { background: rgb(255, 255, 255); }
  .navbar.navbar-transparent .navbar-collapse.show { background: rgb(255, 255, 255); }
  .navbar.navbar-transparent .navbar-collapse.show .nav-link, .navbar.navbar-transparent .navbar-collapse.show i { color: rgb(52, 71, 103); }
  .g-sidenav-show .navbar:not(.sidenav).navbar-main .navbar-collapse { display: flex !important; flex-basis: auto; }
  .g-sidenav-show .navbar:not(.sidenav).navbar-main .navbar-nav { flex-direction: row; }
}
@media (max-width: 767.98px) {
  .navbar-collapse { position: relative; }
  .navbar-collapse .navbar-nav { width: 100%; }
  .navbar-collapse .navbar-nav .nav-item.dropdown { position: static; }
  .navbar-collapse .navbar-nav .nav-item.dropdown .dropdown-menu { left: 0px; right: 0px; }
  .navbar-collapse .navbar-nav .nav-item.dropdown .dropdown-menu.show::before { content: none; }
}
@media (max-width: 575.98px) {
  .navbar-nav .nav-item.dropdown .dropdown-menu { left: 0px; right: auto; }
}
.navbar-vertical .navbar-brand > img, .navbar-vertical .navbar-brand-img { max-width: 100%; max-height: 2rem; }
.navbar-vertical .navbar-nav .nav-link { padding-left: 1rem; padding-right: 1rem; font-weight: 500; color: rgb(103, 116, 142); }
.navbar-vertical .navbar-nav .nav-link > i { min-width: 1.8rem; font-size: 0.9375rem; line-height: 1.5rem; }
.navbar-vertical .navbar-nav .nav-link .dropdown-menu { border: none; }
.navbar-vertical .navbar-nav .nav-link .dropdown-menu .dropdown-menu { margin-left: 0.5rem; }
.navbar-vertical .navbar-nav .nav-sm .nav-link { font-size: 0.8125rem; }
.navbar-vertical .navbar-nav .nav-link { display: flex; align-items: center; white-space: nowrap; }
.navbar-vertical .navbar-heading { padding-top: 0.5rem; padding-bottom: 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; }
.navbar-vertical.navbar-expand-xs { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
.navbar-vertical.navbar-expand-xs .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
.navbar-vertical.navbar-expand-xs > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
@media (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-xs > [class*="container"] { height: 100%; }
}
.navbar-vertical.navbar-expand-xs.fixed-start { left: 0px; }
.navbar-vertical.navbar-expand-xs.fixed-end { right: 0px; }
.navbar-vertical.navbar-expand-xs .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
.navbar-vertical.navbar-expand-xs .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link i { pointer-events: none; }
.navbar-vertical.navbar-expand-xs .navbar-nav .nav-item { width: 100%; }
.navbar-vertical.navbar-expand-xs .navbar-nav > .nav-item { margin-top: 0.125rem; }
.navbar-vertical.navbar-expand-xs .navbar-nav > .nav-item .icon .ni { top: 0px; }
.navbar-vertical.navbar-expand-xs .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
.navbar-vertical.navbar-expand-xs .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
.navbar-vertical.navbar-expand-xs .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
@media (min-width: 576px) {
  .navbar-vertical.navbar-expand-sm { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
  .navbar-vertical.navbar-expand-sm .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
  .navbar-vertical.navbar-expand-sm > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
}
@media (min-width: 576px) and (-ms-high-contrast: none), (min-width: 576px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-sm > [class*="container"] { height: 100%; }
}
@media (min-width: 576px) {
  .navbar-vertical.navbar-expand-sm.fixed-start { left: 0px; }
  .navbar-vertical.navbar-expand-sm.fixed-end { right: 0px; }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link i { pointer-events: none; }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav-item { width: 100%; }
  .navbar-vertical.navbar-expand-sm .navbar-nav > .nav-item { margin-top: 0.125rem; }
  .navbar-vertical.navbar-expand-sm .navbar-nav > .nav-item .icon .ni { top: 0px; }
  .navbar-vertical.navbar-expand-sm .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
  .navbar-vertical.navbar-expand-sm .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
  .navbar-vertical.navbar-expand-sm .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
  .navbar-vertical.navbar-expand-md .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
  .navbar-vertical.navbar-expand-md > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
}
@media (min-width: 768px) and (-ms-high-contrast: none), (min-width: 768px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-md > [class*="container"] { height: 100%; }
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md.fixed-start { left: 0px; }
  .navbar-vertical.navbar-expand-md.fixed-end { right: 0px; }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-md .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-md .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-md .navbar-nav .nav-link i { pointer-events: none; }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav-item { width: 100%; }
  .navbar-vertical.navbar-expand-md .navbar-nav > .nav-item { margin-top: 0.125rem; }
  .navbar-vertical.navbar-expand-md .navbar-nav > .nav-item .icon .ni { top: 0px; }
  .navbar-vertical.navbar-expand-md .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
  .navbar-vertical.navbar-expand-md .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
  .navbar-vertical.navbar-expand-md .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
}
@media (min-width: 992px) {
  .navbar-vertical.navbar-expand-lg { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
  .navbar-vertical.navbar-expand-lg .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
  .navbar-vertical.navbar-expand-lg > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
}
@media (min-width: 992px) and (-ms-high-contrast: none), (min-width: 992px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-lg > [class*="container"] { height: 100%; }
}
@media (min-width: 992px) {
  .navbar-vertical.navbar-expand-lg.fixed-start { left: 0px; }
  .navbar-vertical.navbar-expand-lg.fixed-end { right: 0px; }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link i { pointer-events: none; }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav-item { width: 100%; }
  .navbar-vertical.navbar-expand-lg .navbar-nav > .nav-item { margin-top: 0.125rem; }
  .navbar-vertical.navbar-expand-lg .navbar-nav > .nav-item .icon .ni { top: 0px; }
  .navbar-vertical.navbar-expand-lg .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
  .navbar-vertical.navbar-expand-lg .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
  .navbar-vertical.navbar-expand-lg .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
}
@media (min-width: 1200px) {
  .navbar-vertical.navbar-expand-xl { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
  .navbar-vertical.navbar-expand-xl .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
  .navbar-vertical.navbar-expand-xl > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
}
@media (min-width: 1200px) and (-ms-high-contrast: none), (min-width: 1200px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-xl > [class*="container"] { height: 100%; }
}
@media (min-width: 1200px) {
  .navbar-vertical.navbar-expand-xl.fixed-start { left: 0px; }
  .navbar-vertical.navbar-expand-xl.fixed-end { right: 0px; }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link i { pointer-events: none; }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav-item { width: 100%; }
  .navbar-vertical.navbar-expand-xl .navbar-nav > .nav-item { margin-top: 0.125rem; }
  .navbar-vertical.navbar-expand-xl .navbar-nav > .nav-item .icon .ni { top: 0px; }
  .navbar-vertical.navbar-expand-xl .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
  .navbar-vertical.navbar-expand-xl .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
  .navbar-vertical.navbar-expand-xl .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
}
@media (min-width: 1400px) {
  .navbar-vertical.navbar-expand-xxl { display: block; position: fixed; top: 0px; bottom: 0px; width: 100%; overflow-y: auto; padding: 0px; box-shadow: none; max-width: 15.625rem !important; }
  .navbar-vertical.navbar-expand-xxl .navbar-collapse { display: block; overflow: auto; height: calc(-360px + 100vh); }
  .navbar-vertical.navbar-expand-xxl > [class*="container"] { flex-direction: column; align-items: stretch; min-height: 100%; padding-left: 0px; padding-right: 0px; }
}
@media (min-width: 1400px) and (-ms-high-contrast: none), (min-width: 1400px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-xxl > [class*="container"] { height: 100%; }
}
@media (min-width: 1400px) {
  .navbar-vertical.navbar-expand-xxl.fixed-start { left: 0px; }
  .navbar-vertical.navbar-expand-xxl.fixed-end { right: 0px; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-link { padding-top: 0.675rem; padding-bottom: 0.675rem; margin: 0px 1rem; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-link .nav-link-text, .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-link .sidenav-mini-icon, .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-link .sidenav-normal, .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-link i { pointer-events: none; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav .nav-item { width: 100%; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav > .nav-item { margin-top: 0.125rem; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav > .nav-item .icon .ni { top: 0px; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav > .nav-item > .nav-link .icon svg .color-background { fill: rgb(58, 65, 111); }
  .navbar-vertical.navbar-expand-xxl .navbar-nav > .nav-item > .nav-link .icon svg .color-foreground { fill: rgb(20, 23, 39); }
  .navbar-vertical.navbar-expand-xxl .lavalamp-object { margin-right: 0.5rem; margin-left: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 0.25rem; width: calc(100% - 1rem) !important; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav .nav .nav-link { padding-top: 0.45rem; padding-bottom: 0.45rem; padding-left: 15px; }
  .navbar-vertical.navbar-expand-xxl .navbar-nav .nav .nav-link > span.sidenav-normal { transition: all 0.1s ease 0s; }
}
.sidenav[data-color="primary"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(203, 12, 159) 0%, rgb(203, 12, 159) 100%); }
.sidenav[data-color="secondary"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(131, 146, 171) 0%, rgb(131, 146, 171) 100%); }
.sidenav[data-color="success"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(130, 214, 22) 0%, rgb(130, 214, 22) 100%); }
.sidenav[data-color="info"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(23, 193, 232) 0%, rgb(23, 193, 232) 100%); }
.sidenav[data-color="warning"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(251, 207, 51) 0%, rgb(251, 207, 51) 100%); }
.sidenav[data-color="danger"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(234, 6, 6) 0%, rgb(234, 6, 6) 100%); }
.sidenav[data-color="light"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(233, 236, 239) 0%, rgb(233, 236, 239) 100%); }
.sidenav[data-color="dark"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(52, 71, 103) 0%, rgb(52, 71, 103) 100%); }
.sidenav[data-color="white"] .navbar-nav > .nav-item > .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%); }
.main-content, .sidenav { transition: all 0.2s ease-in-out 0s; }
.sidenav { z-index: 990; }
.sidenav .navbar-brand, .sidenav .navbar-heading { display: block; }
@media (min-width: 1200px) {
  .sidenav:hover { max-width: 15.625rem; }
  .sidenav .sidenav-toggler { padding: 1.5rem; }
  .sidenav.fixed-start + .main-content { margin-left: 17.125rem; }
  .sidenav.fixed-end + .main-content { margin-right: 17.125rem; }
}
.sidenav .navbar-heading .docs-mini { padding-left: 3px; }
.sidenav .navbar-heading { transition: all 0.1s ease 0s; }
.sidenav .navbar-brand { padding: 1.5rem 2rem; }
.sidenav-header { height: 4.875rem; }
.sidenav-footer .card.card-background::after { opacity: 0.65; }
.g-sidenav-show .sidenav .nav-item .collapse { height: auto; transition: all 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .g-sidenav-show .sidenav .nav-item .collapse { transition: none 0s ease 0s; }
}
.g-sidenav-show .sidenav .nav-link-text { transition: all 0.3s ease 0s; opacity: 1; }
@media (max-width: 1199.98px) {
  .g-sidenav-show.rtl .sidenav { transform: translateX(17.125rem); }
  .g-sidenav-show:not(.rtl) .sidenav { transform: translateX(-17.125rem); }
  .g-sidenav-show .sidenav.fixed-start + .main-content { margin-left: 0px !important; }
  .g-sidenav-show.g-sidenav-pinned .sidenav { transform: translateX(0px); }
}
.navbar-vertical.bg-white { box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px; }
.navbar-vertical.bg-white .navbar-nav .nav-link.active { box-shadow: none; }
.navbar-vertical.bg-white .navbar-nav .nav-link .icon { background-image: linear-gradient(310deg, rgb(233, 236, 239) 0%, rgb(233, 236, 239) 100%); }
.navbar-vertical .navbar-nav .nav-link.active { font-weight: 600; box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px; border-radius: 0.5rem; }
.navbar-vertical .navbar-nav > .nav-item .nav-link.active { color: rgb(52, 71, 103); background-color: rgb(255, 255, 255); }
.navbar-vertical .navbar-nav > .nav-item .nav-link.active .icon { background-image: linear-gradient(310deg, rgb(203, 12, 159) 0%, rgb(203, 12, 159) 100%); }
.navbar-vertical .navbar-nav > .nav-item .nav-link.active .icon svg .color-background, .navbar-vertical .navbar-nav > .nav-item .nav-link.active .icon svg .color-foreground { fill: rgb(255, 255, 255); }
.navbar-main { transition: box-shadow 0.25s ease-in 0s, background-color 0.25s ease-in 0s; }
.navbar-main.fixed-top { width: calc(100% - 20.125rem); }
.navbar-main.fixed-top + [class*="container"] { margin-top: 7.1875rem !important; }
.navbar-vertical .navbar-nav .nav-link[data-bs-toggle="collapse"]::after { display: inline-block; font-style: normal; font-variant: normal; text-rendering: auto; -webkit-font-smoothing: antialiased; font-family: "Font Awesome 5 Free"; font-weight: 700; content: ""; margin-left: auto; color: rgba(58, 65, 111, 0.5); transition: all 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .navbar-vertical .navbar-nav .nav-link[data-bs-toggle="collapse"]::after { transition: none 0s ease 0s; }
}
.navbar-vertical .navbar-nav .nav-link[data-bs-toggle="collapse"][aria-expanded="true"]::after { color: rgb(58, 65, 111); transform: rotate(180deg); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav, .navbar-vertical .navbar-nav .nav-item .collapsing .nav { transition: all 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .navbar-vertical .navbar-nav .nav-item .collapse .nav, .navbar-vertical .navbar-nav .nav-item .collapsing .nav { transition: none 0s ease 0s; }
}
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item .nav-link, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item .nav-link { position: relative; background-color: transparent; box-shadow: none; color: rgba(58, 65, 111, 0.5); margin-left: 1.35rem; }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item .nav-link::before, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item .nav-link::before { content: ""; position: absolute; left: -18px; top: 50%; transform: translate(0px, -50%); height: 5px; width: 5px; border-radius: 1.5rem; background: rgba(58, 65, 111, 0.5); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item .nav-link.active, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item .nav-link.active { color: rgb(58, 65, 111); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item .nav-link.active::before, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item .nav-link.active::before { height: 8px; width: 8px; background: rgb(58, 65, 111); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item.active .nav-link, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item.active .nav-link { color: rgb(58, 65, 111); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item.active .nav-link::before, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item.active .nav-link::before { height: 8px; width: 8px; background: rgb(58, 65, 111); }
.navbar-vertical .navbar-nav .nav-item .collapse .nav .nav-item .nav-item .nav-link::before, .navbar-vertical .navbar-nav .nav-item .collapsing .nav .nav-item .nav-item .nav-link::before { content: none; }
.navbar-vertical.blur .navbar-nav > .nav-item .nav-link { background-color: transparent; box-shadow: none; }
.navbar-vertical .navbar-brand .navbar-brand-img, .navbar-vertical .navbar-brand span { transition: all 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .navbar-vertical .navbar-brand .navbar-brand-img, .navbar-vertical .navbar-brand span { transition: none 0s ease 0s; }
}
.navbar-vertical .nav-item .nav-link span.sidenav-mini-icon { transition: all 0.2s ease-in-out 0s; text-align: center; width: 0px; }
@media (prefers-reduced-motion: reduce) {
  .navbar-vertical .nav-item .nav-link span.sidenav-mini-icon { transition: none 0s ease 0s; }
}
.navbar-vertical .docs-info { transition: all 0.2s ease-in-out 0s; }
@media (prefers-reduced-motion: reduce) {
  .navbar-vertical .docs-info { transition: none 0s ease 0s; }
}
.g-sidenav-show:not(.g-sidenav-hidden) .navbar-vertical .nav-item .nav-link span.sidenav-mini-icon { opacity: 0; }
@media (min-width: 1200px) {
  .navbar-vertical .navbar-nav .nav-item .nav-link .icon { padding: 10px; }
  .g-sidenav-hidden.rtl .main-content { margin-right: 6rem !important; }
  .g-sidenav-hidden.rtl .main-content .navbar-vertical:hover { max-width: 15.625rem !important; }
  .g-sidenav-hidden.rtl .sidenav:hover + .main-content { margin-right: 17.125rem !important; }
  .g-sidenav-hidden .navbar-vertical { max-width: 6rem !important; }
  .g-sidenav-hidden .navbar-vertical.fixed-start + .main-content { margin-left: 7.5rem; }
  .g-sidenav-hidden .navbar-vertical .navbar-brand img { width: auto !important; }
  .g-sidenav-hidden .navbar-vertical .navbar-brand span { opacity: 0; }
  .g-sidenav-hidden .navbar-vertical .nav-item .nav-link .icon { padding: 10px; }
  .g-sidenav-hidden .navbar-vertical .nav-item .nav-link .nav-link-text, .g-sidenav-hidden .navbar-vertical .nav-item .nav-link .sidenav-normal { opacity: 0; width: 0px; }
  .g-sidenav-hidden .navbar-vertical .nav-item .nav-link .sidenav-mini-icon { min-width: 1.8rem; margin-left: 0.15rem; opacity: 1; }
  .g-sidenav-hidden .navbar-vertical .nav-item .nav-link[data-bs-toggle="collapse"]::after { content: ""; }
  .g-sidenav-hidden .navbar-vertical .nav-item .collapse .nav { margin-left: 0px !important; padding-left: 0px !important; }
  .g-sidenav-hidden .navbar-vertical .nav-item .collapse .nav .nav-item .nav-link { margin-left: 1rem; }
  .g-sidenav-hidden .navbar-vertical .nav-item .collapse .nav .nav-item .nav-link::before { content: none; }
  .g-sidenav-hidden .navbar-vertical .nav-item .collapse .nav .nav-item .nav-link[data-bs-toggle="collapse"]::after { content: ""; }
  .g-sidenav-hidden .navbar-vertical .card.card-background .icon-shape { margin-bottom: 0px !important; }
  .g-sidenav-hidden .navbar-vertical .card.card-background .docs-info { opacity: 0; width: 0px; height: 0px; }
  .g-sidenav-hidden .navbar-vertical:hover { max-width: 15.625rem !important; }
  .g-sidenav-hidden .navbar-vertical:hover.fixed-start + .main-content { margin-left: 17.125rem; }
  .g-sidenav-hidden .navbar-vertical:hover .navbar-brand span { opacity: 1; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .nav-link .nav-link-text, .g-sidenav-hidden .navbar-vertical:hover .nav-item .nav-link .sidenav-normal { opacity: 1; width: auto; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .nav-link .sidenav-mini-icon { opacity: 0; width: 0px; min-width: 0px; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .nav-link[data-bs-toggle="collapse"]::after { content: ""; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav { margin-left: 1.5rem !important; padding-left: 1rem !important; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .nav-link { margin-left: 1.35rem; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .nav-link::before { content: ""; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .collapse .nav, .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .collapsing .nav { margin-left: 0px !important; padding-left: 0px !important; }
  .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .collapse .nav .nav-item .nav-link::before, .g-sidenav-hidden .navbar-vertical:hover .nav-item .collapse .nav .nav-item .collapsing .nav .nav-item .nav-link::before { content: none; }
  .g-sidenav-hidden .navbar-vertical:hover .card.card-background .icon-shape { margin-bottom: 1rem !important; }
  .g-sidenav-hidden .navbar-vertical:hover .card.card-background .docs-info { opacity: 1; width: auto; height: auto; }
}
.nav.nav-pills { background: rgb(248, 249, 250); border-radius: 0.75rem; position: relative; }
.nav.nav-pills.nav-pills-vertical { border-radius: 1.1875rem; }
.nav.nav-pills.nav-pills-vertical .nav-link.active { border-radius: 0.875rem; }
.nav.nav-pills .nav-link { z-index: 3; color: rgb(52, 71, 103); border-radius: 0.5rem; background-color: inherit; }
.nav.nav-pills .nav-link.active { animation: 0.2s ease 0s 1 normal none running none; }
.nav.nav-pills .nav-link:hover:not(.active) { color: rgb(52, 71, 103); }
.nav.nav-pills.nav-pills-primary { background: rgb(255, 255, 255); color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-primary .nav-link.active { color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-primary .moving-tab .nav-link.active { background: rgb(121, 40, 202); color: rgb(121, 40, 202); }
.nav.nav-pills.nav-pills-info { background: rgb(255, 255, 255); color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-info .nav-link.active { color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-info .moving-tab .nav-link.active { background: rgb(33, 82, 255); color: rgb(33, 82, 255); }
.nav.nav-pills.nav-pills-success { background: rgb(255, 255, 255); color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-success .nav-link.active { color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-success .moving-tab .nav-link.active { background: rgb(23, 173, 55); color: rgb(23, 173, 55); }
.nav.nav-pills.nav-pills-warning { background: rgb(255, 255, 255); color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-warning .nav-link.active { color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-warning .moving-tab .nav-link.active { background: rgb(245, 57, 57); color: rgb(245, 57, 57); }
.nav.nav-pills.nav-pills-danger { background: rgb(255, 255, 255); color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-danger .nav-link.active { color: rgb(255, 255, 255); }
.nav.nav-pills.nav-pills-danger .moving-tab .nav-link.active { background: rgb(234, 6, 6); color: rgb(234, 6, 6); }
.nav.nav-pills .nav-item { z-index: 3; }
.moving-tab { z-index: 1 !important; }
.moving-tab .nav-link { color: rgb(255, 255, 255); transition: all 0.2s ease 0s; border-radius: 0.5rem; }
.moving-tab .nav-link.active { color: rgb(255, 255, 255); font-weight: 600; box-shadow: rgb(221, 221, 221) 0px 1px 5px 1px; animation: 0.2s ease 0s 1 normal none running none; background: rgb(255, 255, 255); }
.moving-tab .nav-link:hover:not(.active) { color: rgb(52, 71, 103); }
.page-item.active .page-link { box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px -1px, rgba(0, 0, 0, 0.07) 0px 2px 3px -1px; }
.page-item .page-link, .page-item span { display: flex; align-items: center; justify-content: center; color: rgb(131, 146, 171); padding: 0px; margin: 0px 3px; width: 36px; height: 36px; font-size: 0.875rem; border-radius: 50% !important; }
.pagination-lg .page-item .page-link, .pagination-lg .page-item span { width: 46px; height: 46px; line-height: 46px; }
.pagination-sm .page-item .page-link, .pagination-sm .page-item span { width: 30px; height: 30px; line-height: 30px; }
.pagination.pagination-primary .page-item.active > .page-link, .pagination.pagination-primary .page-item.active > .page-link:focus, .pagination.pagination-primary .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(121, 40, 202) 0%, rgb(255, 0, 128) 100%); border: none; }
.pagination.pagination-secondary .page-item.active > .page-link, .pagination.pagination-secondary .page-item.active > .page-link:focus, .pagination.pagination-secondary .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(98, 117, 148) 0%, rgb(168, 184, 216) 100%); border: none; }
.pagination.pagination-success .page-item.active > .page-link, .pagination.pagination-success .page-item.active > .page-link:focus, .pagination.pagination-success .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(23, 173, 55) 0%, rgb(152, 236, 45) 100%); border: none; }
.pagination.pagination-info .page-item.active > .page-link, .pagination.pagination-info .page-item.active > .page-link:focus, .pagination.pagination-info .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(33, 82, 255) 0%, rgb(33, 212, 253) 100%); border: none; }
.pagination.pagination-warning .page-item.active > .page-link, .pagination.pagination-warning .page-item.active > .page-link:focus, .pagination.pagination-warning .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(245, 57, 57) 0%, rgb(251, 207, 51) 100%); border: none; }
.pagination.pagination-danger .page-item.active > .page-link, .pagination.pagination-danger .page-item.active > .page-link:focus, .pagination.pagination-danger .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(234, 6, 6) 0%, rgb(255, 102, 124) 100%); border: none; }
.pagination.pagination-light .page-item.active > .page-link, .pagination.pagination-light .page-item.active > .page-link:focus, .pagination.pagination-light .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(206, 212, 218) 0%, rgb(235, 239, 244) 100%); border: none; }
.pagination.pagination-dark .page-item.active > .page-link, .pagination.pagination-dark .page-item.active > .page-link:focus, .pagination.pagination-dark .page-item.active > .page-link:hover { background-image: linear-gradient(310deg, rgb(20, 23, 39) 0%, rgb(58, 65, 111) 100%); border: none; }
.popover { box-shadow: rgba(0, 0, 0, 0.12) 0px 0.3125rem 0.625rem 0px; }
.popover .popover-header { font-weight: 600; }
.progress-bar { height: 6px; border-radius: 0.25rem; margin-top: -2px; }
.progress { overflow: visible; }
.progress.progress-sm { height: 4px; }
.progress.progress-lg { height: 20px; }
.rtl .breadcrumb .breadcrumb-item + .breadcrumb-item::before { float: right; padding-left: 0.5rem; padding-right: 0px; }
.rtl .sidenav .navbar-nav { width: 100%; padding-right: 0px; }
.rtl .fixed-plugin .fixed-plugin-button { left: 30px; right: auto; }
.rtl .fixed-plugin .card { left: -360px !important; right: auto; }
.rtl .fixed-plugin.show .card { right: auto; left: 0px !important; }
.rtl .timeline .timeline-content { margin-right: 45px; margin-left: 0px; }
.rtl .timeline .timeline-step { transform: translateX(50%); }
.rtl .timeline.timeline-one-side::before { right: 1rem; }
.rtl .timeline.timeline-one-side .timeline-step { right: 1rem; }
.rtl .form-check.form-switch .form-check-input::after { transform: translateX(-1px); }
.rtl .form-check.form-switch .form-check-input:checked::after { transform: translateX(-21px); }
.rtl .avatar-group .avatar + .avatar { margin-left: 0px; margin-right: -1rem; }
.rtl .dropdown .dropdown-menu { left: 0px; }
.rtl .input-group .input-group-text { border-left: 0px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; border-right: 1px solid rgb(210, 214, 218); }
.rtl .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) { margin-right: -1px; border-radius: 0.5rem 0px 0px 0.5rem; border-right: 0px; border-left: 1px solid rgb(210, 214, 218); }
.rtl .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3), .rtl .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; }
.btn.btn-facebook { background-color: rgb(59, 89, 152); color: rgb(255, 255, 255); }
.btn.btn-facebook:focus, .btn.btn-facebook:hover { background-color: rgb(52, 78, 134); color: rgb(255, 255, 255); }
.btn.btn-facebook:active, .btn.btn-facebook:focus, .btn.btn-facebook:active:focus { box-shadow: none; }
.btn.btn-facebook.btn-simple { color: rgb(52, 78, 134); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-facebook.btn-simple:hover, .btn.btn-facebook.btn-simple:focus, .btn.btn-facebook.btn-simple:hover:focus, .btn.btn-facebook.btn-simple:active, .btn.btn-facebook.btn-simple:hover:focus:active { color: rgb(52, 78, 134); background: transparent !important; box-shadow: none !important; }
.btn.btn-facebook.btn-neutral { color: rgb(59, 89, 152); background-color: rgb(255, 255, 255); }
.btn.btn-facebook.btn-neutral:hover, .btn.btn-facebook.btn-neutral:focus, .btn.btn-facebook.btn-neutral:active { color: rgb(52, 78, 134); }
.btn.btn-twitter { background-color: rgb(85, 172, 238); color: rgb(255, 255, 255); }
.btn.btn-twitter:focus, .btn.btn-twitter:hover { background-color: rgb(62, 161, 236); color: rgb(255, 255, 255); }
.btn.btn-twitter:active, .btn.btn-twitter:focus, .btn.btn-twitter:active:focus { box-shadow: none; }
.btn.btn-twitter.btn-simple { color: rgb(62, 161, 236); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-twitter.btn-simple:hover, .btn.btn-twitter.btn-simple:focus, .btn.btn-twitter.btn-simple:hover:focus, .btn.btn-twitter.btn-simple:active, .btn.btn-twitter.btn-simple:hover:focus:active { color: rgb(62, 161, 236); background: transparent !important; box-shadow: none !important; }
.btn.btn-twitter.btn-neutral { color: rgb(85, 172, 238); background-color: rgb(255, 255, 255); }
.btn.btn-twitter.btn-neutral:hover, .btn.btn-twitter.btn-neutral:focus, .btn.btn-twitter.btn-neutral:active { color: rgb(62, 161, 236); }
.btn.btn-pinterest { background-color: rgb(204, 33, 39); color: rgb(255, 255, 255); }
.btn.btn-pinterest:focus, .btn.btn-pinterest:hover { background-color: rgb(178, 29, 34); color: rgb(255, 255, 255); }
.btn.btn-pinterest:active, .btn.btn-pinterest:focus, .btn.btn-pinterest:active:focus { box-shadow: none; }
.btn.btn-pinterest.btn-simple { color: rgb(178, 29, 34); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-pinterest.btn-simple:hover, .btn.btn-pinterest.btn-simple:focus, .btn.btn-pinterest.btn-simple:hover:focus, .btn.btn-pinterest.btn-simple:active, .btn.btn-pinterest.btn-simple:hover:focus:active { color: rgb(178, 29, 34); background: transparent !important; box-shadow: none !important; }
.btn.btn-pinterest.btn-neutral { color: rgb(204, 33, 39); background-color: rgb(255, 255, 255); }
.btn.btn-pinterest.btn-neutral:hover, .btn.btn-pinterest.btn-neutral:focus, .btn.btn-pinterest.btn-neutral:active { color: rgb(178, 29, 34); }
.btn.btn-linkedin { background-color: rgb(0, 119, 181); color: rgb(255, 255, 255); }
.btn.btn-linkedin:focus, .btn.btn-linkedin:hover { background-color: rgb(0, 102, 156); color: rgb(255, 255, 255); }
.btn.btn-linkedin:active, .btn.btn-linkedin:focus, .btn.btn-linkedin:active:focus { box-shadow: none; }
.btn.btn-linkedin.btn-simple { color: rgb(0, 102, 156); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-linkedin.btn-simple:hover, .btn.btn-linkedin.btn-simple:focus, .btn.btn-linkedin.btn-simple:hover:focus, .btn.btn-linkedin.btn-simple:active, .btn.btn-linkedin.btn-simple:hover:focus:active { color: rgb(0, 102, 156); background: transparent !important; box-shadow: none !important; }
.btn.btn-linkedin.btn-neutral { color: rgb(0, 119, 181); background-color: rgb(255, 255, 255); }
.btn.btn-linkedin.btn-neutral:hover, .btn.btn-linkedin.btn-neutral:focus, .btn.btn-linkedin.btn-neutral:active { color: rgb(0, 102, 156); }
.btn.btn-dribbble { background-color: rgb(234, 76, 137); color: rgb(255, 255, 255); }
.btn.btn-dribbble:focus, .btn.btn-dribbble:hover { background-color: rgb(231, 49, 119); color: rgb(255, 255, 255); }
.btn.btn-dribbble:active, .btn.btn-dribbble:focus, .btn.btn-dribbble:active:focus { box-shadow: none; }
.btn.btn-dribbble.btn-simple { color: rgb(231, 49, 119); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-dribbble.btn-simple:hover, .btn.btn-dribbble.btn-simple:focus, .btn.btn-dribbble.btn-simple:hover:focus, .btn.btn-dribbble.btn-simple:active, .btn.btn-dribbble.btn-simple:hover:focus:active { color: rgb(231, 49, 119); background: transparent !important; box-shadow: none !important; }
.btn.btn-dribbble.btn-neutral { color: rgb(234, 76, 137); background-color: rgb(255, 255, 255); }
.btn.btn-dribbble.btn-neutral:hover, .btn.btn-dribbble.btn-neutral:focus, .btn.btn-dribbble.btn-neutral:active { color: rgb(231, 49, 119); }
.btn.btn-github { background-color: rgb(36, 41, 46); color: rgb(255, 255, 255); }
.btn.btn-github:focus, .btn.btn-github:hover { background-color: rgb(23, 26, 29); color: rgb(255, 255, 255); }
.btn.btn-github:active, .btn.btn-github:focus, .btn.btn-github:active:focus { box-shadow: none; }
.btn.btn-github.btn-simple { color: rgb(23, 26, 29); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-github.btn-simple:hover, .btn.btn-github.btn-simple:focus, .btn.btn-github.btn-simple:hover:focus, .btn.btn-github.btn-simple:active, .btn.btn-github.btn-simple:hover:focus:active { color: rgb(23, 26, 29); background: transparent !important; box-shadow: none !important; }
.btn.btn-github.btn-neutral { color: rgb(36, 41, 46); background-color: rgb(255, 255, 255); }
.btn.btn-github.btn-neutral:hover, .btn.btn-github.btn-neutral:focus, .btn.btn-github.btn-neutral:active { color: rgb(23, 26, 29); }
.btn.btn-youtube { background-color: rgb(229, 45, 39); color: rgb(255, 255, 255); }
.btn.btn-youtube:focus, .btn.btn-youtube:hover { background-color: rgb(212, 31, 26); color: rgb(255, 255, 255); }
.btn.btn-youtube:active, .btn.btn-youtube:focus, .btn.btn-youtube:active:focus { box-shadow: none; }
.btn.btn-youtube.btn-simple { color: rgb(212, 31, 26); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-youtube.btn-simple:hover, .btn.btn-youtube.btn-simple:focus, .btn.btn-youtube.btn-simple:hover:focus, .btn.btn-youtube.btn-simple:active, .btn.btn-youtube.btn-simple:hover:focus:active { color: rgb(212, 31, 26); background: transparent !important; box-shadow: none !important; }
.btn.btn-youtube.btn-neutral { color: rgb(229, 45, 39); background-color: rgb(255, 255, 255); }
.btn.btn-youtube.btn-neutral:hover, .btn.btn-youtube.btn-neutral:focus, .btn.btn-youtube.btn-neutral:active { color: rgb(212, 31, 26); }
.btn.btn-instagram { background-color: rgb(18, 86, 136); color: rgb(255, 255, 255); }
.btn.btn-instagram:focus, .btn.btn-instagram:hover { background-color: rgb(14, 69, 109); color: rgb(255, 255, 255); }
.btn.btn-instagram:active, .btn.btn-instagram:focus, .btn.btn-instagram:active:focus { box-shadow: none; }
.btn.btn-instagram.btn-simple { color: rgb(14, 69, 109); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-instagram.btn-simple:hover, .btn.btn-instagram.btn-simple:focus, .btn.btn-instagram.btn-simple:hover:focus, .btn.btn-instagram.btn-simple:active, .btn.btn-instagram.btn-simple:hover:focus:active { color: rgb(14, 69, 109); background: transparent !important; box-shadow: none !important; }
.btn.btn-instagram.btn-neutral { color: rgb(18, 86, 136); background-color: rgb(255, 255, 255); }
.btn.btn-instagram.btn-neutral:hover, .btn.btn-instagram.btn-neutral:focus, .btn.btn-instagram.btn-neutral:active { color: rgb(14, 69, 109); }
.btn.btn-reddit { background-color: rgb(255, 69, 0); color: rgb(255, 255, 255); }
.btn.btn-reddit:focus, .btn.btn-reddit:hover { background-color: rgb(224, 61, 0); color: rgb(255, 255, 255); }
.btn.btn-reddit:active, .btn.btn-reddit:focus, .btn.btn-reddit:active:focus { box-shadow: none; }
.btn.btn-reddit.btn-simple { color: rgb(224, 61, 0); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-reddit.btn-simple:hover, .btn.btn-reddit.btn-simple:focus, .btn.btn-reddit.btn-simple:hover:focus, .btn.btn-reddit.btn-simple:active, .btn.btn-reddit.btn-simple:hover:focus:active { color: rgb(224, 61, 0); background: transparent !important; box-shadow: none !important; }
.btn.btn-reddit.btn-neutral { color: rgb(255, 69, 0); background-color: rgb(255, 255, 255); }
.btn.btn-reddit.btn-neutral:hover, .btn.btn-reddit.btn-neutral:focus, .btn.btn-reddit.btn-neutral:active { color: rgb(224, 61, 0); }
.btn.btn-tumblr { background-color: rgb(53, 70, 92); color: rgb(255, 255, 255); }
.btn.btn-tumblr:focus, .btn.btn-tumblr:hover { background-color: rgb(42, 55, 73); color: rgb(255, 255, 255); }
.btn.btn-tumblr:active, .btn.btn-tumblr:focus, .btn.btn-tumblr:active:focus { box-shadow: none; }
.btn.btn-tumblr.btn-simple { color: rgb(42, 55, 73); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-tumblr.btn-simple:hover, .btn.btn-tumblr.btn-simple:focus, .btn.btn-tumblr.btn-simple:hover:focus, .btn.btn-tumblr.btn-simple:active, .btn.btn-tumblr.btn-simple:hover:focus:active { color: rgb(42, 55, 73); background: transparent !important; box-shadow: none !important; }
.btn.btn-tumblr.btn-neutral { color: rgb(53, 70, 92); background-color: rgb(255, 255, 255); }
.btn.btn-tumblr.btn-neutral:hover, .btn.btn-tumblr.btn-neutral:focus, .btn.btn-tumblr.btn-neutral:active { color: rgb(42, 55, 73); }
.btn.btn-behance { background-color: rgb(23, 105, 255); color: rgb(255, 255, 255); }
.btn.btn-behance:focus, .btn.btn-behance:hover { background-color: rgb(0, 87, 247); color: rgb(255, 255, 255); }
.btn.btn-behance:active, .btn.btn-behance:focus, .btn.btn-behance:active:focus { box-shadow: none; }
.btn.btn-behance.btn-simple { color: rgb(0, 87, 247); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-behance.btn-simple:hover, .btn.btn-behance.btn-simple:focus, .btn.btn-behance.btn-simple:hover:focus, .btn.btn-behance.btn-simple:active, .btn.btn-behance.btn-simple:hover:focus:active { color: rgb(0, 87, 247); background: transparent !important; box-shadow: none !important; }
.btn.btn-behance.btn-neutral { color: rgb(23, 105, 255); background-color: rgb(255, 255, 255); }
.btn.btn-behance.btn-neutral:hover, .btn.btn-behance.btn-neutral:focus, .btn.btn-behance.btn-neutral:active { color: rgb(0, 87, 247); }
.btn.btn-vimeo { background-color: rgb(26, 183, 234); color: rgb(255, 255, 255); }
.btn.btn-vimeo:focus, .btn.btn-vimeo:hover { background-color: rgb(19, 163, 210); color: rgb(255, 255, 255); }
.btn.btn-vimeo:active, .btn.btn-vimeo:focus, .btn.btn-vimeo:active:focus { box-shadow: none; }
.btn.btn-vimeo.btn-simple { color: rgb(19, 163, 210); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-vimeo.btn-simple:hover, .btn.btn-vimeo.btn-simple:focus, .btn.btn-vimeo.btn-simple:hover:focus, .btn.btn-vimeo.btn-simple:active, .btn.btn-vimeo.btn-simple:hover:focus:active { color: rgb(19, 163, 210); background: transparent !important; box-shadow: none !important; }
.btn.btn-vimeo.btn-neutral { color: rgb(26, 183, 234); background-color: rgb(255, 255, 255); }
.btn.btn-vimeo.btn-neutral:hover, .btn.btn-vimeo.btn-neutral:focus, .btn.btn-vimeo.btn-neutral:active { color: rgb(19, 163, 210); }
.btn.btn-slack { background-color: rgb(58, 175, 133); color: rgb(255, 255, 255); }
.btn.btn-slack:focus, .btn.btn-slack:hover { background-color: rgb(50, 152, 116); color: rgb(255, 255, 255); }
.btn.btn-slack:active, .btn.btn-slack:focus, .btn.btn-slack:active:focus { box-shadow: none; }
.btn.btn-slack.btn-simple { color: rgb(50, 152, 116); background-color: transparent; box-shadow: none; border: none; background-image: none !important; }
.btn.btn-slack.btn-simple:hover, .btn.btn-slack.btn-simple:focus, .btn.btn-slack.btn-simple:hover:focus, .btn.btn-slack.btn-simple:active, .btn.btn-slack.btn-simple:hover:focus:active { color: rgb(50, 152, 116); background: transparent !important; box-shadow: none !important; }
.btn.btn-slack.btn-neutral { color: rgb(58, 175, 133); background-color: rgb(255, 255, 255); }
.btn.btn-slack.btn-neutral:hover, .btn.btn-slack.btn-neutral:focus, .btn.btn-slack.btn-neutral:active { color: rgb(50, 152, 116); }
.table thead th { padding: 0.75rem 1.5rem; text-transform: capitalize; letter-spacing: 0px; border-bottom: 1px solid rgb(233, 236, 239); }
.table th { font-weight: 600; }
.table td .progress { height: 3px; width: 120px; margin: 0px; }
.table td, .table th { white-space: nowrap; }
.table.align-items-center td, .table.align-items-center th { vertical-align: middle; }
.table tbody tr:last-child td { border-width: 0px; }
.table > :not(:last-child) > :last-child > * { border-bottom-color: rgb(233, 236, 239); }
.timeline { position: relative; }
.timeline::before { content: ""; position: absolute; top: 0px; left: 1rem; height: 100%; border-right: 2px solid rgb(222, 226, 230); }
.timeline-block { position: relative; }
.timeline-block::after { content: ""; display: table; clear: both; }
.timeline-block:first-child { margin-top: 0px; }
.timeline-block:last-child { margin-bottom: 0px; }
.timeline-step { position: absolute; display: inline-flex; align-items: center; justify-content: center; left: 0px; width: 26px; height: 26px; border-radius: 50%; background: rgb(255, 255, 255); text-align: center; transform: translateX(-50%); font-size: 1rem; font-weight: 600; z-index: 1; }
.timeline-step svg, .timeline-step i { line-height: 1.4; }
.timeline-content { margin-left: 45px; padding-top: 0.35rem; position: relative; top: -6px; }
.timeline-content::after { content: ""; display: table; clear: both; }
@media (min-width: 992px) {
  .timeline::before { left: 50%; margin-left: -1px; }
  .timeline-step { left: 50%; }
  .timeline-content { width: 38%; }
  .timeline-block:nth-child(2n) .timeline-content { float: right; }
}
.timeline-one-side::before { left: 1rem; }
.timeline-one-side .timeline-step { left: 1rem; }
.timeline-one-side .timeline-content { width: auto; }
@media (min-width: 992px) {
  .timeline-one-side .timeline-content { max-width: 30rem; }
}
.timeline-one-side .timeline-block:nth-child(2n) .timeline-content { float: none; }
.tilt { transform-style: preserve-3d; }
.tilt .up { transition: all 0.5s ease 0s; transform: translateZ(50px) scale(0.7) !important; }
.bs-tooltip-auto[x-placement^="right"] .tooltip-arrow, .bs-tooltip-right .tooltip-arrow { left: 1px; }
.bs-tooltip-auto[x-placement^="left"] .tooltip-arrow, .bs-tooltip-left .tooltip-arrow { right: 1px; }
html * { -webkit-font-smoothing: antialiased; }
body { font-weight: 400; line-height: 1.6; }
h1, .h1, .h1 { font-size: 3rem; line-height: 1.25; letter-spacing: -0.025rem; }
@media (max-width: 575.98px) {
  h1, .h1, .h1 { font-size: calc(1.425rem + 2.1vw); }
}
h2, .h2, .h2 { font-size: 2.25rem; line-height: 1.3; letter-spacing: 0.05rem; }
@media (max-width: 575.98px) {
  h2, .h2, .h2 { font-size: calc(1.35rem + 1.2vw); }
}
h3, .h3, .h3 { font-size: 1.875rem; line-height: 1.375; }
@media (max-width: 575.98px) {
  h3, .h3, .h3 { font-size: calc(1.3125rem + 0.75vw); }
}
h4, .h4, .h4 { font-size: 1.5rem; line-height: 1.375; }
@media (max-width: 575.98px) {
  h4, .h4, .h4 { font-size: calc(1.275rem + 0.3vw); }
}
h5, .h5, .h5 { font-size: 1.25rem; line-height: 1.375; }
@media (max-width: 575.98px) {
  h5, .h5, .h5 { font-size: 1.25rem; }
}
h6, .h6, .h6 { font-size: 1rem; line-height: 1.625; }
p, .p { font-size: 1rem; font-weight: 400; line-height: 1.6; }
.lead { font-size: 1.25rem; font-weight: 400; line-height: 1.625; }
h1, .h1, .h1, h2, .h2, .h2, h3, .h3, .h3 { font-weight: 700; }
h4, .h4, .h4, h5, .h5, .h5, h6, .h6, .h6 { font-weight: 600; }
h1, .h1, .h1, h2, .h2, .h2, h3, .h3, .h3, h4, .h4, .h4 { letter-spacing: -0.05rem; }
a { letter-spacing: -0.025rem; color: rgb(52, 71, 103); }
.text-sm { line-height: 1.5; }
.text-xs { line-height: 1.25; }
p, .p { font-size: 1rem; }
.lead { font-size: 1.25rem; }
.text-lg { font-size: 1.125rem !important; }
.text-sm { font-size: 0.875rem !important; }
.text-xs { font-size: 0.75rem !important; }
.text-xxs { font-size: 0.65rem !important; }
p { line-height: 1.625; font-weight: 400; }
.text-sans-serif { font-family: "Open Sans" !important; }
.text-monospace { font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important; }
.text-justify { text-align: justify !important; }
.text-wrap { white-space: normal !important; }
.text-nowrap { white-space: nowrap !important; }
.text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.font-weight-light { font-weight: 300 !important; }
.font-weight-lighter { font-weight: lighter !important; }
.font-weight-normal { font-weight: 400 !important; }
.font-weight-bold { font-weight: 600 !important; }
.font-weight-bolder { font-weight: 700 !important; }
.font-italic { font-style: italic !important; }
.text-gradient { background-clip: text; -webkit-text-fill-color: transparent; position: relative; z-index: 1; }
.text-gradient.text-primary { background-image: linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128)); }
.text-gradient.text-info { background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253)); }
.text-gradient.text-success { background-image: linear-gradient(310deg, rgb(23, 173, 55), rgb(193, 232, 35)); }
.text-gradient.text-warning { background-image: linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51)); }
.text-gradient.text-danger { background-image: linear-gradient(310deg, rgb(214, 8, 8), rgb(255, 102, 144)); }
.text-gradient.text-dark { background-image: linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111)); }
.blockquote { border-left: 3px solid rgb(108, 117, 125); }
.blockquote > span { font-style: italic; }
.text-muted { color: rgb(103, 116, 142) !important; }
.text-black-50 { color: rgba(0, 0, 0, 0.5) !important; }
.text-white-50 { color: rgba(255, 255, 255, 0.5) !important; }
.text-decoration-none { text-decoration: none !important; }
.text-break { overflow-wrap: break-word !important; }
.text-reset { color: inherit !important; }
.letter-wider { letter-spacing: 0.05rem; }
.letter-normal { letter-spacing: 0rem; }
.letter-tighter { letter-spacing: -0.05rem; }
.text-lighter { font-weight: lighter; }
.text-light { font-weight: 300; }
.text-normal { font-weight: 400; }
.text-bold { font-weight: 600; }
.text-bolder { font-weight: 700; }
.flatpickr-calendar { opacity: 0; display: none; text-align: center; visibility: hidden; padding: 0px; animation: auto ease 0s 1 normal none running none; direction: ltr; border: 0px; font-size: 14px; line-height: 24px; border-radius: 5px; position: absolute; width: 307.875px; box-sizing: border-box; touch-action: manipulation; background: rgb(255, 255, 255); box-shadow: rgba(20, 20, 20, 0.15) 0px 8px 26px -4px, rgba(20, 20, 20, 0.06) 0px 8px 9px -5px; }
.flatpickr-calendar.open, .flatpickr-calendar.inline { opacity: 1; max-height: 640px; visibility: visible; }
.flatpickr-calendar.open { display: inline-block; z-index: 99999; }
.flatpickr-calendar.animate.open { animation: 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal none running fpFadeInDown; }
.flatpickr-calendar.inline { display: block; position: relative; top: 2px; }
.flatpickr-calendar.static { position: absolute; top: calc(100% + 2px); }
.flatpickr-calendar.static.open { z-index: 999; display: block; }
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) { box-shadow: none !important; }
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) { box-shadow: rgb(230, 230, 230) -2px 0px 0px, rgb(230, 230, 230) 5px 0px 0px; }
.flatpickr-calendar .hasWeeks .dayContainer, .flatpickr-calendar .hasTime .dayContainer { border-bottom: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }
.flatpickr-calendar .hasWeeks .dayContainer { border-left: 0px; }
.flatpickr-calendar.hasTime .flatpickr-time { height: 40px; border-top: 1px solid rgb(230, 230, 230); }
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time { height: auto; }
.flatpickr-calendar::before, .flatpickr-calendar::after { position: absolute; display: block; pointer-events: none; border: solid transparent; content: ""; height: 0px; width: 0px; left: 22px; }
.flatpickr-calendar.rightMost::before, .flatpickr-calendar.arrowRight::before, .flatpickr-calendar.rightMost::after, .flatpickr-calendar.arrowRight::after { left: auto; right: 22px; }
.flatpickr-calendar.arrowCenter::before, .flatpickr-calendar.arrowCenter::after { left: 50%; right: 50%; }
.flatpickr-calendar::before { border-width: 5px; margin: 0px -5px; }
.flatpickr-calendar::after { border-width: 4px; margin: 0px -4px; }
.flatpickr-calendar.arrowTop::before, .flatpickr-calendar.arrowTop::after { bottom: 100%; }
.flatpickr-calendar.arrowTop::before { border-bottom-color: rgb(255, 255, 255); }
.flatpickr-calendar.arrowTop::after { border-bottom-color: rgb(255, 255, 255); }
.flatpickr-calendar.arrowBottom::before, .flatpickr-calendar.arrowBottom::after { top: 100%; }
.flatpickr-calendar.arrowBottom::before { border-top-color: rgb(230, 230, 230); }
.flatpickr-calendar.arrowBottom::after { border-top-color: rgb(255, 255, 255); }
.flatpickr-calendar:focus { outline: 0px; }
.flatpickr-wrapper { position: relative; display: inline-block; }
.flatpickr-months { display: flex; }
.flatpickr-months .flatpickr-month { background: transparent; color: rgba(0, 0, 0, 0.9); fill: rgba(0, 0, 0, 0.9); height: 34px; line-height: 1; text-align: center; position: relative; user-select: none; overflow: hidden; -webkit-box-flex: 1; flex: 1 1 0%; }
.flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month { text-decoration: none; cursor: pointer; position: absolute; top: 0px; height: 34px; padding: 10px; z-index: 3; color: rgba(0, 0, 0, 0.9); fill: rgba(0, 0, 0, 0.9); }
.flatpickr-months .flatpickr-prev-month.flatpickr-disabled, .flatpickr-months .flatpickr-next-month.flatpickr-disabled { display: none; }
.flatpickr-months .flatpickr-prev-month i, .flatpickr-months .flatpickr-next-month i { position: relative; }
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-prev-month { left: 0px; }
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month { right: 0px; }
.flatpickr-months .flatpickr-prev-month:hover, .flatpickr-months .flatpickr-next-month:hover { color: rgb(149, 158, 169); }
.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg { fill: rgb(246, 71, 71); }
.flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg { width: 14px; height: 14px; }
.flatpickr-months .flatpickr-prev-month svg path, .flatpickr-months .flatpickr-next-month svg path { transition: fill 0.1s ease 0s; fill: inherit; }
.numInputWrapper { position: relative; height: auto; }
.numInputWrapper input, .numInputWrapper span { display: inline-block; }
.numInputWrapper input { width: 100%; }
.numInputWrapper input::-ms-clear { display: none; }
.numInputWrapper input::-webkit-outer-spin-button, .numInputWrapper input::-webkit-inner-spin-button { margin: 0px; appearance: none; }
.numInputWrapper span { position: absolute; right: 0px; width: 14px; padding: 0px 4px 0px 2px; height: 50%; line-height: 50%; opacity: 0; cursor: pointer; border: 1px solid rgba(57, 57, 57, 0.15); box-sizing: border-box; }
.numInputWrapper span:hover { background: rgba(0, 0, 0, 0.1); }
.numInputWrapper span:active { background: rgba(0, 0, 0, 0.2); }
.numInputWrapper span::after { display: block; content: ""; position: absolute; }
.numInputWrapper span.arrowUp { top: 0px; border-bottom: 0px; }
.numInputWrapper span.arrowUp::after { border-left: 4px solid transparent; border-right: 4px solid transparent; border-bottom: 4px solid rgba(57, 57, 57, 0.6); top: 26%; }
.numInputWrapper span.arrowDown { top: 50%; }
.numInputWrapper span.arrowDown::after { border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid rgba(57, 57, 57, 0.6); top: 40%; }
.numInputWrapper span svg { width: inherit; height: auto; }
.numInputWrapper span svg path { fill: rgba(0, 0, 0, 0.5); }
.numInputWrapper:hover { background: rgba(0, 0, 0, 0.05); }
.numInputWrapper:hover span { opacity: 1; }
.flatpickr-current-month { font-size: 135%; font-weight: 300; color: inherit; position: absolute; width: 75%; left: 12.5%; padding: 7.48px 0px 0px; line-height: 1; height: 34px; display: inline-block; text-align: center; transform: translate3d(0px, 0px, 0px); }
.flatpickr-current-month span.cur-month { font-family: inherit; font-weight: 700; color: inherit; display: inline-block; margin-left: 0.5ch; padding: 0px; }
.flatpickr-current-month span.cur-month:hover { background: rgba(0, 0, 0, 0.05); }
.flatpickr-current-month .numInputWrapper { width: 6ch; display: inline-block; }
.flatpickr-current-month .numInputWrapper span.arrowUp::after { border-bottom-color: rgba(0, 0, 0, 0.9); }
.flatpickr-current-month .numInputWrapper span.arrowDown::after { border-top-color: rgba(0, 0, 0, 0.9); }
.flatpickr-current-month input.cur-year { background: transparent; box-sizing: border-box; color: inherit; cursor: text; padding: 0px 0px 0px 0.5ch; margin: 0px; display: inline-block; font-size: inherit; font-family: inherit; font-weight: 300; line-height: inherit; height: auto; border: 0px; border-radius: 0px; vertical-align: initial; appearance: textfield; }
.flatpickr-current-month input.cur-year:focus { outline: 0px; }
.flatpickr-current-month input.cur-year[disabled], .flatpickr-current-month input.cur-year[disabled]:hover { font-size: 100%; color: rgba(0, 0, 0, 0.5); background: transparent; pointer-events: none; }
.flatpickr-current-month .flatpickr-monthDropdown-months { background: transparent; border: none; border-radius: 0px; color: inherit; cursor: pointer; font-size: inherit; font-family: inherit; font-weight: 300; height: auto; line-height: inherit; margin: -1px 0px 0px; outline: none; padding: 0px 0px 0px 0.5ch; position: relative; vertical-align: initial; box-sizing: border-box; appearance: menulist; width: auto; }
.flatpickr-current-month .flatpickr-monthDropdown-months:focus, .flatpickr-current-month .flatpickr-monthDropdown-months:active { outline: none; }
.flatpickr-current-month .flatpickr-monthDropdown-months:hover { background: rgba(0, 0, 0, 0.05); }
.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month { background-color: transparent; outline: none; padding: 0px; }
.flatpickr-weekdays { background: transparent; text-align: center; overflow: hidden; width: 100%; display: flex; -webkit-box-align: center; align-items: center; height: 28px; }
.flatpickr-weekdays .flatpickr-weekdaycontainer { display: flex; -webkit-box-flex: 1; flex: 1 1 0%; }
span.flatpickr-weekday { cursor: default; font-size: 90%; background: transparent; color: rgba(0, 0, 0, 0.54); line-height: 1; margin: 0px; text-align: center; display: block; -webkit-box-flex: 1; flex: 1 1 0%; font-weight: bolder; }
.dayContainer, .flatpickr-weeks { padding: 1px 0px 0px; }
.flatpickr-days { position: relative; overflow: hidden; display: flex; -webkit-box-align: start; align-items: flex-start; width: 307.875px; }
.flatpickr-days:focus { outline: 0px; }
.dayContainer { padding: 0px; outline: 0px; text-align: left; width: 307.875px; min-width: 307.875px; max-width: 307.875px; box-sizing: border-box; display: flex; flex-wrap: wrap; justify-content: space-around; transform: translate3d(0px, 0px, 0px); opacity: 1; }
.dayContainer + .dayContainer { box-shadow: rgb(230, 230, 230) -1px 0px 0px; }
.flatpickr-day { background: none; border: 1px solid transparent; border-radius: 150px; box-sizing: border-box; color: rgb(57, 57, 57); cursor: pointer; font-weight: 400; width: 14.2857%; flex-basis: 14.2857%; max-width: 39px; height: 39px; line-height: 39px; margin: 0px; display: inline-block; position: relative; -webkit-box-pack: center; justify-content: center; text-align: center; }
.flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus { cursor: pointer; outline: 0px; background: rgb(230, 230, 230); border-color: rgb(230, 230, 230); }
.flatpickr-day.today { border-color: rgb(149, 158, 169); }
.flatpickr-day.today:hover, .flatpickr-day.today:focus { border-color: rgb(149, 158, 169); background: rgb(149, 158, 169); color: rgb(255, 255, 255); }
.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay { background: rgb(86, 159, 247); box-shadow: none; color: rgb(255, 255, 255); border-color: rgb(86, 159, 247); }
.flatpickr-day.selected.startRange, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.startRange { border-radius: 50px 0px 0px 50px; }
.flatpickr-day.selected.endRange, .flatpickr-day.startRange.endRange, .flatpickr-day.endRange.endRange { border-radius: 0px 50px 50px 0px; }
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) { box-shadow: rgb(86, 159, 247) -10px 0px 0px; }
.flatpickr-day.selected.startRange.endRange, .flatpickr-day.startRange.startRange.endRange, .flatpickr-day.endRange.startRange.endRange { border-radius: 50px; }
.flatpickr-day.inRange { border-radius: 0px; box-shadow: rgb(230, 230, 230) -5px 0px 0px, rgb(230, 230, 230) 5px 0px 0px; }
.flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay { color: rgba(57, 57, 57, 0.3); background: transparent; border-color: transparent; cursor: default; }
.flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover { cursor: not-allowed; color: rgba(57, 57, 57, 0.1); }
.flatpickr-day.week.selected { border-radius: 0px; box-shadow: rgb(86, 159, 247) -5px 0px 0px, rgb(86, 159, 247) 5px 0px 0px; }
.flatpickr-day.hidden { visibility: hidden; }
.rangeMode .flatpickr-day { margin-top: 1px; }
.flatpickr-weekwrapper { float: left; }
.flatpickr-weekwrapper .flatpickr-weeks { padding: 0px 12px; box-shadow: rgb(230, 230, 230) 1px 0px 0px; }
.flatpickr-weekwrapper .flatpickr-weekday { float: none; width: 100%; line-height: 28px; }
.flatpickr-weekwrapper span.flatpickr-day, .flatpickr-weekwrapper span.flatpickr-day:hover { display: block; width: 100%; max-width: none; color: rgba(57, 57, 57, 0.3); background: transparent; cursor: default; border: none; }
.flatpickr-innerContainer { display: flex; box-sizing: border-box; overflow: hidden; }
.flatpickr-rContainer { display: inline-block; padding: 0px; box-sizing: border-box; }
.flatpickr-time { text-align: center; outline: 0px; height: 0px; line-height: 40px; max-height: 40px; box-sizing: border-box; overflow: hidden; display: flex; }
.flatpickr-time::after { content: ""; display: table; clear: both; }
.flatpickr-time .numInputWrapper { -webkit-box-flex: 1; flex: 1 1 0%; width: 40%; height: 40px; float: left; }
.flatpickr-time .numInputWrapper span.arrowUp::after { border-bottom-color: rgb(57, 57, 57); }
.flatpickr-time .numInputWrapper span.arrowDown::after { border-top-color: rgb(57, 57, 57); }
.flatpickr-time.hasSeconds .numInputWrapper { width: 26%; }
.flatpickr-time.time24hr .numInputWrapper { width: 49%; }
.flatpickr-time input { background: transparent; box-shadow: none; border: 0px; border-radius: 0px; text-align: center; margin: 0px; padding: 0px; height: inherit; line-height: inherit; color: rgb(57, 57, 57); font-size: 14px; position: relative; box-sizing: border-box; appearance: textfield; }
.flatpickr-time input.flatpickr-hour { font-weight: bold; }
.flatpickr-time input.flatpickr-minute, .flatpickr-time input.flatpickr-second { font-weight: 400; }
.flatpickr-time input:focus { outline: 0px; border: 0px; }
.flatpickr-time .flatpickr-time-separator, .flatpickr-time .flatpickr-am-pm { height: inherit; float: left; line-height: inherit; color: rgb(57, 57, 57); font-weight: bold; width: 2%; user-select: none; align-self: center; }
.flatpickr-time .flatpickr-am-pm { outline: 0px; width: 18%; cursor: pointer; text-align: center; font-weight: 400; }
.flatpickr-time input:hover, .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-time input:focus, .flatpickr-time .flatpickr-am-pm:focus { background: rgb(238, 238, 238); }
.flatpickr-input[readonly] { cursor: pointer; }
@-webkit-keyframes fpFadeInDown { 
  0% { opacity: 0; transform: translate3d(0px, -20px, 0px); }
  100% { opacity: 1; transform: translate3d(0px, 0px, 0px); }
}
@keyframes fpFadeInDown { 
  0% { opacity: 0; transform: translate3d(0px, -20px, 0px); }
  100% { opacity: 1; transform: translate3d(0px, 0px, 0px); }
}
.datepicker.flatpickr-input { background-color: rgb(255, 255, 255); }
.flatpickr-calendar.open { margin-left: -38px; margin-top: 4px; }
.flatpickr-calendar.arrowBottom { margin-top: -20px; }
.flatpickr-calendar .flatpickr-innerContainer { margin-top: 15px !important; }
.flatpickr-calendar .numInputWrapper span { border-top: none; border-right: none; border-left: none; border-image: initial; border-bottom: 1px solid rgba(57, 57, 57, 0.15); }
.flatpickr-calendar .numInputWrapper:hover .arrowUp, .flatpickr-calendar .numInputWrapper:hover .arrowDown { margin-top: 3px; }
.flatpickr-calendar .flatpickr-day.today, .flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange { color: rgb(255, 255, 255); border: none; background: rgb(203, 12, 159) !important; }
.flatpickr-calendar .flatpickr-day.inRange { background: rgba(94, 114, 228, 0.28); border: none; box-shadow: rgb(215, 220, 248) -5px 0px 0px, rgb(215, 220, 248) 5px 0px 0px; }
.flatpickr-calendar .flatpickr-day:not(.selected):hover, .flatpickr-calendar .flatpickr-day:not(.selected):focus { background: rgba(94, 114, 228, 0.28); border: none; }
.flatpickr-calendar .flatpickr-time input:hover, .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-calendar .flatpickr-time input:focus, .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:focus { background: rgba(94, 114, 228, 0.28); }
.flatpickr.form-control { background: rgb(255, 255, 255); }
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)) { box-shadow: rgb(203, 12, 159) -10px 0px 0px; }
.noUi-target, .noUi-target * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); touch-action: none; user-select: none; box-sizing: border-box; }
.noUi-target { position: relative; }
.noUi-base, .noUi-connects { width: 100%; height: 6px; position: relative; z-index: 1; top: -1px; }
.noUi-connects { z-index: 0; overflow: hidden; }
.noUi-connect, .noUi-origin { will-change: transform; position: absolute; z-index: 1; top: 0px; right: 0px; transform-origin: 0px 0px; transform-style: flat; }
.noUi-connect { height: 100%; width: 100%; border-radius: 0.25rem; }
.noUi-origin { height: 10%; width: 10%; }
.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin { left: 0px; right: auto; }
.noUi-vertical .noUi-origin { width: 0px; }
.noUi-horizontal .noUi-origin { height: 0px; }
.noUi-handle { backface-visibility: hidden; position: absolute; }
.noUi-touch-area { height: 100%; width: 100%; }
.noUi-state-tap .noUi-connect, .noUi-state-tap .noUi-origin { transition: transform 0.3s ease 0s; }
.noUi-state-drag * { cursor: inherit !important; }
.noUi-horizontal { height: 3px; }
.noUi-horizontal .noUi-handle { border-radius: 50%; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 13px 0px; height: 15px; width: 15px; cursor: pointer; margin-top: -6px; outline: none; right: -10px; }
.noUi-vertical { width: 3px; }
.noUi-vertical .noUi-handle { width: 28px; height: 34px; right: -6px; top: -17px; }
.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle { left: -17px; right: auto; }
.noUi-target { background: rgb(233, 236, 239); border-radius: 0.25rem; }
.noUi-connects { border-radius: 3px; }
.noUi-connect { background-image: linear-gradient(310deg, rgb(121, 40, 202) 0%, rgb(255, 0, 128) 100%); }
.noUi-draggable { cursor: ew-resize; }
.noUi-vertical .noUi-draggable { cursor: ns-resize; }
.noUi-handle { border: 1px solid rgb(217, 217, 217); border-radius: 3px; background: rgb(255, 255, 255); cursor: default; box-shadow: rgb(255, 255, 255) 0px 0px 1px inset, rgb(235, 235, 235) 0px 1px 7px inset, rgb(187, 187, 187) 0px 3px 6px -3px; transition: all 0.3s ease 0s; }
.noUi-active { box-shadow: rgb(255, 255, 255) 0px 0px 1px inset, rgb(221, 221, 221) 0px 1px 7px inset, rgb(187, 187, 187) 0px 3px 6px -3px; transform: scale3d(1.5, 1.5, 1); }
[disabled] .noUi-connect { background: rgb(184, 184, 184); }
[disabled].noUi-target, [disabled].noUi-handle, [disabled] .noUi-handle { cursor: not-allowed; }
.noUi-pips, .noUi-pips * { box-sizing: border-box; }
.noUi-pips { position: absolute; color: rgb(153, 153, 153); }
.noUi-value { position: absolute; white-space: nowrap; text-align: center; }
.noUi-value-sub { color: rgb(204, 204, 204); font-size: 10px; }
.noUi-marker { position: absolute; background: rgb(204, 204, 204); }
.noUi-marker-sub { background: rgb(170, 170, 170); }
.noUi-marker-large { background: rgb(170, 170, 170); }
.noUi-pips-horizontal { padding: 10px 0px; height: 80px; top: 100%; left: 0px; width: 100%; }
.noUi-value-horizontal { transform: translate(-50%, 50%); }
.noUi-rtl .noUi-value-horizontal { transform: translate(50%, 50%); }
.noUi-marker-horizontal.noUi-marker { margin-left: -1px; width: 2px; height: 5px; }
.noUi-marker-horizontal.noUi-marker-sub { height: 10px; }
.noUi-marker-horizontal.noUi-marker-large { height: 15px; }
.noUi-pips-vertical { padding: 0px 10px; height: 100%; top: 0px; left: 100%; }
.noUi-value-vertical { transform: translate(0px, -50%); padding-left: 25px; }
.noUi-rtl .noUi-value-vertical { transform: translate(0px, 50%); }
.noUi-marker-vertical.noUi-marker { width: 5px; height: 2px; margin-top: -1px; }
.noUi-marker-vertical.noUi-marker-sub { width: 10px; }
.noUi-marker-vertical.noUi-marker-large { width: 15px; }
.noUi-tooltip { display: block; position: absolute; border: 1px solid rgb(217, 217, 217); border-radius: 3px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; text-align: center; white-space: nowrap; }
.noUi-horizontal .noUi-tooltip { transform: translate(-50%, 0px); left: 50%; bottom: 120%; }
.noUi-vertical .noUi-tooltip { transform: translate(0px, -50%); top: 50%; right: 120%; }
.noUi-horizontal .noUi-origin > .noUi-tooltip { transform: translate(50%, 0px); left: auto; bottom: 10px; }
.noUi-vertical .noUi-origin > .noUi-tooltip { transform: translate(0px, -18px); top: auto; right: 28px; }
code[class*="language-"], pre[class*="language-"] { color: black; background: none; text-shadow: white 0px 1px; font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; }
pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection { text-shadow: none; background: rgb(179, 212, 252); }
@media print {
  code[class*="language-"], pre[class*="language-"] { text-shadow: none; }
}
pre[class*="language-"] { padding: 1em; overflow: auto; border-radius: 0.75rem; }
:not(pre) > code[class*="language-"], pre[class*="language-"] { background: rgb(248, 249, 250); }
:not(pre) > code[class*="language-"] { padding: 0.1em; border-radius: 0.3em; white-space: normal; }
.token.comment, .token.prolog, .token.doctype, .token.cdata { color: slategray; }
.token.punctuation { color: rgb(153, 153, 153); }
.token.namespace { opacity: 0.7; }
.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted { color: rgb(153, 0, 85); }
.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted { color: rgb(102, 153, 0); }
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string { color: rgb(154, 110, 58); background: rgba(255, 255, 255, 0.5); }
.token.atrule, .token.attr-value, .token.keyword { color: rgb(0, 119, 170); }
.token.function, .token.class-name { color: rgb(221, 74, 104); }
.token.regex, .token.important, .token.variable { color: rgb(238, 153, 0); }
.token.important, .token.bold { font-weight: bold; }
.token.italic { font-style: italic; }
.token.entity { cursor: help; }
.ps { overflow-anchor: none; touch-action: auto; overflow: hidden !important; }
.ps__rail-x { display: none; opacity: 0; transition: background-color 0.2s linear 0s, opacity 0.2s linear 0s; height: 15px; bottom: 0px; position: absolute; }
.ps__rail-y { display: none; opacity: 0; transition: background-color 0.2s linear 0s, opacity 0.2s linear 0s; width: 15px; right: 0px; position: absolute; }
.ps--active-x > .ps__rail-x, .ps--active-y > .ps__rail-y { display: block; background-color: transparent; }
.ps:hover > .ps__rail-x, .ps:hover > .ps__rail-y, .ps--focus > .ps__rail-x, .ps--focus > .ps__rail-y, .ps--scrolling-x > .ps__rail-x, .ps--scrolling-y > .ps__rail-y { opacity: 0.6; }
.ps .ps__rail-x:hover, .ps .ps__rail-y:hover, .ps .ps__rail-x:focus, .ps .ps__rail-y:focus, .ps .ps__rail-x.ps--clicking, .ps .ps__rail-y.ps--clicking { background-color: rgb(238, 238, 238); opacity: 0.9; }
.ps__thumb-x { background-color: rgb(170, 170, 170); border-radius: 6px; transition: background-color 0.2s linear 0s, height 0.2s ease-in-out 0s; height: 6px; bottom: 2px; position: absolute; }
.ps__thumb-y { background-color: rgb(170, 170, 170); border-radius: 6px; transition: background-color 0.2s linear 0s, width 0.2s ease-in-out 0s; width: 6px; right: 2px; position: absolute; }
.ps__rail-x:hover > .ps__thumb-x, .ps__rail-x:focus > .ps__thumb-x, .ps__rail-x.ps--clicking .ps__thumb-x { background-color: rgb(153, 153, 153); height: 11px; }
.ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y { background-color: rgb(153, 153, 153); width: 11px; }
@supports (-ms-overflow-style: none) {
  .ps { overflow: auto !important; }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps { overflow: auto !important; }
}
iframe .project-slider { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; }
.col-xl-3 { flex: 0 0 auto; width: 100%; scroll-snap-align: start; }
.slider-container { position: relative; width: 100%; overflow: hidden; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px; }
.slider { display: flex; transition: transform 0.5s ease-in-out 0s; }
.slide { flex: 0 0 33.333%; box-sizing: border-box; padding: 10px 15px; text-align: center; font-size: 24px; color: rgb(51, 51, 51); }
@media screen and (max-width: 600px) {
  .slide { flex: 0 0 100%; }
}
 `;
            var js = `
            document.getElementById('popup-widget3').style.display = 'block';
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
        