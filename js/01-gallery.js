import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');
const galleryImage = createImgEl(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', galleryImage);
galleryBox.addEventListener('click', galleryImageModal);

function createImgEl(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
       
    }).join('');

};
function galleryImageModal(evt) {
  evt.preventDefault();
  const imageBig = evt.target.classList.contains('gallery__image');
  if (!imageBig) {
    return;
  }
  const imgValue = evt.target;
  let parentImage = imgValue.closest('.gallery__image');
 
  parentImage = basicLightbox.create(`
		<img width="1280" height="800" src="${parentImage.dataset.source}">
	`).show()

}


