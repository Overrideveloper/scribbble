var contentEl = document.querySelectorAll('ion-content');

for(var content of contentEl) {
    content.fullscreen = true;
    content.scrollEvents = true;
}

var landingContent = document.querySelector('ion-content#landing');
var authContent = document.querySelector('ion-content#auth');
var homeContent = document.querySelector('ion-content#home');

var landingZIndex = landingContent.style.zIndex;
var authZIndex = authContent.style.zIndex;
var homeZIndex = homeContent.style.zIndex;

var toAuthPage = function() {
    landingContent.classList.add('exit');

    setTimeout(() => {
        landingContent.style.zIndex = authZIndex
        authContent.style.zIndex = landingZIndex;
    }, 700);
}

var toHomePage = function() {
    authContent.classList.add('exit');

    setTimeout(() => {   
        homeContent.style.zIndex = landingZIndex;
        authContent.style.zIndex = authZIndex;
        landingContent.style.zIndex = homeZIndex;
    }, 700);
}