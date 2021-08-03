
import { galleryItems } from "./app.js"




const galleryItemsRef = document.querySelector('.js-gallery'); 
const lightboxRef = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

const gallery = galleryItems
  .map(({preview, original, description})=>{
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
          data-source="${original}"
          alt="${description}" />
        </a>
      </li>`
  ;})
  .join('');
console.log(gallery);
galleryItemsRef.insertAdjacentHTML('afterbegin', gallery);


galleryItemsRef.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);
lightboxOverlay.addEventListener('click', onCloseOverlay);
// document.addEventListener("keyup", escapeKeyup);



console.log(onCloseOverlay);


function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  lightboxRef.classList.add('is-open');
    lightboxImageRef.setAttribute('src', e.target.dataset.source);
    lightboxImageRef.setAttribute('alt', e.target.alt);
}

function onCloseModal(e) {
  if (e.target===e.currentTarget){
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.removeAttribute('src');
    lightboxImageRef.removeAttribute('alt');
  }
};



function onCloseOverlay(e) {
 onCloseModal(e)
};
 
document.addEventListener("keyup", function(e){
if (27 === e.isComposing || e.keyCode ) {
   lightboxRef.classList.remove('is-open');
    lightboxImageRef.removeAttribute('src');
    lightboxImageRef.removeAttribute('alt');
} 
  return
});



