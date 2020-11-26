import array from "./gallery-items.js";
console.log(array);

const galleryRef = document.querySelector('ul.js-gallery');

// console.log(galleryRef);
// const galleryItem = images.map(image => 
//  ingredientItemRef = document.createElement('li');
//  galleryRef.insertAdjacentHTML('afterbegin', galleryItemsSet.join(" "));
// galleryRef.classList.add('gallery__item');

let galleryItem;
const createGalleryItem = item => {
    galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    console.log(galleryItem);

    let galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.setAttribute('href', item.original);
    galleryItem.appendChild(galleryLink);

    let galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.setAttribute('src', item.preview);
    galleryImg.setAttribute('data-source', item.original);
    galleryImg.setAttribute('alt', item.description);
    galleryLink.appendChild(galleryImg);


//    console.log(item.original);
  return galleryItem;
};
const galleryList = array.map(item => createGalleryItem(item));
galleryRef.append(...galleryList);