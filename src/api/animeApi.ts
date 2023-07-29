import axios from "axios";

export const animeApi = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    // headers: {}
})

export const animeApiV2 = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    // headers: {}
})