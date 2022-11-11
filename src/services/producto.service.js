import axios from 'axios';

const baseURL = "http://170.239.85.65:4000/"

export function listProducto(limit){
    return axios.get(`${baseURL}/producto?limit=${limit}`);
}

export function getProducto(url) {
    return axios.get(url).then(res => { return res.data });
}