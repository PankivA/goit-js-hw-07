import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {

   return `<div class="gallery__item">
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

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onClickModal);


function onClickModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const closeModal = (event) => {
        if (event.key === "Escape" || event.code === "Escape") {
          instance.close();
        }
      }
      
      let instance = basicLightbox.create(`
      <img width="100%" height="100%" src=${event.target.dataset.source}>`, {
        onShow: (instance) => {
            window.addEventListener('keydown', closeModal);
        },
        onClose: (instance) => {window.removeEventListener('keydown', closeModal)}
    })
    
    instance.show()
    }
 
