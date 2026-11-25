(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal elements as they enter the viewport.
  const revealTargets = document.querySelectorAll('.reveal, .work-card, .about-image');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealTargets.forEach(el => observer.observe(el));
  } else revealTargets.forEach(el => el.classList.add('visible'));

  // Smooth anchor scrolling with eased motion, including a reduced-motion fallback.
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      if (reduced) target.scrollIntoView();
      else {
        const start = window.scrollY, end = target.getBoundingClientRect().top + start;
        const distance = end - start, duration = 1050;
        let startTime;
        const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
        const step = time => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          window.scrollTo(0, start + distance * ease(progress));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
  });

  // Restrained scroll-linked parallax; disabled for touch/reduced-motion users.
  const parallaxItems = [...document.querySelectorAll('.parallax')];
  if (!reduced && window.matchMedia('(min-width: 801px)').matches) {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      parallaxItems.forEach(el => {
        const speed = Number(el.dataset.speed || .08);
        el.style.translate = `0 ${y * speed * -1}px`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }
  // Original portfolio gallery lightbox: arrows, counter, Escape and keyboard navigation.
  const galleryButtons = [...document.querySelectorAll('.gallery-item')];
  const lightbox = document.getElementById('artwork-lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const count = lightbox?.querySelector('.current');
  let activeArtwork = 0;
  function showArtwork(index) {
    if (!galleryButtons.length || !lightbox) return;
    activeArtwork = (index + galleryButtons.length) % galleryButtons.length;
    const thumb = galleryButtons[activeArtwork].querySelector('img');
    lightboxImage.src = thumb.src;
    lightboxImage.alt = thumb.alt;
    count.textContent = String(activeArtwork + 1);
  }
  function openArtwork(index) {
    showArtwork(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }
  function closeArtwork() {
    lightbox?.classList.remove('open');
    lightbox?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }
  galleryButtons.forEach((button, index) => button.addEventListener('click', () => openArtwork(index)));
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeArtwork);
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => showArtwork(activeArtwork - 1));
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => showArtwork(activeArtwork + 1));
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeArtwork(); });
  document.addEventListener('keydown', event => {
    if (!lightbox?.classList.contains('open')) return;
    if (event.key === 'Escape') closeArtwork();
    if (event.key === 'ArrowLeft') showArtwork(activeArtwork - 1);
    if (event.key === 'ArrowRight') showArtwork(activeArtwork + 1);
  });
})();
