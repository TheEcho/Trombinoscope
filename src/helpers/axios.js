import axios from 'axios'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/' : '',
  headers: {
    'content-type': 'application/json',
  },
})
