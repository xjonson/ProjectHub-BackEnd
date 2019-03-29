const express = require('express')
const Router = express.Router()
const resTpl = require('../../config/resTpl')

const Project = require('../../model/Project')
const passport = require('passport')


/**
 * @description 获取全部项目
 * @method get /api/project
 * @access public
 */
Router.get('/', (req, res) => {
  Project.find().then(projects => {
    const res_projects = projects.map(item => {
      item.comments = [];
      // item.id = item._id
      return item
    })
    res.json(resTpl(0, res_projects, '获取成功'))
  }).catch(err => {
    console.log(err);
  })
})


/**
 * @description 获取项目详情
 * @method get /api/project/:pid
 * @access private
 */
Router.get('/:pid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const pid = req.params.pid
  Project.findOne({ _id: pid }).then(project => {
    res.json(resTpl(0, project, '获取成功'))
  }).catch(err => {
    console.log(err);
  })
})


/**
 * @description 创建项目
 * @method POSt /api/project/
 * @access private
 */
Router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const body = req.body
  const newProject = new Project({
    ...body,
    demand_user: req.user
  })
  newProject.save().then(project => {
    res.json(resTpl(0, project, '创建项目成功'))
  }).catch(err => {
    console.log(err);
  })
})

/**
 * @description 更新项目信息 / 添加评论
 * @method PUT /api/project/:pid
 * @access private
 * @param newComments 是否是项目
 */
Router.put('/:pid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const pid = req.params.pid
  const body = req.body
  // 项目
  if (body.newComments) {
    Project.findOneAndUpdate({ _id: pid }, { $push: { "comments": body.newComments } }, { new: true }).then(project => {
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '评论成功'))
    }).catch(err => {
      console.log(err);
    })
  }
  // 更新项目
  else {
    Project.findOneAndUpdate({ _id: pid }, { $set: body }, { new: true }).then(project => {
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '项目更新成功'))
    }).catch(err => {
      console.log(err);
    })

  }
})


/**
 * @description 删除项目
 * @method delete /api/project/:pid
 * @access private
 */
Router.delete('/:pid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const pid = req.params.pid
  if (!pid) res.json(resTpl(1, '', '项目id不存在'))
  // 验证通过
  Project.findOne({ _id: pid }).then(project => {
    if (project) {
      Project.deleteOne({ _id: pid }).then(project => {
        res.json(resTpl(0, '', '删除成功'))
      })
    } else {
      // 已删除项目不存在
      res.json(resTpl(0, '', '项目不存在'))
    }
  })
})


module.exports = Router