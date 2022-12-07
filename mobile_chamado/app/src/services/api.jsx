import axios from 'axios';

// http://10.0.2.2:8080

const api = axios.create({
    baseURL:'http://192.168.0.103:8080',
    headers: {
        'Content-Type':'application/json' 
    }
})

export default api;