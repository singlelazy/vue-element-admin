import Axios from 'axios';

export const instance = Axios.create({
    baseURL: 'localhost:8080/',
    timeout: 3000
});
