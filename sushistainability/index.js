// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var navigation = document.querySelector(".navigation");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  navigation.classList.toggle("open");
});