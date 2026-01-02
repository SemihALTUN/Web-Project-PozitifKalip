document.addEventListener('DOMContentLoaded', function() {
    
    const logoContainer = document.querySelector('.ref-logos');

    if (logoContainer) {
        const originalContent = logoContainer.innerHTML;
        logoContainer.innerHTML += originalContent;

        console.log("Referans logoları animasyon için çoğaltıldı.");
    }
});