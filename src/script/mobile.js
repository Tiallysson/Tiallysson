
document.addEventListener("DOMContentLoaded", function () {
    // Inicializa os tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Inicializa os popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnTopo = document.getElementById("back-to-top");

    // Mostrar o botão quando rolar para baixo 100px
    window.onscroll = function () {
        if (window.scrollY > 100) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    };

    // Função para voltar ao topo suavemente
    btnTopo.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
  light.style.left = `${e.pageX}px`;
  light.style.top = `${e.pageY}px`;
});

function carregarVersao() {
    if (window.innerWidth >= 768) {
        window.location.href = "index.html"; // Redireciona para a versão mobile
    }
}
window.onload = carregarVersao;

