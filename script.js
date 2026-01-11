const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");
const header = document.getElementById("header");
let lastScroll = 0;

// Abrir menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Fechar ao clicar no overlay
overlay.addEventListener("click", closeMenu);

// Fechar ao clicar em um link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

function dev() {
  var click = window.document.querySelectorAll("dev");
  window.open("https://clintindossites.com.br");
}

function wppOpen() {
  var click = window.document.querySelectorAll("wpp");
  window.open(
    "https://wa.me/5531997977466?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto..."
  );
}

function call() {
  window.location.href = "tel: +553199279-9772";
}

function email() {
  var click = window.document.querySelectorAll("email");
  window.location.href = "mailto:vidrosa.vidracaria@gmail.com";
}
function insta() {
  var click = window.document.querySelectorAll("insta");
  window.open("https://instagram.com/vidrosa_ofc");
}

document.addEventListener("DOMContentLoaded", function () {
  const openModalButtons = document.querySelectorAll(".openModal");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  openModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modalId = button.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach(function (modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  const slides = modal.querySelectorAll(".modalslide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  modal.querySelector("#modal-prevBtn").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  modal.querySelector("#modal-nextBtn").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".coments li");
  var currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].style.display = "none"; // Oculta o slide atual
    currentSlide = (currentSlide + 1) % slides.length; // Atualiza o índice do próximo slide
    slides[currentSlide].style.display = "block"; // Exibe o próximo slide
  }

  setInterval(nextSlide, 5000); // Altere o intervalo de troca de slide conforme necessário
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});

//formulario whatspp
function enviarWhats() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const mensagem = document.getElementById("mensagem").value;

  const telefone = "5531992799772";

  const texto = `Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
Endereço da obra: ${endereco}
Mensagem: ${mensagem}`;

  window.open(
    `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
}
