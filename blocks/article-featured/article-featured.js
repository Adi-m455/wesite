document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.carousel.slider.block');

  if (!block) return;

  // Skip the first ">>" item
  const allDivs = Array.from(block.children);
  const slides = allDivs.slice(1); // from 2nd div onward
  slides.forEach(div => div.classList.add('slide'));

  // Wrap slides in a .carousel-track
  const track = document.createElement('div');
  track.classList.add('carousel-track');
  slides.forEach(slide => track.appendChild(slide));
  block.appendChild(track);

  // Add navigation buttons
  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-btn next';
  nextBtn.innerHTML = '&#10095;';
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-btn prev';
  prevBtn.innerHTML = '&#10094;';
  block.appendChild(nextBtn);
  block.appendChild(prevBtn);

  let currentIndex = 0;
  const total = slides.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
  });

  updateCarousel();
});
