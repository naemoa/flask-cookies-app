<script>
document.addEventListener("DOMContentLoaded", function() {
    var widgetId = "{{ widget_id }}";
    var script = document.createElement('script');
    script.src = `https://app.ceralda.com/static/widget_loader.js?id=${widgetId}`;
    document.head.appendChild(script);
});
</script>
