import Vue from 'Vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const apis = {
  getUsers: (data) => api.get('/users/', data),
  getPosts: (data) => api.get('/posts/', data)
}

export default apis
