// Responsive navbar toggle
/*document.querySelector('.menu-toggle').onclick = function() {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
};
// Simple alert for contact form submission (replace with backend in production)
document.querySelector('form').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for contacting!');
  this.reset();
};*/

//Responsive Navbar Toggle

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.onclick = () => {
  navLinks.style.display =
    navLinks.style.display === 'flex' ? 'none' : 'flex';
};

/* -------------------------
   Typing Effect for Hero Role
------------------------- */
const typingElement = document.querySelector('.typing');
const roles = [
  "Aspiring Software Developer",
  "MCA Fresher",
  "Web Developer",
  "Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200); // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // move to next role
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();

/* -------------------------
   Contact Form Submission
------------------------- */
document.querySelector('form').onsubmit = function(e) {
  e.preventDefault();
  alert('✅ Thank you for reaching out! I will get back to you soon.');
  this.reset();
};

/* -------------------------
   Scroll-to-Top Button
------------------------- */
// Create button dynamically
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

