import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

export async function getItems(category){
    // return await axios.get('/items?page=`${2}`');
    return await axios.get(`/items?category=${category}`);
}
