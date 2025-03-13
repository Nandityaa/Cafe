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

document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".review-slider");
    let reviews = document.querySelectorAll(".review-card");
    let index = 0;

    function getPerSlide() {
        return window.innerWidth <= 475 ? 1 : 3;
    }

    function getOffset() {
        return window.innerWidth <= 475 ? 92 : 105 / getPerSlide();
    }

    function updateSlide() {
        let offset = index * getOffset();
        slider.style.transform = `translateX(-${offset}%)`;
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
        if (index < reviews.length - getPerSlide()) {
            index++;
        } else {
            index = 0;
        }
        updateSlide();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = reviews.length - getPerSlide();
        }
        updateSlide();
    });

    window.addEventListener("resize", function () {
        index = 0;
        updateSlide();
    });

    updateSlide();
});