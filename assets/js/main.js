if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    alert('dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    alert('light');
}