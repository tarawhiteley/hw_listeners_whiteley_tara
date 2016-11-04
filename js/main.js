var pageHeader = document.getElementById('header');

pageHeader.addEventListener('click', function modifyHTML() {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number x</p>';
    document.getElementById('header').appendChild(myElement);
    console.log('I see you');
});
