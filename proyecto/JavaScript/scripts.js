// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar elementos
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar ul li a");

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
