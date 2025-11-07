// A função que será chamada ao clicar nos ícones
function setTheme(themeName) {
    // 1. Aplica ou remove a classe 'dark' no body
    if (themeName === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    
    // 2. Salva a preferência do usuário no navegador
    localStorage.setItem('theme', themeName);
}

// Verifica a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('theme');

    // Se houver um tema salvo, aplica
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Opcional: Verifica preferência do sistema, senão define 'light'
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
             setTheme('dark');
        } else {
             setTheme('light');
        }
    }
});