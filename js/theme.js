// Seleciona o input do botão switch
const themeToggle = document.getElementById("input");

// Função para aplicar o tema com base no estado
function applyTheme(isLightTheme) {
  if (isLightTheme) {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light"); // Salva o tema no localStorage
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark"); // Salva o tema no localStorage
  }
}

// Adiciona um listener para o evento de mudança (change)
themeToggle.addEventListener("change", () => {
  const isLightTheme = themeToggle.checked;
  applyTheme(isLightTheme);
});

// Define o tema inicial com base no localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  themeToggle.checked = true; // Marca o switch como ativo
  applyTheme(true);
} else {
  themeToggle.checked = false; // Desmarca o switch
  applyTheme(false);
}
