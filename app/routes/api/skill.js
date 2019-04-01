const express = require('express')
const Router = express.Router()
const Skill = require('../../model/Skill')
const resTpl = require('../../../config/resTpl')
const passport = require('passport')

/**
 * @description 获取全部skill
 * @method get /api/skill/
 */
Router.get('/', (req, res) => {
  Skill.find().then(skills => {
    console.log('skills: ', skills);
    res.json(resTpl(0, skills, 'skills获取成功'))
  }).catch(err => {
    console.log('err: ', err);
    throw new Error(err)
  })
})
module.exports = Router