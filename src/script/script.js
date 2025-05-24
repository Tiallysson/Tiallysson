
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
})

// Configuração da data de início do contrato (ano, mês-1, dia)
const startDate = new Date(2024, 10, 6);

// Atualiza o contador
function updateCounter() {
    const now = new Date();

    let months;
    months = (now.getFullYear() - startDate.getFullYear()) * 12;
    months += now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
        months--;
    }

    document.getElementById('months').textContent = months + (months === 1 ? " mês" : " meses");
}

updateCounter();
setInterval(updateCounter, 86400000);


// Quando o documento estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Cria uma instância do modal
    var myModal = new bootstrap.Modal(document.getElementById('modalTour'), {
        backdrop: 'static', // Impede que o modal feche ao clicar fora dele
        keyboard: false     // Impede que o modal feche ao pressionar ESC
    });

    // Mostra o modal
    myModal.show();
});
