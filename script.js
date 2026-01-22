document.addEventListener('DOMContentLoaded', () => {
    

    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    
    const bookButtons = document.querySelectorAll('.btn-outline, .btn-primary');
    
    bookButtons.forEach(btn => {
        
        if(btn.textContent.trim() === "Book A Table") {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); 
                alert("Table booking functionality coming soon! \nFor now, please call us at (414) 857 - 0107");
            });
        }
    });

    
    const navLinks = document.querySelectorAll('nav a, .footer-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, 
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    
    const animElements = document.querySelectorAll('.menu-card, .service-card, .about-image');
    animElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});