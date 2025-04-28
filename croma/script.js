
// script.js

  const categoryScroll = document.getElementById('categoryScroll');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const scrollAmount = 200; // adjust scroll distance as needed

  prevBtn.addEventListener('click', () => {
    categoryScroll.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    categoryScroll.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

