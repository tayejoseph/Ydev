import axios from 'axios';

// export const VIMB_API = 'https://vimb-api.herokuapp.com';
export const VIMB_API = 'http://54.144.146.65:5000';

export const api_instance = axios.create({
    baseURL: VIMB_API,
});
