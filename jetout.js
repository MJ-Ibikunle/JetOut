const carousel = document.getElementById('carousel');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 3; // 3 slides
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 4000); 