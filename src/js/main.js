document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('menu-hamburguer').addEventListener('click', function() {
        document.querySelector('.menu-nav').classList.toggle('menu-aberto');
    });
});
