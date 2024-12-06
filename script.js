document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        { src: 'images/mario_circuit.png', caption: 'Mario Circuit', alt: "Mario Circuit" },
        { src: 'images/rainbow_road.jpg', caption: 'Rainbow Road', alt: "Rainbow Road" },
        { src: 'images/koopa_troopa_beach.jpg', caption: 'Koopa Troopa Beach', alt: "Koopa Troopa Beach" }
    ];
    let currentSlide = 0;
    const slideElement = document.getElementById('slide');
    const captionElement = document.getElementById('slide-caption');

    const updateSlide = () => {
        currentSlide = currentSlide >= slides.length ? 0 : currentSlide;
        slideElement.src = slides[currentSlide].src;
        slideElement.alt = slides[currentSlide].alt;
        captionElement.textContent = slides[currentSlide].caption;
    };

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // Automatically change slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);

    updateSlide();
});
