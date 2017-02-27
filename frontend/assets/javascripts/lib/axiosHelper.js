import axios from 'axios'

const axiosHelper = axios.create({
  timeout: 5000,
  headers: {'X-CSRF-Token': document.getElementsByName("csrf-token")[0].getAttribute("content")}
})

export default axiosHelper