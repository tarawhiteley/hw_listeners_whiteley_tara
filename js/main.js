var linkClicker = document.getElementsByClassName('team');

linkClicker.addEventListener('click', function (evt) {
    evt.preventDefault();
    var steelersText = document.createElement('article');
    steelersText.innerHTML = '<h4>You clicked an awesome team!</h4>';
    document.getElementsByClassName('team').appendChild(steelersText);
});
