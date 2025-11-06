function setTheme(themeName) {
    // 1. Aplica a classe CSS no body
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
    // Tenta obter o tema salvo
    let savedTheme = localStorage.getItem('theme');

    // Se houver um tema salvo, aplica
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Opcional: Se não houver tema salvo, você pode aplicar o padrão do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
             setTheme('dark');
        } else {
             setTheme('light');
        }
    }
});