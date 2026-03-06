/**
 * Skyline GitHub Pages Site - Main JavaScript
 * Handles smooth scrolling, animations, and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScroll();
    initFadeAnimations();
    initNavigation();
    initFAQ();
    initIntersectionObserver();
});

/**
 * Smooth Scroll Implementation
 */
function initSmoothScroll() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just a '#' link
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Fade In Animations on Scroll
 */
function initFadeAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .architecture-item, .benefit-item, .faq-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Navigation Interaction
 */
function initNavigation() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });

    // Active state for navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.opacity = '0.7';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.opacity = '1';
            }
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');

            // Toggle active state on current FAQ item
            answer.classList.toggle('active');

            // Rotate icon
            if (answer.classList.contains('active')) {
                icon.style.transform = 'rotate(135deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }

            // Close other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('.faq-icon');

                    otherAnswer.classList.remove('active');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
        });
    });
}

/**
 * Intersection Observer for section animations
 */
function initIntersectionObserver() {
    const sections = document.querySelectorAll('.section-header, .features-grid, .steps-container, .architecture-grid, .benefits-list');

    const sectionObserverOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(section);
    });
}

/**
 * Copy to clipboard for code examples
 */
function initCopyCode() {
    const codeButtons = document.querySelectorAll('.copy-code-btn');

    codeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.parentElement.querySelector('code');
            const text = codeBlock.innerText;

            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.innerText;
                this.innerText = 'Copied!';

                setTimeout(() => {
                    this.innerText = originalText;
                }, 2000);
            });
        });
    });
}
