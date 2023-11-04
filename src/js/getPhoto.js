import axios from "axios";

export async function getPhoto(search ,page, perPage) {
    
        let res = await axios.get(`https://pixabay.com/api/?key=40315938-f4b95c5c15917d8c0c53825d3&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}&q=${search}`)
            
                console.log(res.data)
               let data = res.data
    return data
}