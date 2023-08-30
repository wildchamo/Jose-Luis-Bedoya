if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const body=document.querySelector('body');

    
    // El usuario tiene habilitado el modo oscuro
    console.log('Modo oscuro habilitado');
    
} else {
    // El usuario no tiene habilitado el modo oscuro
    console.log('Modo oscuro no habilitado');
}