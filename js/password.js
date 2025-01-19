const passwordInput = document.getElementById('password');
const togglePasswordCheckbox = document.getElementById('togglePasswordCheckbox');

// Adiciona o evento ao checkbox
togglePasswordCheckbox.addEventListener('change', () => {
    // Alterna o tipo do campo de senha com base no estado do checkbox
    passwordInput.type = togglePasswordCheckbox.checked ? 'text' : 'password';
});
