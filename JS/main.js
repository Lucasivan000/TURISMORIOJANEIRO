// Control de Hero foto
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.hero-nav.prev');
const nextBtn = document.querySelector('.hero-nav.next');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});


// control de expericencias
document.querySelectorAll('.experience-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const prev = slider.querySelector('.slide-nav.prev'); // <--- así lo encuentra
  const next = slider.querySelector('.slide-nav.next'); // <--- así lo encuentra
  let current = 0;

  function showSlide(index) {
    slides.forEach((s,i) => s.classList.toggle('active', i === index));
  }

  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});