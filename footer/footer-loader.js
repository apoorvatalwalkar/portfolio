document.addEventListener('DOMContentLoaded', function() {
    fetch('../../footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});