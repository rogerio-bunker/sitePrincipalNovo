function startCarousel() {
  const banner = document.querySelector('.banner');
  const images = banner.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  setInterval(nextImage, 6000);
}

startCarousel();
