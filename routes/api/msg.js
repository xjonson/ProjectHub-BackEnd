const express = require('express')
const Router = express.Router()
const resTpl = require('../../config/resTpl')
// 
const User = require('../../model/User')
const Msg = require('../../model/Msg')
// passport 验证token
const passport = require('passport')
// 

/**
 * @description 获取全部留言
 * @method get /api/msg
 * @access public
 */
Router.get('/', (req, res) => {
  Msg.find().then(msg => {

    res.json(resTpl(0, msg, '获取成功'))
  }).catch(err => {
    console.log(err);
  })
})


module.exports = Router