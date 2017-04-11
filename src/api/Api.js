import axios from 'axios'

function get (url, data = null) {
  let result = axios.get(
        url,
        data
    )
  return result.data
}
function post (url, data = null) {
  let result = axios.post(
        url,
        data
    )
  return result.data
}

export default{
  get,
  post
}
