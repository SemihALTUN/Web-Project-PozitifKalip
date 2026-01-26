document.addEventListener('DOMContentLoaded', function() {
    
    const logoContainer = document.querySelector('.ref-logos');
    if (logoContainer) {
        const originalContent = logoContainer.innerHTML;
        logoContainer.innerHTML += originalContent;
        console.log("Referans logoları animasyon için çoğaltıldı.");
    }

    const textElement = document.querySelector('.hero-content p');
    if (textElement) {
        const phrases = [
            "Yüksek Kalite Kusursuz Hizmet!", 
            "Profesyonel Çözüm Ortağınız", 
            "Teknoloji ile Şekillenen Gelecek"
        ];
        let phraseIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < phrases[phraseIndex].length) {
                textElement.textContent += phrases[phraseIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }

        textElement.textContent = ""; 
        type();
    }

    const kartlar = document.querySelectorAll('.service-card');

    kartlar.forEach(kart => {
        kart.addEventListener('mousemove', (e) => {
            const rect = kart.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ortaX = rect.width / 2;
            const ortaY = rect.height / 2;
            
            const aciX = (y - ortaY) / 15;
            const aciY = -(x - ortaX) / 15;
            
            kart.style.transform = `perspective(1000px) rotateX(${aciX}deg) rotateY(${aciY}deg) scale(1.03)`;
            kart.style.transition = "transform 0.1s ease";
        });
        
        kart.addEventListener('mouseleave', () => {
            kart.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            kart.style.transition = "transform 0.5s ease";
        });
    });

    const iletisimBilgileri = document.querySelectorAll('.footer-col-contact p, .footer-col-contact a');

    iletisimBilgileri.forEach(bilgi => {
        
        if (bilgi.innerText.match(/\d/) || bilgi.innerText.includes('@')) {
            bilgi.style.cursor = "pointer";
            bilgi.title = "Kopyalamak için tıkla";

            bilgi.addEventListener('click', (e) => {
              
                
                navigator.clipboard.writeText(metin).then(() => {
                    const orijinalMetin = bilgi.innerText;
                    const orijinalRenk = bilgi.style.color;

                    bilgi.innerText = "Kopyalandı!";
                    bilgi.style.color = "#ffcc00"; 

                    setTimeout(() => {
                        bilgi.innerText = orijinalMetin;
                        bilgi.style.color = orijinalRenk;
                    }, 1500);
                });
            });
        }
    });
});