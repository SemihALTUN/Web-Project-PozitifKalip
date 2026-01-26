document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('aktif');
        });
    }

    const dropdownLink = document.querySelector('.main-nav ul li.dropdown > a');
    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                this.parentElement.classList.toggle('acik');
            }
        });
    }

    const yukariCik = document.getElementById('yukariCikButonu');
    if (yukariCik) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                yukariCik.style.display = 'block';
            } else {
                yukariCik.style.display = 'none';
            }
        });
        yukariCik.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const revealElements = document.querySelectorAll('.reveal, .reveal-left');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aktif');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
document.body.classList.add('loading-active');

window.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.transition = "opacity 0.5s ease";
            loader.style.opacity = "0";
            
            setTimeout(() => {
                loader.style.display = "none";
                document.body.classList.remove('loading-active');
                loader.remove(); 
            }, 500); 
            
        }, 2000); 
    }
});