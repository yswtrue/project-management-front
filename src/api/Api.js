import axios from 'axios'

function get (url, data = null) {
  let result = axios.get(
        url,
        data
    )
  return result
}
function post (url, data = null) {
  // var config = {
  //   headers: {'Content-Type': 'application/json; charset=utf-8'}
  // }

  let result = axios.post(
        url,
        data,
        // config
    )
  return result
}

export {
  get,
  post
}
