import axios from 'axios'

function get (url, data = null) {
  let result = axios.get(
        url,
        data
    )
  return result
}
function post (url, data = null) {
  let result = axios.post(
        url,
        data
    )
  return result
}

export {
  get,
  post
}
