// Carregar o tema preferido do usuário ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    if (localStorage.getItem('theme') === 'dark') {
        toggle.checked = true;
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        toggle.checked = false;
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
});

// Função para alternar entre os temas
document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});