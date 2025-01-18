// Seleciona o input do botão switch
const themeToggle = document.getElementById("input");

// Adiciona um listener para o evento de mudança (change)
themeToggle.addEventListener("change", () => {
  // Alterna a classe 'dark-theme' no body com base no estado do checkbox
  if (themeToggle.checked) {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }
});

// Define o tema inicial com base no estado do checkbox
if (themeToggle.checked) {
  document.body.classList.add("light-theme");
} else {
  document.body.classList.add("dark-theme");
}
