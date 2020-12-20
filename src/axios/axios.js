import axios from 'axios'
let asistance = axios.create({
  baseURL: "http://119.29.116.2:3344"
})

let getData = (url, options) => {
  return asistance(url, options);
}
export {
  axios,
  getData
}