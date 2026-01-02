document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.querySelector('.contact-form-new');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const isim = document.querySelector('input[name="isim"]').value.trim();
            const telefon = document.querySelector('input[name="telefon"]').value.trim();
            const mesaj = document.querySelector('textarea[name="mesaj"]').value.trim();

            if (isim === "" || telefon === "" || mesaj === "") {
                alert("Lütfen tüm zorunlu alanları doldurunuz!");
                return;
            }

            if (telefon.length < 10) {
                alert("Lütfen geçerli bir telefon numarası giriniz.");
                return;
            }

            alert("Mesajınız başarıyla alındı! Teşekkürler " + isim + ".");
            contactForm.reset(); 
        });
    }
});