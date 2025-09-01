const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

// Burger menu toggle
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Hide menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 800) {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  });
});

// Hide menu when clicking outside (mobile)
document.addEventListener('click', (event) => {
  if(window.innerWidth <= 800 && navLinks.classList.contains('active')) {
    if(!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  }
});

// Mobile dropdown toggle for "Crypto"
document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('click', function(e) {
    if(window.innerWidth <= 800) {
      const dropdown = this.querySelector('.dropdown');
      if(dropdown) {
        e.preventDefault(); // prevent link jump
        this.classList.toggle('active');
      }
    }
  });
});

// Dark theme toggle
function setTheme(dark) {
  if(dark) {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}
themeToggle.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});
if(localStorage.getItem("theme") === "dark") {
  setTheme(true);
}

// Open article function
function openArticle(url) {
  window.open(url, "_blank");
}
