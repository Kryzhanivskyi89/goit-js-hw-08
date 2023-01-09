// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");


function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"                
                alt="${description}"
            />
        </a>`;
        }).join('');
    
}
galleryEl.insertAdjacentHTML("afterbegin", galleryItems);

const galleryMarkup = createGallery(galleryItems);
galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", viewImage);
function viewImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }    
};
console.log(galleryEl.addEventListener)

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
