import axios from 'axios'

const apiBook = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api/books',
})

export default apiBook
