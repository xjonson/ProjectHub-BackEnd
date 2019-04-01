const express = require('express')
const Router = express.Router()
const Msg = require('../../model/Msg')
const resTpl = require('../../../config/resTpl')
const keys = require('../../../config/keys')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

/**
 * @description 获取用户信息
 * @method get /api/msg/
 */
Router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Msg.find().then(msgs => {
    const uid = req.user._id
    const res_msgs = msgs.filter(item => item.user_id + '' == uid + '')
    res.json(resTpl(0, res_msgs, '消息获取成功'))
  }).catch(err => {
    console.log('err: ', err);
    throw new Error(err)
  })
})

/**
 * @description 给用户发信息
 * @method post /api/msg/
 */
Router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const body = req.body
  const newMsg = new Msg({
    ...body,
    from_user: {
      _id: req.user._id,
      profile: req.user.profile,
      email: req.user.email,
      role: req.user.role
    }
  })
  console.log('newMsg: ', newMsg);
  newMsg.save().then(msg => {
    console.log('msg: ', msg);
    res.json(resTpl(0, msg, '消息推送成功'))
  }).catch(err => {
    console.log('err: ', err);
    throw new Error(err)
  })
})

/**
 * @description 消息已读
 * @method patch /api/msg/:mid
 */
Router.patch('/:mid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const mid = req.params.mid

  Msg.findOne({ _id: mid }).then(msg => {
    console.log('msg: ', msg);
    console.log('req.user: ', req.user);
    if (msg.user_id + '' !== req.user._id + '') return res.json(resTpl(1, null, '您没有访问权限'))

    Msg.updateOne({ _id: mid }, { $set: { "checked": true } }, { new: true }).then(newMsg => {
      console.log('newMsg: ', newMsg);
      res.json(resTpl(0, newMsg, '消息已读'))
    }).catch(err => {
      console.log('err: ', err);
      throw new Error(err)
    })
  }).catch(err => {
    res.json(resTpl(1, null, '未找到消息'))
    console.log('err: ', err);
  })
})

/**
 * @description 删除已读消息
 * @method delete /api/msg/:uid
 */
Router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const uid = req.user._id
  Msg.deleteMany({ user_id: uid, checked: true }).then(msgs => {
    console.log('msgs: ', msgs);
    res.json(resTpl(0, null, '删除成功'))
  }).catch(err => {
    console.log('err: ', err);
    throw new Error(err)
  })
})



module.exports = Router