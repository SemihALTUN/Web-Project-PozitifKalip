document.addEventListener('DOMContentLoaded', function() {

    const galleryImages = document.querySelectorAll('.tech-item img');

    if (galleryImages.length > 0) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox';
        document.body.appendChild(lightboxOverlay);

        const lightboxImg = document.createElement('img');
        lightboxOverlay.appendChild(lightboxImg);

        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                lightboxOverlay.classList.add('active');
                lightboxImg.src = this.src; 
            });
        });

        lightboxOverlay.addEventListener('click', function(e) {
            if (e.target !== lightboxImg) {
                lightboxOverlay.classList.remove('active');
            }
        });
    }
});