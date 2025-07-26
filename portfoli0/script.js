        document.addEventListener('DOMContentLoaded', function() {
            // Mobile navigation toggle
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when a link is clicked
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                });
            });

            // Active nav link on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Animate skill bars on scroll
            const skillsSection = document.querySelector('#skills');
            const progressBars = document.querySelectorAll('.progress-bar');

            const skillsObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        progressBars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width') + '%';
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            if (skillsSection) {
                skillsObserver.observe(skillsSection);
            }

            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        });