const sliderContainer = document.querySelector('.slider-container');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    sliderContainer.style.transform = `translate(${-100 * index}vw)`;
  });
});
