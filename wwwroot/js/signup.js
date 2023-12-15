




$('#go-signin').on('click', function () {
    $('#signin-popup').css('display', 'block');
    $('#signin-popup').addClass('show-popup');
});

$('#go-signup').on('click', function () {
    $('#signup-popup').css('display', 'block');
    $('#signup-popup').addClass('show-popup');
});

document.getElementById('sign-up').addEventListener('click', function () {
    document.getElementById('signin-popup').classList.remove('show-popup');
    setTimeout(function () {
        document.getElementById('signin-popup').style.display = 'none';
    }, 50);
    $('#signup-popup').css('display', 'block');
    $('#signup-popup').addClass('show-popup');
});

document.getElementById('sign-in').addEventListener('click', function () {
    document.getElementById('signup-popup').classList.remove('show-popup');
    setTimeout(function () {
        document.getElementById('signup-popup').style.display = 'none';
    }, 50);
    setTimeout(function () {
        $('#signin-popup').css('display', 'block');
        $('#signin-popup').addClass('show-popup');
    }, 50);
});