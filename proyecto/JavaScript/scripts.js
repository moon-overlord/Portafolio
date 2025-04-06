// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar elementos
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar ul li a");

  // Nueva funcionalidad: Cambio de tema
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Función para aplicar el tema
  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  }

  // Detectar el tema inicial
  function detectInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  // Alternar entre temas
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.body.classList.contains("theme-dark")
      ? "light"
      : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });

  // Detectar cambios en las preferencias del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
      }
    });

  // Aplicar el tema inicial
  detectInitialTheme();

  // Toggle del menú al hacer click en el botón
  navbarToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Cerrar el menú al hacer click en un enlace
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});
