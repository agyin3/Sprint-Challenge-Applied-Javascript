/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousels() {
  // Create Elements 

  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  const imgs = [img1, img2, img3, img4];
  let index = 0;
  showSlides(index);

  // Create Structure

  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  // Add Styling 
  
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  // Add Content
  leftBtn.textContent = '<';
  rightBtn.textContent = '>'
  img1.src = '../../assets/carousel/mountains.jpeg';
  img2.src = '../../assets/carousel/computer.jpeg';
  img3.src = '../../assets/carousel/trees.jpeg';
  img4.src = '../../assets/carousel/turntable.jpeg';


  // Add Event Handlers

  leftBtn.addEventListener('click', () => {
    showSlides(index += (-1));
  })

  rightBtn.addEventListener('click', () => {
    showSlides(index += 1);
  })

  function showSlides(n) {
    n > imgs.length ? index = 1 : n < 1 ? index = imgs.length : index
    for(let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = 'none';
    }
    imgs[index - 1].style.display = 'inherit';

  }

  return carousel
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(Carousels());
