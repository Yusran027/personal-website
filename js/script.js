// Ambil elemen navbar
var navbar = document.getElementById('navbar');
var lastScrollTop = 0;

// Fungsi untuk menentukan apakah scroll ke atas atau ke bawah
window.addEventListener('scroll', function() {
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
