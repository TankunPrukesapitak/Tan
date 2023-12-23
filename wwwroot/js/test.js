window.onload = function() {
  document.getElementById('signin-popup').style.display = 'block';
  document.getElementById('signin-popup').classList.add('show-popup');
};



function closeError() {
  var popup = document.getElementById("popup-message").remove('popup-message');;
}