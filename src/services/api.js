import axios from 'axios';

const api = axios.create({
    //Aqui você colocar o IP que mostra quando você executa o expo start
    baseURL: 'http://192.168.1.115:8000/api/v1/',
})

export default api;