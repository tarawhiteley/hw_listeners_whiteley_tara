var pageHeader = document.getElementById('header');
var clickTracker = 1;

pageHeader.addEventListener('click', function modifyHTML() {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number ' + clickTracker + '</p>';
    clickTracker = clickTracker + 1;
    document.getElementById('header').appendChild(myElement);
    console.log('I see you');
});
