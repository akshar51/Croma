
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


  const companyScroll = document.getElementById('companyScroll');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const scrollamount = 200; // adjust scroll distance as needed

  prevButton.addEventListener('click', () => {
    companyScroll.scrollBy({
      left: -scrollamount,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', () => {
    companyScroll.scrollBy({
      left: scrollamount,
      behavior: 'smooth'
    });
  });

