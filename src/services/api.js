import axios from 'axios';

const api = axios.create({
    //Aqui você colocar o IP que mostra quando você executa o expo start
    baseURL: 'http://localhost:8000/api/v1/',
})

export default api;