// script.js for JavaScript interactivity

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Animations using Intersection Observer
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Dynamic Content
const dynamicContent = [
    'Hello, world!',
    'Welcome to the site!',
    'Enjoy your stay!',
    'Check out our features!'
];

const contentHolder = document.getElementById('dynamicContent');
let index = 0;

function updateContent() {
    contentHolder.textContent = dynamicContent[index];
    index = (index + 1) % dynamicContent.length;
}

setInterval(updateContent, 2000);