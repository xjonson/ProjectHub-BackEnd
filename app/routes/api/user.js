const express = require('express')
const Router = express.Router()
const User = require('../../model/User')
const resTpl = require('../../../config/resTpl')
const keys = require('../../../config/keys')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// validate
const validatorReg = require('../../validation/reg')
const validatorLogin = require('../../validation/login')

/**
 * @description 测试
 * @method get
 */
Router.get('/test', (req, res) => {
  res.send('this is user')
})

/**
 * @description 用户注册
 * @method post /api/user/register
 * @argument 
 */
Router.post('/register', (req, res) => {
  const { msg, isValid } = validatorReg(req.body)
  // 不通过
  if (!isValid) return res.json(resTpl(1, null, msg))
  // 通过
  const body = req.body
  // 查询是否有重复邮箱
  User.findOne({ email: body.email }).then(user => {
    // 邮箱已被注册
    if (user) return res.json(resTpl(1, null, '邮箱已被注册'))
    // 创建new user插入数据库
    body.profile.avatar = '/api/upload/default_avatar.png'
    const newUser = new User({
      email: body.email,
      password: body.password,
      role: body.role,
      profile: body.profile,
      create_time: new Date().getTime()
    })
    // 加密密码
    bcrypt.hash(newUser.password, null, null, (err, hash_pwd) => {
      if (err) throw err
      newUser.password = hash_pwd
      // 数据库存储
      newUser.save().then(user => {
        res.json(resTpl(0, user, '注册成功'))
      }).catch(err => {
        console.log(err);
      })
    });

  }).catch(err => {
    console.log(err);
  })
})


/**
 * @description 用户登录
 * @method post /api/user/login
 * @param email
 * @param password
 */
Router.post('/login', (req, res) => {
  const { msg, isValid } = validatorLogin(req.body)
  // 验证失败
  if (!isValid) return res.json(resTpl(1, null, msg))

  const email = req.body.email
  const password = req.body.password
  // 查找用户
  User.findOne({ email }).then(user => {
    // 没找到
    if (!user) return res.json(resTpl(1, null, '用户不存在'))
    // 加密密码匹配
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (!isMatch) return res.json(resTpl(1, null, '密码错误'))
      // 匹配成功 使用jwt生产token
      const rule = { id: user.id, password: user.password }
      const expiresIn = 60 * 60 * 2 // 60秒 * 60 * 2 = 2小时
      jwt.sign(rule, keys.jwtSecret, { expiresIn }, (err, token) => {
        if (err) throw err
        // 生成token
        const data = {
          id: user._id,
          email: user.email,
          profile: user.profile,
          role: user.role,
          token: `Bearer ${token}`
        }
        res.json(resTpl(0, data, '登录成功'))
      })
    })
  }).catch(err => {
    console.log(err);
  })
})


/**
 * @description 获取用户信息
 * @method get /api/user/:uid
 * @access private
 */
Router.get('/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const uid = req.params.uid
  if (uid === 'self') {
    const userInfo = req.user
    res.json(resTpl(0, userInfo, '获取成功'))
  } else {
    User.findOne({ _id: uid }).then(userInfo => {
      res.json(resTpl(0, userInfo, '获取成功'))
    })
  }
})


/**
 * @description 获取全部用户
 * @method get /api/user/
 * @access private
 */
Router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.find().then(users => {
    res.json(resTpl(0, users, '获取成功'))
  }).catch(err => {
    console.log(err)
  })
})

/**
 * @description 添加/修改用户信息
 * @method patch /api/user/:uid
 * @access private
 */
Router.patch('/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const uid = req.params.uid
  const body = req.body
  // 给用户推送信息
  if (body.newMsg) {
    User.findOneAndUpdate({ _id: uid }, { $push: { "msgs": body.newMsg } }, { new: true }).then(user => {
      if (!user) return res.json(resTpl(1, null, '没有找到用户信息'))
      res.json(resTpl(0, user, '信息推送成功'))
    }).catch(err => {
      console.log(err);
    })
  }
  // 更新用户信息
  else {
    User.findOneAndUpdate({ _id: uid }, { $set: body }, { new: true }).then(user => {
      if (!user) return res.json(resTpl(1, null, '没有找到用户信息'))
      const res_user = {
        _id: user.id,
        email: user.email,
        profile: user.profile,
        msgs: user.msgs,
        skill: user.skill
      }
      res.json(resTpl(0, res_user, '编辑成功'))
    })

  }
})



/**
 * @description 用户修改密码
 * @method patch /api/user/password
 * @param password
 */
Router.patch('/password/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const oldPwd = req.body.oldPwd
  let newPwd = req.body.newPwd
  const user = req.user
  // 加密密码匹配
  bcrypt.compare(oldPwd, user.password, (err, isMatch) => {
    if (!isMatch) return res.json(resTpl(1, null, '原密码错误'))
    // 加密密码
    if (err) throw err
    bcrypt.hash(newPwd, null, null, (err, hash_pwd) => {
      if (err) throw err
      newPwd = hash_pwd
      // 更新密码
      User.findOneAndUpdate({ _id: user._id }, { $set: { 'password': newPwd } }, { new: true }).then(newUser => {
        res.json(resTpl(0, newUser, '密码修改成功'))
      }).catch(err => {
        console.log(err);
      })
    });
  })
})


module.exports = Router