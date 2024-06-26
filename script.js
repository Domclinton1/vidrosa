function toggleMenu() {
    const menu = document.querySelector('.menuFilho');
    menu.classList.toggle('active');
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const menuPai = document.querySelector('.menuPai');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        menuPai.style.top = "-100px";
    } else {
        // Scrolling up
        menuPai.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('click', function(event) {
    const menu = document.querySelector('.menuFilho');
    const menuHamburguer = document.querySelector('.menuHamburguer');
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Função para fechar o menu quando a página é rolada
function closeMenuOnScroll() {
    var menu = document.getElementById('menuFilho');

    // Verifica se o menu está aberto
    if (menu.classList.contains('active')) {
        // Fecha o menu
        menu.classList.remove('active');
    }
}

// Adiciona um event listener para escutar por rolagens na página
window.addEventListener('scroll', closeMenuOnScroll);

function dev() {
    var click = window.document.querySelectorAll('dev')
    window.open("https://www.domlinksolucoesdigitais.com.br")
}

var orderButtons = document.getElementsByClassName('orderButton')

function openWpp() {

    var click =  window.open("https://wa.me/5531997977466?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
for (var i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', openWpp);
}

function wppOpen() {
    var click = window.document.querySelectorAll('wpp')
    window.open("https://wa.me/5531997977466?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}

function call(){
    window.location.href = 'tel: +55313125129685'
}

function email(){
    var click = window.document.querySelectorAll('email')
    window.location.href = 'mailto:vidrosa.vidracaria@gmail.com';
}
function insta(){
    var click = window.document.querySelectorAll('insta')
    window.open("https://instagram.com/vidrosa_ofc")
}

function inicio(){
    var click = window.document.getElementById('inicio')
    window.location.href = '#banner'
}
function sobre() {
    var click = window.document.getElementById('sobre')
    window.location.href = '#about'
}
function services() {
    var click = window.document.getElementById('services')
    window.location.href = '#serviços'
}
function fotos(){
    window.document.getElementById('fotos')
    window.location.href = '#foto'
}
function localiza() {
    var click = window.document.getElementById('location')
    window.location.href = '#local'
}
function contato(){
    var click = window.document.getElementById('contato')
    window.location.href = '#contact'
}
document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
    const slides = modal.querySelectorAll('.modalslide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    modal.querySelector('#modal-prevBtn').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    modal.querySelector('#modal-nextBtn').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
});

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.coments li');
    var currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].style.display = 'none'; // Oculta o slide atual
      currentSlide = (currentSlide + 1) % slides.length; // Atualiza o índice do próximo slide
      slides[currentSlide].style.display = 'block'; // Exibe o próximo slide
    }
    
    setInterval(nextSlide, 5000); // Altere o intervalo de troca de slide conforme necessário
  });

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});
