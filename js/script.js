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

// Modal Sertificate
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal with animation
btn.onclick = function () {
  modal.style.display = 'block';
  setTimeout(function () {
    modal.querySelector('.modal-content').classList.add('show');
  }, 10);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.querySelector('.modal-content').classList.remove('show');
  setTimeout(function () {
    modal.style.display = 'none';
  }, 500);
};
// When the user clicks on container modal, close the modal
// var container = document.getElementsByClassName('container')[0];
// container.onclick = function () {
//   modal.querySelector('.modal-content').classList.remove('show');
//   setTimeout(function () {
//     modal.style.display = 'none';
//   }, 500);
// };

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.querySelector('.modal-content').classList.remove('show');
    setTimeout(function () {
      modal.style.display = 'none';
    }, 500);
  }
});
