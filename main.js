document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Header scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Gallery filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-item-title')?.textContent || '';

    lightboxImage.src = img.src.replace('/800/1000', '/1600/2000'); // larger version
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = title;
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightbox();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Find index among currently visible items
      const visibles = getVisibleItems();
      const idx = visibles.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Contact form (demo)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Для реального использования:
    // 1. Зарегистрируйся на https://formspree.io
    // 2. Создай форму и получи endpoint вида https://formspree.io/f/xxxxxx
    // 3. Добавь action="https://formspree.io/f/xxxxxx" method="POST" к форме

    const name = form.name.value.trim();
    alert(`Спасибо, ${name}! Сообщение принято (это демо). После настройки Formspree письма будут приходить на почту.`);
    form.reset();
  });
});
