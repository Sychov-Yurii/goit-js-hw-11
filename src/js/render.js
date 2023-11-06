import {Notify} from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhoto } from "./getPhoto";
import { createMurkup } from "./createMarkup";


const gallery = document.querySelector('.gallery');

const loadMore = document.querySelector('.load-more')
const perPage = 40;
const url = 'https://pixabay.com/api/';
const api = '40401726-c7a7b8e60d6c4450cbe7a420e';
let page;
let search = '';
let lightbox;
const notifyOptions = { position: 'center-center', timeout: 10000 };


export async function getPhoto(search, page, perPage) {
    try {
        const response = await fetch(`${url}?key=${api}&q=${search}&page=${page}&per_page=${perPage}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from the server. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error; // Re-throw the error to be handled in the calling code
    }
}

export async function onSearch(evt) {
    evt.preventDefault(); // Prevent form submission
    loadMore.classList.add('is-hidden');
    search = evt.currentTarget.searchQuery.value.trim(); // get search value without spaces;

    console.log(search);

    gallery.innerHTML = ''; // clear gallery;

    page = 1;

    if (search === '') {
        Notify.info('What are you looking for?');
        return;
    }

    try {
        const data = await getPhoto(search, page, perPage);
        console.log(data.totalHits, data.hits);
        loadMore.classList.add('is-hidden');
        if (data.totalHits === 0) {
            nothing();
        } else {
            createMurkup(data.hits);
            lightbox = new simpleLightbox('.gallery a', {
                captions: true,
                captionSelector: 'img',
                captionsData: 'alt',
                captionDelay: '250',
                alertErrorMessage: '（╯‵□′）╯︵┴─┴',
                overlay: true,
                overlayOpacity: 0.4,
                navText: ['←', '→'],
            }).refresh();
            scroll();
        }

        if (data.totalHits > perPage) {
            loadMore.classList.remove('is-hidden');
        }
    } catch (error) {
        console.error(error);
        Notify.failure("An error occurred while fetching images.");
        loadMore.classList.add('is-hidden');
    }
}

export async function addPages() {
    page++;
    try {
        const data = await getPhoto(search, page, perPage);
        console.log(data.totalHits, data.hits);
        console.log(Math.ceil(data.totalHits / perPage));

        console.log(page);
        if (Math.ceil(data.totalHits / perPage) === page) {
            Notify.info(`We're sorry, but you've reached the end of search results.`);
            loadMore.classList.add('is-hidden');
        }

        createMurkup(data.hits);
        lightbox = new simpleLightbox('.gallery a', {
            captions: true,
            captionSelector: 'img',
            captionsData: 'alt',
            captionDelay: '250',
            alertErrorMessage: '（╯‵□′）╯︵┴─┴',
            overlay: true,
            overlayOpacity: 0.4,
            navText: ['←', '→'],
        }).refresh();
        scroll();
    } catch (error) {
        console.error(error);
        Notify.failure("An error occurred while fetching images.");
        loadMore.classList.add('is-hidden');
    }
}






























// export function onSearch(evt) {
       
//     evt.preventDefault(); // Prevent form submission
//     loadMore.classList.add('is-hidden')
//     search = evt.currentTarget.searchQuery.value.trim();//get search value without spaces
    
//     console.log(search)
    
//     gallery.innerHTML = '';//clear gallery
    
//     page = 1;
    

//     if (search === '') {
//         Notify.info('What are you looking for?')
//         // alert('!')
//         return
//     }
       
//     getPhoto(search, page, perPage)
        
//         .then(data => {
//             console.log(data.totalHits, data.hits)
//             loadMore.classList.add('is-hidden')
//             if (data.totalHits === 0) {
//                 nothing()
//         }
//             else {
                
//                 createMurkup(data.hits);
//                 lightbox = new simpleLightbox('.gallery a', { 
//                 captions: true,
//                 captionSelector: 'img',
//                 captionsData: 'alt',
//                 captionDelay: '250',
//                 alertErrorMessage: '（╯‵□′）╯︵┴─┴',
//                  overlay: true,
//                 overlayOpacity: 0.4,
//                 navText: ['←','→'],
//                     }).refresh();
//                     scroll()
//             }

//             //load more page
            
//             if (data.totalHits > perPage) {
//                 loadMore.classList.remove('is-hidden')
                
//             }
//     })
     
//         .catch(error => {
//             console.error(error);
//             // Handle the error here, such as displaying a user-friendly error message.
//             Notify.failure("An error occurred while fetching images.");
//             loadMore.classList.add('is-hidden')
//         })
// }
    
// // export async function getPhoto(search, page, perPage) {
// //     try {
// //         const response = await fetch(`${url}?key=${api}&q=${search}&page=${page}&per_page=${perPage}`);
// //         if (!response.ok) {
// //             throw new Error(`Failed to fetch data from the server. Status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         return data;
// //     } catch (error) {
// //         throw error; // Re-throw the error to be handled in the calling code
// //     }
// // }

// export async function addPages() {
//     page++
//     getPhoto(search, page, perPage)
//         .then(data => {
//             console.log(data.totalHits, data.hits)
//             console.log(Math.ceil(data.totalHits / perPage))
            
//             console.log(page)
//             if (Math.ceil(data.totalHits/perPage) === page) {
//                 Notify.info(`We're sorry, but you've reached the end of search results.`)
//                 loadMore.classList.add('is-hidden')
//             }
            
//                 createMurkup(data.hits);
//                 lightbox =new simpleLightbox('.gallery a', {
//                     captions: true,
//                     captionSelector: 'img',
//                     captionsData: 'alt',
//                     captionDelay: '250',
//                     alertErrorMessage: '（╯‵□′）╯︵┴─┴',
//                     overlay: true,
//                     overlayOpacity: 0.4,
//                     navText: ['←', '→'],
//                 }).refresh();
//                 scroll()
            
//         })
//      .catch(error => {
//             console.error(error);
//             // Handle the error here, such as displaying a user-friendly error message.
//          Notify.failure("An error occurred while fetching images.");
//          loadMore.classList.add('is-hidden')
//         })
// }



// function nothing() {
//     Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//     loadMore.classList.add('is-hidden')
// }

// function scroll() {
//     const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();
    
//     // Add a conditional check to determine whether scrolling should occur
//     if (cardHeight * 2 > window.innerHeight) {
//         window.scrollBy({
//             top: cardHeight * 2,
//             behavior: "smooth",
//         });
//     }
// }



