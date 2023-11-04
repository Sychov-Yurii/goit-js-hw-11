import axios from "axios";

const API_KEY = '40315938-f4b95c5c15917d8c0c53825d3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
    const options = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    const {data} = await axios(`?${options}`);
    return data;
}