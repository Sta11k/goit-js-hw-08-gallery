
import { galleryItems } from "./app.js"
const elementRefs = {
    galleryRef : document.querySelector('.js-gallery'),
    lightboxRef : document.querySelector('.js-lightbox'),
    lightboxOverlayRef : document.querySelector('lightbox__overlay'),
    lightboxContentRef : document.querySelector('lightbox__content'),
    lightboxImageRef : document.querySelector('lightbox__image'),
}

function creatGallery() {
    const markup = galleryItems.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     
    />
  </a>
</li>`
    ;})
    .join('');
    return markup;

};

console.log(elementRefs.creatGallery);
// galleryItems();

const galleryMarkup = creatGallery(elementRefs.galleryItems);
console.log(galleryMarkup);
elementRefs.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

 elementRefs.galleryRef.addEventListener("click", handleNavClick);
