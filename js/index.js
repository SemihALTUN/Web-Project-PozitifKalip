document.addEventListener('DOMContentLoaded', function() {
    
    // --- REFERANS LOGOLARI KAYDIRMA (INFINITE SCROLL) ---
    const logoContainer = document.querySelector('.ref-logos');

    if (logoContainer) {
        // Sonsuz döngü için mevcut logoların bir kopyasını oluşturup sona ekliyoruz.
        // Bu sayede animasyon başa döndüğünde "zıplama" hissi olmaz.
        const originalContent = logoContainer.innerHTML;
        logoContainer.innerHTML += originalContent;

        // JS ile klonlama yaptığımızı console'dan teyit edebilirsin
        console.log("Referans logoları animasyon için çoğaltıldı.");
    }
});