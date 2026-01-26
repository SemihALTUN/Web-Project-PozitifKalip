document.addEventListener('DOMContentLoaded', function() {

    const makineBilgiBankasi = {
        'victor': {
            baslik: 'Victor Vcenter-A110',
            ozellikler: [
                'Çalışma Alanı: 1100 x 600 x 600 mm',
                'İş Mili Devri: 10.000 rpm',
                'Tabla Kapasitesi: 1200 x 600 mm',
                'ATC Tipi: 24 İstasyonlu Kol Tipi Magazin',
                'Kontrol Sistemi: Fanuc 0i-MF Plus'
            ],
            detay: 'Hassas kalıp bileşenlerinin dikey işlenmesinde yüksek rijitlik ve yüzey kalitesi sağlar.'
        },
        'wele': {
            baslik: 'Wele VQ1060',
            ozellikler: [
                'Eksen Hareketleri: 1020 / 600 / 600 mm',
                'Maksimum İş Yükü: 800 kg',
                'Hızlı İlerleme Hızları: 36 m/dak (X/Y/Z)',
                'İş Mili Gücü: Yüksek Torklu Motor Sistemi',
                'Gövde Yapısı: Mehanite Döküm'
            ],
            detay: 'Ağır sanayi tipi iş parçaları ve kompleks kalıp formları için ideal çözüm ortağımızdır.'
        },
        'acrobat': {
            baslik: 'Acrobat Kılavuz Çekme',
            ozellikler: [
                'Çalışma Kapasitesi: M3 - M24 arası diş çekme',
                'Erişim Mesafesi: 1100 mm Yarıçap',
                'Motor Tipi: Yüksek Verimli Elektrikli Motor',
                'Pens Sistemi: Hızlı Değiştirilebilir GT24'
            ],
            detay: 'Esnek kol yapısı sayesinde büyük parçalar üzerinde hızlı ve hatasız kılavuz çekme imkanı sunar.'
        },
        'program': {
            baslik: 'Yazılım ve Mühendislik',
            ozellikler: [
                'CAD/CAM: İleri Seviye Modelleme Yazılımları',
                'Simülasyon: Çarpışma ve Verimlilik Analizi',
                'Hassasiyet: Mikron Seviyesinde Tolerans Kontrolü'
            ],
            detay: 'Tasarım aşamasından imalata kadar tüm süreçler lisanslı mühendislik yazılımları ile yönetilir.'
        }
    };

    function detayPaneliniAc(key) {
        const data = makineBilgiBankasi[key];
        if (!data) return;

        const overlay = document.createElement('div');
        overlay.id = 'parkur-detail-overlay';
        overlay.style = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); z-index: 10000;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; transition: opacity 0.4s ease;
        `;

        const box = document.createElement('div');
        box.style = `
            background: #fff; width: 90%; max-width: 500px;
            border-radius: 8px; padding: 30px; position: relative;
            transform: translateY(30px); transition: transform 0.4s ease;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        `;

        const specsHtml = data.ozellikler.map(s => `
            <li style="margin-bottom:10px; padding-left:15px; position:relative; color:#444;">
                <span style="position:absolute; left:0; color:#ffcc00;">▶</span> ${s}
            </li>
        `).join('');

        box.innerHTML = `
            <button id="close-parkur-modal" style="position:absolute; top:15px; right:15px; border:none; background:none; font-size:24px; cursor:pointer; color:#888;">&times;</button>
            <h2 style="margin:0 0 15px 0; color:#111; border-bottom:2px solid #ffcc00; display:inline-block; padding-bottom:5px;">${data.baslik}</h2>
            <p style="font-size:14px; color:#666; line-height:1.6; margin-bottom:20px;">${data.detay}</p>
            <ul style="list-style:none; padding:0; font-size:13px; font-weight:bold;">${specsHtml}</ul>
            <div style="margin-top:25px; text-align:right;">
                <button id="modal-ok-btn" style="background:#ffcc00; color:#000; border:none; padding:10px 30px; border-radius:4px; font-weight:bold; cursor:pointer;">KAPAT</button>
            </div>
        `;

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, 10);

        const kapat = () => {
            overlay.style.opacity = "0";
            box.style.transform = "translateY(30px)";
            setTimeout(() => overlay.remove(), 400);
        };

        document.getElementById('close-parkur-modal').onclick = kapat;
        document.getElementById('modal-ok-btn').onclick = kapat;
        overlay.onclick = (e) => { if (e.target === overlay) kapat(); };
    }

    const imageWrappers = document.querySelectorAll('.about-image-wrapper');
    
    imageWrappers.forEach(wrapper => {
        wrapper.style.cursor = 'pointer';
        wrapper.addEventListener('click', function() {
            const makineId = this.getAttribute('data-makine');
            if (makineId) {
                detayPaneliniAc(makineId);
            }
        });
    });
});