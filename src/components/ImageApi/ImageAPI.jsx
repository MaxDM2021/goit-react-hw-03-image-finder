const API_KEY = '29400400-14e1219d1dcdc4068cdd8e581';
const BASE_URL = 'https://pixabay.com/api/';



export function fetchImage(nextName, page) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
    .then((response) => {
      if (response.ok) {
        return  response.json();
        
      }

      return Promise.reject(new Error(`Нет картинки с названием ${nextName}`));
    });
}

const ImageAPI = {fetchImage}

export default ImageAPI;