window.addEventListener('DOMContentLoaded', function () {
    loadCopyrightYear()
    //lazy load the background images
    lazyLoadBackgroundImage('bloc-0', '/img/heroJPG@2x.png');
    lazyLoadBackgroundImage('bloc-3', '/img/Group%2029.png');
});

function loadCopyrightYear() {
    var elem = document.getElementById('copyright-year');
    if (elem) {
        elem.innerHTML = new Date().getFullYear();
    }
}

function lazyLoadBackgroundImage(elemId, imageUrl) {
    var block = document.getElementById(elemId);
    if (block) {
        block.style.backgroundImage = 'url(' + imageUrl + ')'
    }
}