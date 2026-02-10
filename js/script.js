// Smooth scroll for navbar and dropdown links
document.querySelectorAll('.navbar a[href^="#"], .dropdown_menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close dropdown menu when a link is clicked
        const dropDownMenu = document.querySelector('.dropdown_menu');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        if (dropDownMenu.classList.contains('open')) {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    });
});

// Hero slider
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll('.hero-slider img');
    let index = 0;

    function changeSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    setInterval(changeSlide, 4000);
});

// Review slider (with null checks for prevBtn/nextBtn)
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".review-slider");
    let reviews = document.querySelectorAll(".review-card");
    let index = 0;

    function getPerSlide() {
        return window.innerWidth <= 475 ? 1 : 3;
    }

    function getOffset() {
        return window.innerWidth <= 475 ? 90 : 105 / getPerSlide();
    }

    function updateSlide() {
        let offset = index * getOffset();
        slider.style.transform = `translateX(-${offset}%)`;
    }

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            if (index < reviews.length - getPerSlide()) {
                index++;
            } else {
                index = 0;
            }
            updateSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            if (index > 0) {
                index--;
            } else {
                index = reviews.length - getPerSlide();
            }
            updateSlide();
        });
    }

    window.addEventListener("resize", function () {
        index = 0;
        updateSlide();
    });

    updateSlide();
});

// Navbar scroll effect — add 'scrolled' class on scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const backToTop = document.getElementById("backToTop");
    const waButton = document.querySelector(".wa-button");

    // Navbar background change
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Back to top button
    if (window.scrollY > window.innerHeight / 2) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

    // WhatsApp button
    if (window.scrollY > 100) {
        waButton.classList.add("show");
    } else {
        waButton.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Gallery zoom
function zoomImage(img) {
    const modal = document.getElementById("zoomModal");
    const zoomedImage = document.getElementById("zoomedImage");
    
    zoomedImage.src = img.src;
    modal.style.display = "flex";
}

function closeZoom() {
    document.getElementById("zoomModal").style.display = "none";
}

// Toggle dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};