// Navbar-fungsi cadangan

// Fungsi untuk menentukan apakah scroll ke atas atau ke bawah
// Ambil elemen navbar
// var navbar = document.getElementById('navbar');
// var lastScrollTop = 0;
// window.addEventListener('scroll', function () {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {

//     navbar.classList.remove('navbar-show');
//   } else {

//     navbar.classList.add('navbar-show');
//   }

//   lastScrollTop = scrollTop;
// });

//Toggle Class Active untuk hamburger menu

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger diklik

document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault(); // Hanya diperlukan jika Anda ingin menghentikan perilaku default dari tombol pencarian
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!scb.contains(e.target) && !searchForm.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
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

// fungsi untuk menonaktifkan auto scroll pada ceritificate section
document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('#thumbnail label');
  let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  thumbnails.forEach(function(label) {
    label.addEventListener('click', function(event) {
      // Simpan posisi scroll saat ini
      lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Biarkan event click terjadi
      setTimeout(() => {
        // Kembalikan ke posisi scroll sebelumnya
        window.scrollTo(0, lastScrollPosition);
      }, 0);
    });
  });
});