document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            // 'aktif' sınıfını ekleyip çıkararak menüyü aç/kapat
            navList.classList.toggle('aktif');
        });
    }
    const dropdownItems = document.querySelectorAll('.main-nav li.dropdown');

    dropdownItems.forEach(function(item) {
        const link = item.querySelector('a');

        if (link) {
            link.addEventListener('click', function(e) {
                // Sadece mobil görünümde (768px ve altı) çalışsın
                if (window.innerWidth <= 768) {
                    // Eğer içinde .dropdown-menu varsa (yani alt menüsü varsa)
                    if (item.querySelector('.dropdown-menu')) {
                        e.preventDefault(); // Sayfa değiştirmeyi engelle
                        item.classList.toggle('acik'); // 'acik' sınıfını ekle/çıkar
                    }
                }
            });
        }
    });

    // --- 2. YUKARI ÇIK BUTONU ---
    const yukariCikButonu = document.getElementById('yukariCikButonu');

    if (yukariCikButonu) {
        // Başlangıçta gizle
        yukariCikButonu.style.display = 'none';

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                yukariCikButonu.style.display = 'block';
            } else {
                yukariCikButonu.style.display = 'none';
            }
        });

        yukariCikButonu.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});