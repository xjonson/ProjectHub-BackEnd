const express = require('express')
const Router = express.Router()
const ProjectStep = require('../../model/ProjectStep')
const resTpl = require('../../../config/resTpl')
const passport = require('passport')

/**
 * @description 获取全部projectStep
 * @method get /api/projectStep/
 */
Router.get('/', (req, res) => {
  ProjectStep.find().then(projectSteps => {
    res.json(resTpl(0, projectSteps, 'projectSteps获取成功'))
  }).catch(err => {
    console.log('获取全部projectStep: ', err);
    throw new Error(err)
  })
})

/**
 * @description 修改projectStep
 * @method patch /api/projectStep/
 */
Router.patch('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const body = req.body
  const _id = req.params._id
  ProjectStep.findOneAndReplace({ _id }, { $set: {
    "data": body,
  } }).then(newProjectStep => {
    res.json(resTpl(0, newProjectStep, 'projectStep修改成功'))
  }).catch(err => {
    console.log('修改projectStep: ', err);
    throw new Error(err)
  })
})

module.exports = Router