const slides = document.getElementById('slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const pageCounter = document.getElementById('pageCounter');

const totalSlides = 14;
let current = 0;
let touchStartX = 0;
let touchEndX = 0;

function init() {
  update();
  bindEvents();
  document.querySelectorAll('.slide')[current].classList.add('active');
}

function goTo(index) {
  if (index < 0 || index >= totalSlides) return;
  const slidesEls = document.querySelectorAll('.slide');
  slidesEls[current].classList.remove('active');
  current = index;
  slidesEls[current].classList.add('active');
  update();
}

function next() {
  goTo(current + 1);
}

function prev() {
  goTo(current - 1);
}

function update() {
  slides.style.transform = `translateX(-${current * 100}vw)`;
  progressBar.style.width = `${((current + 1) / totalSlides) * 100}%`;
  pageCounter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === totalSlides - 1;
}

function bindEvents() {
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prev();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(totalSlides - 1);
    }
  });

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  let wheelLock = false;
  document.addEventListener('wheel', (e) => {
    if (wheelLock) return;
    const threshold = 40;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > threshold) {
      e.preventDefault();
      if (e.deltaX > 0) next();
      else prev();
      wheelLock = true;
    } else if (Math.abs(e.deltaY) > threshold) {
      e.preventDefault();
      if (e.deltaY > 0) next();
      else prev();
      wheelLock = true;
    }
    if (wheelLock) {
      setTimeout(() => {
        wheelLock = false;
      }, 700);
    }
  }, { passive: false });
}

function handleSwipe() {
  const threshold = 60;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > threshold) {
    if (diff > 0) next();
    else prev();
  }
}

init();
