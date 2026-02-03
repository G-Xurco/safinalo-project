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

document.addEventListener('DOMContentLoaded', () => {
    
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('sticky');
        else header.classList.remove('sticky');
    });

    
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    if(hamburger) {
        hamburger.addEventListener('click', () => nav.classList.toggle('active'));
    }

    
    async function fetchMenu() {
        const menuContainer = document.getElementById('menu-container');
        if(!menuContainer) return;

        const dishProfiles = [
            { name: "Grilled Atlantic Salmon", price: "$24.00" },
            { name: "Classic Italian Carbonara", price: "$18.50" },
            { name: "Wagyu Beef Burger", price: "$21.00" },
            { name: "Wild Mushroom Risotto", price: "$19.00" },
            { name: "Roasted Beet Salad", price: "$14.99" },
            { name: "Prime Ribeye Steak", price: "$32.00" }
        ];

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
            const data = await response.json();

            menuContainer.innerHTML = data.map((item, index) => {
                const dish = dishProfiles[index];
                return `
                    <div class="menu-card" style="background:white; padding:20px; border-radius:15px; border:1px solid #eee;">
                        <h3 style="color:#AD343E;">${dish.name}</h3>
                        <p style="font-size:14px; color:#666; margin:10px 0;">${item.body.slice(0, 70)}...</p> 
                        <span style="font-weight:bold; font-size:18px;">${dish.price}</span>
                    </div>
                `;
            }).join('');
        } catch (error) {
            menuContainer.innerHTML = "<p>Error loading menu.</p>";
        }
    }

    
    fetchMenu();

    
    const regForm = document.getElementById('regForm');
    const message = document.getElementById('form-message');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('username').value.trim();
            const email = document.getElementById('useremail').value.trim();
            const pass = document.getElementById('userpass').value.trim();

            if (name === "" || email === "" || pass === "") {
                message.style.color = "red";
                message.textContent = "Error: All fields are mandatory!";
            } else {
                localStorage.setItem('registeredUser', name);
                message.style.color = "green";
                message.textContent = `Success! Welcome, ${name}.`;
                regForm.reset();
            }
        });
    }

    
    const bookButtons = document.querySelectorAll('.btn-outline, .btn-primary');
    bookButtons.forEach(btn => {
        if(btn.textContent.trim() === "Book A Table") {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); 
                alert("Table booking functionality coming soon! \nFor now, please call us at (414) 857 - 0107");
            });
        }
    });
});