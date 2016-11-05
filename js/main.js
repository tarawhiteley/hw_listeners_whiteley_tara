var formSubmit = document.getElementById('submit');

formSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('The firstName is: firstName');
    console.log('The lastName is: lastName');
    console.log('The email is: email');
    console.log('The message is: message');
});
