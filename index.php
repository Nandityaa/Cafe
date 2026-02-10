<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Nafa Nanditya | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

    <!-- Theme Toggle Button -->
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <i class="fa-solid fa-sun"></i>
        <i class="fa-solid fa-moon"></i>
    </button>

    <!-- Desktop Navbar -->
    <nav class="navbar-desktop">
        <div class="container">
            <a href="#hero" class="logo">N</a>
            <ul class="nav-links">
                <li><a href="#hero" class="active">Beranda</a></li>
                <li><a href="#about">Tentang</a></li>
                <li><a href="#education">Pendidikan</a></li>
                <li><a href="#projects">Proyek</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>
        </div>
    </nav>

    <!-- Mobile Navbar (Bottom) -->
    <nav class="navbar-mobile">
        <a href="#hero" class="active"><i class="fa-solid fa-house"></i><span>Beranda</span></a>
        <a href="#about"><i class="fa-solid fa-user"></i><span>Tentang</span></a>
        <a href="#education"><i class="fa-solid fa-graduation-cap"></i><span>Pendidikan</span></a>
        <a href="#projects"><i class="fa-solid fa-code"></i><span>Proyek</span></a>
        <a href="#contact"><i class="fa-solid fa-envelope"></i><span>Kontak</span></a>
    </nav>

    <!-- Main Content -->
    <main class="scroll-container">

        <!-- HERO -->
        <section id="hero" class="section hero">
            <div class="hero-container">
                <!-- Left: Text -->
                <div class="hero-text">
                    <h1>Halo, Saya Nafa Nanditya</h1>
                    <p class="subtitle">Web Developer & Mahasiswa RPL</p>
                    <p class="tagline">Saya fokus membangun pengalaman web yang bersih, modern, dan fungsional. Selamat datang di portfolio pribadi saya.</p>
                    <div class="hero-social">
                        <a href="https://instagram.com/nafandityaa._" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://tiktok.com/@nafandityaa" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="mailto:nandityaportofolio@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <!-- Right: Photo -->
                <div class="photo-wrapper">
                    <div class="photo-glass">
                        <img src="assets/img/me3.jpg" alt="Nafa Nanditya" class="hero-photo">
                    </div>
                </div>
            </div>
        </section>

        <!-- ABOUT -->
        <section id="about" class="section">
            <div class="about-wrapper">
                <img src="assets/img/M1.jpg" alt="Foto Nafa" class="about-img">
                <div class="about-text">
                    <h2>Tentang Saya</h2>
                    <p>Nama saya Gede Nafa Nanditya Aristyogi. Saya siswa SMK TI Bali Global Denpasar jurusan Rekayasa Perangkat Lunak (RPL).</p>
                    <p>Saya fokus pada pengembangan web dan aplikasi dengan minat khusus pada desain antarmuka yang bersih dan pengalaman pengguna yang intuitif.</p>
                </div>
            </div>
        </section>

        <!-- EDUCATION -->
        <section id="education" class="section">
            <div class="edu-wrapper">
                <h2>Riwayat Pendidikan</h2>
                <div class="edu-item">
                    <img src="assets/img/smk.png" alt="SMK">
                    <div>
                        <h3>SMK TI Bali Global Denpasar</h3>
                        <p>2023 - Sekarang</p>
                    </div>
                </div>
                <div class="edu-item">
                    <img src="assets/img/smp.png" alt="SMP">
                    <div>
                        <h3>SMPN 3 Sukawati</h3>
                        <p>2020 - 2023</p>
                    </div>
                </div>
                <div class="skills-row">
                    <img src="assets/img/html.png" alt="HTML">
                    <img src="assets/img/css-3.png" alt="CSS">
                    <img src="assets/img/js.png" alt="JavaScript">
                </div>
            </div>
        </section>

        <!-- PROJECTS -->
        <section id="projects" class="section">
            <div class="projects-wrapper">
                <h2>Proyek Saya</h2>
                <div class="project-grid">
                    <a href="https://nandityaa.github.io/tugas1/" target="_blank" class="project-card">
                        <img src="assets/img/tgs1.png" alt="Mini Cinema">
                        <h3>Mini Cinema</h3>
                        <p>Pencarian informasi film menggunakan API TMDb.</p>
                    </a>
                    <a href="https://nandityaa.github.io/tugas2/" target="_blank" class="project-card">
                        <img src="assets/img/tgs2.png" alt="Content Scroll">
                        <h3>Content Scroll</h3>
                        <p>Showcase mobil dari game NFS Most Wanted.</p>
                    </a>
                    <a href="https://nandityaa.github.io/tugas3/" target="_blank" class="project-card">
                        <img src="assets/img/tgs3.png" alt="Kalkulator">
                        <h3>Kalkulator</h3>
                        <p>Aplikasi kalkulator sederhana berbasis web.</p>
                    </a>
                </div>
            </div>
        </section>

        <!-- CONTACT -->
        <section id="contact" class="section contact-wrapper">
            <div class="contact-box">
                <h2>Hubungi Saya</h2>
                <form class="contact-form" id="contactForm">
                    <input type="text" name="nama" placeholder="Nama Lengkap" required>
                    <input type="email" name="email" placeholder="Alamat Email" required>
                    <textarea name="pesan" rows="5" placeholder="Tulis pesan Anda..." required></textarea>
                    <button type="submit" id="submitBtn">Kirim Pesan</button>
                    <p id="formStatus"></p>
                </form>
            </div>
        </section>

    </main>

    <script src="assets/js/script.js"></script>
</body>
</html>
