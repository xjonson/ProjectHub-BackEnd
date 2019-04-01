const express = require('express')
const Router = express.Router()
const Msg = require('../../model/Msg')
const resTpl = require('../../../config/resTpl')
const keys = require('../../../config/keys')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const Dashobard = require('../../model/Dashobard')

/**
 * @description 获取统计页面数据
 * @method get /api/dashboard/
 */
Router.get('/', (req, res) => {
  Dashobard.find().then(datas => {
    res.json(resTpl(0, datas, '获取成功'))
  }).catch(err => console.log(err))
})


/**
 * @description 更新统计页面数据
 * @method post /api/dashboard/
 */
Router.post('/', (req, res) => {
  const now = new Date()
  const date = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
  Dashobard.findOne({ date }).then(today => {
    if (today) {
      Dashobard.update({ date }, { $set: { 'count': today.count + 1 } }, { new: true }).then(data => {
        res.json(resTpl(0, data, '获取成功'))
      })
    } else {
      const newDashboard = new Dashobard({
        count: 0,
        date,
        create_time: Date.now()
      })
      newDashboard.save().then(data => {
        res.json(resTpl(0, null, '记录成功'))
      }).catch(err => console.log(err))
    }
  })
})

module.exports = Router