import "simplelightbox/dist/simple-lightbox.min.css";
import { onSearch } from "./js/render";
import { addPages } from "./js/render";

import './style.css'


const form = document.querySelector('.search-form');
const loadMore = document.querySelector('.load-more')

loadMore.classList.add('is-hidden')

form.addEventListener('submit', onSearch)
loadMore.addEventListener('click', addPages)




























// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import { fetchImages } from './js/pixabayApi';

// const elements = {
//     form: document.querySelector('.search-form'),
//     searchInput: document.querySelector('input[name="searchQuery"]'),
// };

// elements.form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//     evt.preventDefault();
//     const formData = new FormData(evt.currentTarget);
//     const cards = formData.getAll('searchQuery');
//     getImages(cards);
// }

// async function getImages(arr) {
//     const promises = arr.map(async card => {
//         const resp = await fetchImages(); 
//         console.log(resp);
//     });
// };



// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import { fetchImages } from './js/pixabayApi';

// const elements = {
//     form: document.querySelector('.search-form'),
//     searchInput: document.querySelector('input[name="searchQuery"]'),
// };

// elements.form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//     evt.preventDefault();
//     const formData = new FormData(evt.currentTarget);
//     const searchQuery = formData.get('searchQuery'); // Возможно, вам нужно использовать `get` вместо `getAll` для получения одного значения.
//     getImages(searchQuery);
// }

// async function getImages(query) {
//     try {
//         const resp = await fetchImages(query);
//         console.log(resp);
//     } catch (error) {
//         console.error(error);
//         Notiflix.Notify.failure('Failed to fetch images.');
//     }
// }





















// const searchForm = document.getElementById('search-form');
// const gallery = document.querySelector('.gallery');
// const loadMoreButton = document.querySelector('.load-more');
// const lightbox = new SimpleLightbox('.gallery a');

// const apiKey = '40315938-f4b95c5c15917d8c0c53825d3';
// let page = 1;
// let currentSearchQuery = '';

// searchForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const searchQuery = e.target.elements.searchQuery.value.trim();
//   if (searchQuery === currentSearchQuery) return;

//   currentSearchQuery = searchQuery;
//   page = 1;
//   gallery.innerHTML = '';
//   searchImages(searchQuery, page);
// });

// loadMoreButton.addEventListener('click', () => {
//   page += 1;
//   searchImages(currentSearchQuery, page);
// });

// async function searchImages(query, page) {
//   loadMoreButton.disabled = true;
//   try {
//     const response = await axios.get('https://pixabay.com/api/', {
//       params: {
//         key: apiKey,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 20,
//         page: page,
//       },
//     });
//     const { data } = response;

//     if (data.hits.length === 0) {
//       Notiflix.Notify.failure(
//         "Sorry, there are no images matching your search query. Please try again."
//       );
//     } else {
//       data.hits.forEach(image => {
//         const card = createImageCard(image);
//         gallery.appendChild(card);
//       });
//     }

//     if (data.hits.length === 20) {
//       loadMoreButton.disabled = false;
//     } else {
//       Notiflix.Notify.info("We've reached the end of search results.");
//       loadMoreButton.style.display = 'none';
//     }
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     Notiflix.Notify.failure('Something went wrong. Please try again later.');
//   }
// }

// function createImageCard(image) {
//   const card = document.createElement('div');
//   card.classList.add('photo-card');
//   const cardLink = document.createElement('a');
//   cardLink.href = image.largeImageURL;
//   cardLink.classList.add('gallery-item');
//   cardLink.setAttribute('data-lightbox', 'gallery');

//   const img = document.createElement('img');
//   img.src = image.webformatURL;
//   img.alt = image.tags;
//   img.loading = 'lazy';

//   const infoDiv = document.createElement('div');
//   infoDiv.classList.add('info');
//   const likes = createInfoItem('Likes', image.likes);
//   const views = createInfoItem('Views', image.views);
//   const comments = createInfoItem('Comments', image.comments);
//   const downloads = createInfoItem('Downloads', image.downloads);

//   infoDiv.appendChild(likes);
//   infoDiv.appendChild(views);
//   infoDiv.appendChild(comments);
//   infoDiv.appendChild(downloads);

//   cardLink.appendChild(img);
//   card.appendChild(cardLink);
//   card.appendChild(infoDiv);

//   return card;
// }

// function createInfoItem(label, value) {
//   const p = document.createElement('p');
//   p.classList.add('info-item');
//   p.innerHTML = `<b>${label}:</b> ${value}`;
//   return p;
// }


