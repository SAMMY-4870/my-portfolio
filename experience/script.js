// ========== Toggle Navbar ==========
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ========== Scroll Sections Active Link ==========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // ========== Sticky Navbar ==========
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ========== Remove Toggle and Navbar on Scroll ==========
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ========== Scroll Reveal ==========
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.experience .timeline, .experience .quote', { origin: 'top' });
ScrollReveal().reveal('.experience .container.left', { origin: 'left' });
ScrollReveal().reveal('.experience .container.right', { origin: 'right' });
