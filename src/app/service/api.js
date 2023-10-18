import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api/verses/nvi',
})

export default api
