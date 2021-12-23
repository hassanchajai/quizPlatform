import axios from 'axios'
export const api = axios.create({
    baseURL: '/api/v1',
    withCredentials: false,
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*' ,
      "Content-Type": "application/json"
    }
})