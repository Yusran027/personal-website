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
