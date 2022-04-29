import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

	const galleryBox = document.querySelector('.gallery');
const galleryImage = createImgEl(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', galleryImage);
//galleryBox.addEventListener('click', galleryImageModal);

function createImgEl(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        return `
       <a class="gallery__item" href="${original}">
  <img class="gallery__image"  src="${preview}" alt="${description}" />
</a>`;
       
    }).join('');

};
   let lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });