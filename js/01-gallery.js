import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainerlistEl = document.querySelector(".gallery");

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainerlistEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCards(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview} "
        data-source="${original} "
        alt="${description} "
      />
    </a>
  </div>
     
     `;
    })
    .join("");
}

galleryContainerlistEl.addEventListener("click", (event) => {
  event.preventDefault();
  const bigUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${bigUrl} " width="800" height="600">
`);
  window.addEventListener("keydown", handleEscKeyDown);
  instance.show();

  function handleEscKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleEscKeyDown);
    }
  }
});