import axios from 'axios'

const API = import.meta.env.VITE_API;
export const api = axios.create({
    baseURL:API+"/api",
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});