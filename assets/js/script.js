document.addEventListener('DOMContentLoaded', () => {
  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');
  let isSubmitting = false;

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Prevent double submit
      if (isSubmitting) return;
      isSubmitting = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Mengirim...';
      formStatus.textContent = '';
      formStatus.style.color = '';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('api/submit_contact.php', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.status === 'success') {
          formStatus.textContent = result.message;
          formStatus.style.color = '#4ade80';
          contactForm.reset();
          submitBtn.textContent = 'Terkirim ✓';
          // Keep disabled after success
        } else {
          formStatus.textContent = result.message;
          formStatus.style.color = '#f87171';
          // Re-enable on error
          isSubmitting = false;
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim Pesan';
        }
      } catch (error) {
        console.error('Error:', error);
        formStatus.textContent = 'Gagal terhubung ke server.';
        formStatus.style.color = '#f87171';
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pesan';
      }
    });
  }

  // --- Active Link Highlight (ScrollSpy) ---
  const sections = document.querySelectorAll('section');
  const desktopLinks = document.querySelectorAll('.nav-links a');
  const mobileLinks = document.querySelectorAll('.navbar-mobile a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Theme Toggle (Dark/Light Mode) ---
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');

      if (currentTheme === 'light') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});