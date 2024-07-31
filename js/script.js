// Navbar

// Ambil elemen navbar
var navbar = document.getElementById('navbar');
var lastScrollTop = 0;

// Fungsi untuk menentukan apakah scroll ke atas atau ke bawah
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.remove('navbar-show');
  } else {
    // Scroll ke atas
    navbar.classList.add('navbar-show');
  }

  lastScrollTop = scrollTop;
});


// Tombol Splash Buble
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName('splash-button');
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
