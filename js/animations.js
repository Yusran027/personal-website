gsap.registerPlugin(ScrollTrigger);

// Hero Section start
const box = document.querySelector(".flip-card");
gsap.from(box, {
  duration: 1,
  scale: 0,
  rotation: 360,
  ease: "back.out(1.7)",
});
box.addEventListener("click", () => {
  gsap.to(box, {
    duration: 0.5,
    scale: 1.2,
    borderRadius: "50%",
    yoyo: true,
    repeat: 1,
    cursor: "pointer",
  });
});

// About section Start
gsap.from(".sub-title-about", {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

gsap.from(".horizontal-about", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

//  animasi mengetik
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".animated-paragraph");
  const text = paragraph.innerHTML;
  paragraph.innerHTML = "";

  // Membuat elemen <span> untuk setiap karakter termasuk spasi
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i] === " " ? " " : text[i];
    paragraph.appendChild(span);
  }

  gsap.to(".animated-paragraph span", {
    opacity: 1,
    duration: 0.6,
    stagger: 0.01,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });
});

// Project Section Project Start
gsap.from(".sub-title-project", {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: ".project",
    start: "top 80%",
  },
});

gsap.from(".horizontal-project", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".project",
    start: "top 80%",
  },
});

gsap.from(".project .text", {
  opacity: 0,
  x: -50,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".project",
    start: "top 80%",
  },
});
// Animate the cards
gsap.utils.toArray(".card").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8 * index,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 70%",
    },
  });
});

// Animate the tools
gsap.utils.toArray(".tool").forEach((tool) => {
  gsap.from(tool, {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: tool,
      start: "top 95%",
    },
  });
});

// Hover effect for cards
gsap.utils.toArray(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
    });
  });
});

// Logo Technologi website
gsap.from(".tech-tool", {
  duration: 1,
  y: 50,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".galery",
    start: "top 100% ",
    once: true,
  },
});

// Galery Section Start
gsap.from(".sub-title-galery", {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: ".galery",
    start: "top 80%",
  },
});

gsap.from(".horizontal-galery", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".galery",
    start: "top 80%",
  },
});
gsap.from(".galery p", {
  opacity: 0,
  x: -50,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".galery",
    start: "top 80%",
  },
});

// Animate the gallery items
gsap.utils.toArray(".item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.2 * index,
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});

// Subtle hover effect for gallery items
gsap.utils.toArray(".item").forEach((item) => {
  const img = item.querySelector("img");
  const caption = item.querySelector("figcaption");

  item.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.5, ease: "power2.out" });
    gsap.to(caption, { y: 0, duration: 0.5, ease: "power2.out" });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(caption, { y: "100%", duration: 0.5, ease: "power2.out" });
  });
});

// Career Section start
gsap.from(".sub-title-career", {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: ".career",
    start: "top 80%",
  },
});

gsap.from(".horizontal-career", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".career",
    start: "top 80%",
  },
});
gsap.from(".career .text", {
  opacity: 0,
  x: -50,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".career",
    start: "top 80%",
  },
});

gsap.from(".career .gradient-cards .card.left_1", {
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".career .gradient-cards .card.left_1",
    start: "top 80%",
  },
});
gsap.from(".career .gradient-cards .card.right_1", {
  duration: 1,
  opacity: 0,
  x: 100,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".career .gradient-cards .card.right_1",
    start: "top 80%",
  },
});
gsap.from(".career .gradient-cards .card.left_2", {
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".career .gradient-cards .card.left_2",
    start: "top 80%",
  },
});
gsap.from(".career .gradient-cards .intern-job.right_2", {
  duration: 1,
  opacity: 0,
  x: 100,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".career .gradient-cards .intern-job.right_2",
    start: "top 80%",
  },
});

// Certificate Section start
gsap.from(".sub-title-certificate", {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: ".certificate",
    start: "top 80%",
  },
});

gsap.from(".horizontal-certificate", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".certificate",
    start: "top 80%",
  },
});
  