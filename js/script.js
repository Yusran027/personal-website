// Fungsi untuk menentukan apakah scroll ke atas atau ke bawah
var navbar = document.getElementById("navbar");
var lastScrollTop = 0;
var scrollDelta = 5;
var navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Periksa jika scrolling cukup besar untuk animasi
  if (Math.abs(lastScrollTop - scrollTop) <= scrollDelta) {
    return;
  }

  if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.style.transform = "translateY(-200%)";
  } else if (scrollTop < lastScrollTop) {
    // Scroll ke atas, tampilkan navbar
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

// Navbar Active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 50) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

//Hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tombol Splash Buble
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("splash-button");
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

// Fungsi Tab-button pada project section
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".splash-button.btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.id;
      const contentId = "content" + tabId.slice(-1);

      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(contentId).classList.add("active");
    });
  });
});

// fungsi untuk menonaktifkan auto scroll pada ceritificate section
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll("#thumbnail label");
  let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  thumbnails.forEach(function (label) {
    label.addEventListener("click", function (event) {
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
