'use strict'


import galleryItems from './app.js'

const refs = {
    galleryContainer: document.querySelector('.js-gallery'),

    lightboxContainer: document.querySelector('.js-lightbox'),

    lightboxImage: document.querySelector('img.lightbox__image'),

    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),

    overlayEL: document.querySelector('.lightbox__overlay'),
     
    bodyEl:  document.body
}
 
function createGalleryItemsMarkUp(items) {
    return items.map(({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}

const galleryItemsEl =  createGalleryItemsMarkUp(galleryItems)
refs.galleryContainer.innerHTML = galleryItemsEl


refs.galleryContainer.addEventListener('click', onOpenModalClick)

function onOpenModalClick (e) {
   e.preventDefault()
       if (!e.target.classList.contains('gallery__image')) {
        return
    }
 
    refs.lightboxContainer.classList.add('is-open')
    refs.lightboxImage.src = e.target.getAttribute('data-source')
    refs.lightboxImage.alt = e.target.alt
  
   window.addEventListener('keydown', onCloseModalKeyDown)
  
   refs.bodyEl.classList.add('noscroll');
}



refs.closeModalBtn.addEventListener('click', onCloseModalClick)

function onCloseModalClick(){
  refs.lightboxContainer.classList.remove('is-open')
  refs.lightboxImage.src = ''
  refs.lightboxImage.alt = ''

  window.removeEventListener('keydown', onCloseModalKeyDown)
  refs.bodyEl.classList.remove('noscroll');
}


refs.overlayEL.addEventListener('click', onOverlayClick)

function onOverlayClick (e) {
  if (e.currentTarget === e.target){
    onCloseModalClick();
  };  
};



function onCloseModalKeyDown(e){
  if(e.code === "Escape")
    onCloseModalClick()
}
  









































































