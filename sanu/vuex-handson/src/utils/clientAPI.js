import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_BASE_URL
})
export default (Vue, { store }) => {
  client.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })

  client.interceptors.response.use((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })

  Vue.clientAPI = Vue.prototype.$clientAPI = client
}
