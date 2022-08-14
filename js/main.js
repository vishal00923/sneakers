import { products } from './data.js';

const sliderContainer = document.querySelector('.slider-container');
const menuItems = document.querySelectorAll('.menu-item');

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.product-img');
const currentProductTitle = document.querySelector('.product-title');
const currentProductPrice = document.querySelector('.product-price');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // change the current slider
    sliderContainer.style.transform = `translate(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change the product deatails
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = '$' + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((item, index) => {
      item.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((item) => {
  item.addEventListener('click', () => {
    currentProductSizes.forEach((item) => {
      item.style.color = '#000000';
      item.style.backgroundColor = '#f0f8ff';
    });

    item.style.backgroundColor = '#000000';
    item.style.color = '#f0f8ff';
  });
});
