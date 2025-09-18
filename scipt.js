// Background Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Image hover effect for tour cards
    const tourCards = document.querySelectorAll('.tour-card');
    tourCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(138, 43, 226, 0.2)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(138, 43, 226, 0.1)';
        });
    });
    
    // Social media icons hover effect
    const socialIcons = document.querySelectorAll('.socials a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});