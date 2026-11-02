class SiteHeaderES extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="brand-container">
                        <a href="index.html" style="display: flex; align-items: center; gap: 1rem; text-decoration: none; white-space: nowrap; flex-shrink: 0;">
                            <img src="../assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Carson Kane Brand Stamp" class="brand-logo" width="30" height="30">
                            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: nowrap; white-space: nowrap;">
                                <span class="brand-text">CARSON KANE</span>
                                <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: 400; font-family: 'Inter', sans-serif; display: none; margin-top: 3px;" class="desktop-tagline"> | Enseñanza de Inglés y Español</span>
                            </div>
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="index.html" class="nav-item-link">Inicio</a></li>
                        <li><a href="hire.html" class="nav-item-link">Servicios</a></li>
                        <li><a href="methodology.html" class="nav-item-link">Metodología</a></li>
                        <li><a href="contact.html" class="nav-item-link">Contacto</a></li>
                        <li style="margin-left: 0.75rem; border-left: 1px solid var(--border-subtle); padding-left: 0.75rem; white-space: nowrap;">
                            <a href="../index.html">EN</a> <span style="color: var(--border-subtle)">|</span> <a href="../de/index.html">DE</a> <span style="color: var(--border-subtle)">|</span> <a href="index.html" style="color: var(--accent-primary); font-weight: 700;">ES</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;

        const currentPath = window.location.pathname;
        const navLinks = this.querySelectorAll('.nav-item-link');
        
        navLinks.forEach(link => {
            let linkPath = '';
            try {
                linkPath = new URL(link.href, window.location.href).pathname;
            } catch (e) {
                linkPath = link.pathname || '';
            }
            if (currentPath === linkPath || (currentPath.endsWith('/es/') && linkPath.endsWith('/es/index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

class SiteFooterES extends HTMLElement {
    connectedCallback() {
        const rawFile = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
        const currentFile = rawFile.endsWith('.html') ? rawFile : 'index.html';
        const enLink = '../' + currentFile;
        const deLink = '../de/' + currentFile;
        const esLink = currentFile;

        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-content">
                    <img src="../assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Frog Icon" style="max-width: 40px; filter: grayscale(100%) brightness(200%); opacity: 0.5;">
                    <ul class="footer-nav">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="hire.html">Servicios</a></li>
                        <li><a href="methodology.html">Metodología</a></li>
                        <li><a href="contact.html">Contacto</a></li>
                    </ul>
                    <div class="footer-lang-picker">
                        <a href="${enLink}" class="footer-lang-btn">English</a>
                        <span style="opacity: 0.4;">|</span>
                        <a href="${deLink}" class="footer-lang-btn">Deutsch</a>
                        <span style="opacity: 0.4;">|</span>
                        <a href="${esLink}" class="footer-lang-btn active">Español</a>
                    </div>
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">&copy; ${new Date().getFullYear()} Carson Kane. Berlín, Alemania.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeaderES);
customElements.define('site-footer', SiteFooterES);