const express = require('express')
const Router = express.Router()
const resTpl = require('../../../config/resTpl')

const Project = require('../../model/Project')
const passport = require('passport')


/**
 * @description 获取全部项目
 * @method get /api/project
 * @access public
 */
Router.get('/', (req, res) => {
  const query = req.query
  let sql
  if (query.price) {
    sql = {
      price: { $gte: query.min_price, $lte: query.max_price }
    }
  }
  if (+query.cycle) {
    sql = {
      ...sql,
      cycle: +query.cycle
    }
  }
  if (query.skills) {
    sql = {
      ...sql,
      skills: {
        $regex: query.skills
      }
    }
  }
  console.log('sql: ', sql);
  Project.find(sql).then(projects => {
    const res_projects = projects.filter(item => {
      item.comments = [];
      return item
    })
    res.json(resTpl(0, res_projects, '项目列表获取成功'))
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
    res.json(resTpl(0, project, '项目详情获取成功'))
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
  const now = new Date()
  const now_date = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
  const newProject = new Project({
    ...body,
    demand_user: {
      _id: req.user._id,
      email: req.user.email,
      role: req.user.role,
      profile: req.user.profile,
      create_date: now_date
    }
  })
  newProject.save().then(project => {
    res.json(resTpl(0, project, '创建项目成功'))
  }).catch(err => {
    console.log(err);
  })
})

/**
 * @description 更新项目信息 / 添加评论 / 更新状态
 * @method patch /api/project/:pid
 * @access private
 * @param content 是否是项目
 */
Router.patch('/:pid', passport.authenticate('jwt', { session: false }), (req, res) => {
  const pid = req.params.pid
  const body = req.body
  const user = req.user
  // 如果角色是需求者，则只能发布项目的需求者可以更新、评论
  if (user.role === 2) {
    Project.findOne({ _id: pid }).then(project => {
      if (project.demand_user.email !== user.email) return res.json(resTpl(1, null, '您无法更新或评论其他需求者发布的项目'))
    })
  }
  // 项目评论
  if (body.content) {
    const newComments = {
      content: body.content,
      user: {
        _id: req.user._id,
        email: req.user.email,
        profile: req.user.profile,
        role: req.user.role,
      },
    }
    Project.findOneAndUpdate({ _id: pid }, { $push: { "comments": newComments } }, { new: true }).then(project => {
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '评论成功'))
    }).catch(err => {
      console.log(err);
    })
  }
  // 更新项目状态
  else if (body.status) {
    Project.findOneAndUpdate({ _id: pid }, { $set: { "status": body.status, "dev_user": body.dev_user } }, { new: true }).then(project => {
      console.log('project: ', project);
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '项目状态更新成功'))
    }).catch(err => {
      console.log(err);
    })
  }
  // 更新项目申请人
  else if (body.apply) {
    Project.findOneAndUpdate({ _id: pid }, { $push: { "applys": body.apply } }, { new: true }).then(project => {
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '申请成功'))
    }).catch(err => {
      console.log(err);
    })

  }
  // 更新项目评估——类型
  else if (body.pType) {
    Project.findOneAndUpdate({ _id: pid }, { $set: { "project_type": body.pType } }, { new: true }).then(project => {
      if (!project) return res.json(resTpl(1, null, '没有找到项目信息'))
      res.json(resTpl(0, project, '项目类型设置成功'))
    }).catch(err => {
      console.log(err);
    })
  }
  // 更新项目信息
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
  if (!pid) return res.json(resTpl(1, '', '项目id不存在'))
  // 验证通过
  Project.findOne({ _id: pid }).then(project => {
    if (project) {
      Project.deleteOne({ _id: pid }).then(project => {
        res.json(resTpl(0, '', '项目删除成功'))
      })
    } else {
      // 已删除项目不存在
      res.json(resTpl(0, '', '项目不存在'))
    }
  })
})


module.exports = Router