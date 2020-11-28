import array from "./gallery-items.js";
// console.log(array);

const galleryRef = document.querySelector("ul.js-gallery");

let galleryItem;
const createGalleryItem = (item) => {
  galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  console.log(galleryItem);

  let galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", item.original);
  galleryItem.appendChild(galleryLink);

  let galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.setAttribute("src", item.preview);
  galleryImg.setAttribute("data-source", item.original);
  galleryImg.setAttribute("alt", item.description);
  galleryLink.appendChild(galleryImg);

  return galleryItem;
};
const galleryList = array.map((item) => createGalleryItem(item));
galleryRef.append(...galleryList);

const openModalRef = document.querySelector(".js-lightbox");
const imgModal = document.querySelector("img.lightbox__image");
const closeModalRef = document.querySelector('[data-action="close-lightbox"]');
const backDropRef = document.querySelector(".lightbox__overlay");

galleryRef.addEventListener("click", openModal);
closeModalRef.addEventListener("click", closeModal);
backDropRef.addEventListener("click", closeModal);

// console.log(galleryRef);
function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openModalRef.classList.add("is-open");
  imgModal.src = event.target.dataset.source;
  imgModal.alt = event.target.alt;
  window.addEventListener("keydown", onESCpress);
}

function closeModal(event) {
  openModalRef.classList.remove("is-open");
  imgModal.src = "";
  imgModal.alt = "";
  window.removeEventListener("keydown", onESCpress);
}

function onESCpress(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
