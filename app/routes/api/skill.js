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
    res.json(resTpl(0, skills, 'skills获取成功'))
  }).catch(err => {
    console.log('获取全部skill: ', err);
    throw new Error(err)
  })
})

/**
 * @description 添加skill
 * @method post /api/skill/
 */
Router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newSkill = new Skill(req.body)
  console.log('newSkill: ', newSkill);
  newSkill.save().then(skill => {
    res.json(resTpl(0, skill, 'skill添加成功'))
  }).catch(err => {
    console.log('添加skill: ', err);
    throw new Error(err)
  })
})

/**
 * @description 修改skill
 * @method patch /api/skill/
 */
Router.patch('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const body = req.body
  const _id = req.params._id
  Skill.findOneAndUpdate({ _id }, { $set: body }).then(newSkill => {
    res.json(resTpl(0, newSkill, 'skill修改成功'))
  }).catch(err => {
    console.log('修改skill: ', err);
    throw new Error(err)
  })
})

/**
 * @description 删除skill
 * @method delete /api/skill/
 */
Router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const body = req.body
  const _id = req.params._id
  Skill.deleteOne({ _id }).then(res1 => {
    res.json(resTpl(0, res1, 'skill删除成功'))
  }).catch(err => {
    console.log('删除skill: ', err);
    throw new Error(err)
  })
})
module.exports = Router