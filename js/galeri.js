document.addEventListener('DOMContentLoaded', function() {

    // --- GALERİ LIGHTBOX (RESİM BÜYÜTME) ---
    const galleryImages = document.querySelectorAll('.tech-item img');

    if (galleryImages.length > 0) {
        // Lightbox elementini oluşturup sayfaya ekle
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox';
        document.body.appendChild(lightboxOverlay);

        const lightboxImg = document.createElement('img');
        lightboxOverlay.appendChild(lightboxImg);

        // Resimlere tıklama olayını ekle
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                lightboxOverlay.classList.add('active');
                lightboxImg.src = this.src; // Tıklanan resmin kaynağını al
            });
        });

        // Lightbox'a tıklayınca kapat
        lightboxOverlay.addEventListener('click', function(e) {
            if (e.target !== lightboxImg) {
                lightboxOverlay.classList.remove('active');
            }
        });
    }
});