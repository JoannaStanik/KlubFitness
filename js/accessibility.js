let fontSize = 20; // Domyślna wielkość czcionki
let isHighContrast = false;

function increaseFontSize() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
    if (fontSize > 10) {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
}

function toggleHighContrast() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast', isHighContrast);

    const images = document.querySelectorAll('.instructor');
    images.forEach(img => {
        const originalSrc = img.getAttribute('src');
        const contrastSrc = img.getAttribute('data-contrast-src');
        if (isHighContrast) {
            img.setAttribute('data-original-src', originalSrc);
            img.setAttribute('src', contrastSrc);
        } else {
            const originalSrc = img.getAttribute('data-original-src');
            img.setAttribute('src', originalSrc);
        }
    });

    const buttons = document.querySelectorAll('#accessibility-controls button');
    buttons.forEach(button => {
        button.style.backgroundColor = isHighContrast ? '#fff' : '';
        button.style.color = isHighContrast ? '#000' : '';
    });
}
