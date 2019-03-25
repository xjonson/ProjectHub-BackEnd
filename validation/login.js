const Validator = require('validator')
const isEmpty = require('../utils/isEmpty')

module.exports = function validatorLogin(data) {
  let msg = ''

  // 判断是否为空
  data.email = isEmpty(data.email) ? '' : data.email
  data.password = isEmpty(data.password) ? '' : data.password

  if(Validator.isEmpty(data.password)) {
    msg = '密码不能为空'
  }
  if(Validator.isEmpty(data.email)) {
    msg = '邮箱不能为空'
  }

  return {
    msg,
    isValid: isEmpty(msg)
  }
}

