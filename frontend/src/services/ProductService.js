import axios from 'axios';

export function getProducts() {
  return axios.get('http://127.0.0.1:8000/products/')
    .then(response => response.data)
}


export function getCategory(category) {
  return axios.get('http://127.0.0.1:8000/products/' + category)
    .then(response => response.data)
}
