document.addEventListener("DOMContentLoaded", function() { 
  var dateElement = document.getElementById("dates");
 
    // Agrega un evento de escucha para el final de la animación
    dateElement.addEventListener("animationend", function() {
      dateElement.style.transform = "translateY(0)";
      dateElement.style.opacity = "1";

    }); 
});
 

const imageContainers = document.querySelector('.image-container');
const imageView = document.querySelector('.image-view'); 
const listItems = document.querySelectorAll('.item-list');
let firstImageItems = document.querySelectorAll('.image-item.first');
let secondImageItems = document.querySelectorAll('.image-item.second');
let thirdImageItems = document.querySelectorAll('.image-item.third');
let fourthImageItems = document.querySelectorAll('.image-item.fourth');
var currentList = firstImageItems; 

listItems.forEach((item, index) => {
  handleImageItemClick()
  item.addEventListener('click', () => {  
    hideItems([currentList]);
    switch(index){
      case 0: currentList = firstImageItems; break;
      case 1: currentList = secondImageItems; break;
      case 2: currentList = thirdImageItems; break;
      case 3: currentList = fourthImageItems; break;
    } 
     
    showItems([currentList]);
     
    listItems.forEach((listItem, listIndex) => {
      if (listIndex === index) {
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
      }
    });
  });
});

function showItems(arraysOfItems) {
  arraysOfItems.forEach(items => {
    items.forEach(item => {
      item.style.display = 'block';
    });
  });
}

function hideItems(arraysOfItems) {
  arraysOfItems.forEach(items => {
    items.forEach(item => {
      item.style.display = 'none';
    });
  });
}

function handleImageItemClick() {
  document.querySelectorAll('.image-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      const image = getComputedStyle(item).getPropertyValue('background-image'); 
      imageView.style.backgroundImage = image;
    });
  });
}

      document.addEventListener('DOMContentLoaded', function () {
        const sliderContainers = document.querySelectorAll('.slider-container');
    
        sliderContainers.forEach(container => {
            const sliderItems = container.querySelectorAll('.slider-item');
            const sliderButtons = container.querySelectorAll('.button');
    
            class Carousel {
                constructor(container, items, controls) {
                    this.carouselContainer = container;
                    this.carouselItems = [...items];
                    this.carouselControls = controls;
                    this.currentIndex = 0;
                    this.init();
                }
    
                init() {
                    this.addEventListeners();
                }
    
                addEventListeners() {
                    this.carouselControls.forEach(control => {
                        control.addEventListener('click', () => {
                            const direction = control.classList.contains('button-left') ? 'previous' : 'next';
                            this.setCurrentState(direction);
                        });
                    });
                }
    
                setCurrentState(direction) {
                    if (direction === 'next') {
                        this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
                    } else if (direction === 'previous') {
                        this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
                    }
    
                    this.carouselItems.forEach((item, i) => {
                        const newIndex = (i - this.currentIndex + this.carouselItems.length) % this.carouselItems.length + 1;
                        item.classList.remove(...Array.from({ length: this.carouselItems.length }, (_, j) => `slider-item-${j + 1}`));
                        item.classList.add(`slider-item-${newIndex}`);
                    });
                }
            }
    
            new Carousel(container, sliderItems, sliderButtons);
        });
    });
    
 