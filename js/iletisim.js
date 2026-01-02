document.addEventListener('DOMContentLoaded', function() {
    
    // --- İLETİŞİM FORMU KONTROLÜ ---
    const contactForm = document.querySelector('.contact-form-new');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Sayfanın yenilenmesini durdur

            const isim = document.querySelector('input[name="isim"]').value.trim();
            const telefon = document.querySelector('input[name="telefon"]').value.trim();
            const mesaj = document.querySelector('textarea[name="mesaj"]').value.trim();

            // Boş alan kontrolü
            if (isim === "" || telefon === "" || mesaj === "") {
                alert("Lütfen tüm zorunlu alanları doldurunuz!");
                return;
            }

            // Basit telefon uzunluk kontrolü
            if (telefon.length < 10) {
                alert("Lütfen geçerli bir telefon numarası giriniz.");
                return;
            }

            // Başarılı mesajı
            alert("Mesajınız başarıyla alındı! Teşekkürler " + isim + ".");
            contactForm.reset(); // Formu temizle
        });
    }
});