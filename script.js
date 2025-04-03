document.querySelectorAll('.navbar a[href^="#"], .dropdown_menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

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
        return window.innerWidth <= 475 ? 90 : 105 / getPerSlide();
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

window.onscroll = function() {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > window.innerHeight / 2) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", function () {
    let button = document.querySelector(".wa-button");
    if (window.scrollY > 100) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

function zoomImage(img) {
    const modal = document.getElementById("zoomModal");
    const zoomedImage = document.getElementById("zoomedImage");
    
    zoomedImage.src = img.src;
    modal.style.display = "flex";
}

function closeZoom() {
    document.getElementById("zoomModal").style.display = "none";
}

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}