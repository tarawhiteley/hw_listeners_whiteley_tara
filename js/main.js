var clickLink = document.getElementsByClassName('team');

clickLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('I see you');
    var steelersText = document.createElement('article');
    steelersText.innerHTML = '<h4>You picked an awesome team!</h4>';
});
