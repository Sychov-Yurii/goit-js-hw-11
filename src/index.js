import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabayApi';

const elements = {
    form: document.querySelector('.search-form'),
    searchInput: document.querySelector('input[name="searchQuery"]'),
};

elements.form.addEventListener('submit', onSearchCats);



async function onSearchCats() {
    fetchImages()
    // evt.preventDefault()
    // const formData = new FormData (evt.currentTarget);
    // const cats = formData.getAll('searchInput');
    // console.log(cats);
};

// fetchImages()

// async function serviceGetCats(arr) {
//     const API_KEY = '40315938-f4b95c5c15917d8c0c53825d3';
//     const promises = arr.map(async cat => {
//         try {
//             const resp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${cat}&image_type=photo&orientation=horizontal&safesearch=true`);
//             if (resp.ok) {
//                 const data = await resp.json();
//                 console.log(data);
//             } else {
//                 console.error('Error fetching data: ', resp.status);
//             }
//         } catch (error) {
//             console.error('An error occured: ', error);
//         }
//  });
// //  const data = await Promise.allSettled(promises);
// //  const cats = data.filter(({status}) => status === 'fulfilled').map(({value}) => )
// //  console.log(cats);
// }


