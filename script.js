document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Form submission simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<svg class="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
            
            setTimeout(() => {
                btn.innerHTML = 'Message Sent Successfully!';
                btn.classList.replace('bg-blue-600', 'bg-green-600');
                btn.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-blue-600');
                    btn.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
                }, 3000);
            }, 1500);
        });
    }

    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    
    function reveal() {
        var windowHeight = window.innerHeight;
        var elementVisible = 150;
        
        reveals.forEach((reveal) => {
            var elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('animate-fade-in');
                reveal.classList.remove('opacity-0');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load
});
