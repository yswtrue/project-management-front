import * as Api from './Api'

function getDepartments () {
  let result = Api.get('http://127.0.0.1:8001/department/departments')
  return result
}

function signUp (params) {
  let result = Api.post('http://127.0.0.1:8001/department/sign_up', params)
  return result
}

export {
  getDepartments,
  signUp
}
