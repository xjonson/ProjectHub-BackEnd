const mongoose = require('mongoose')

const Schema = mongoose.Schema


const MsgSchema = new Schema({
  user_id: {  // 目标 user_id
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  project_title: {
    type: String,
  },
  from_user: { // 来自user 
    _id: {
      type: String
    },
    email: {
      type: String
    },
    profile: {
      type: Object
    },
    role: {
      type: Number
    }
  },
  project_id: { // 项目id 
    type: String,
    require: true
  },
  project_comment_id: { // 在项目的评论 
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  checked: { // 是否已读 
    type: Boolean,
    default: false,
  },
  isAction: { // 是否是可操作信息 
    type: Boolean,
    default: false,
  },
  action: { // 4种操作 
    type: Number,
    require: false
  },
  create_time: {
    type: String,
    default: new Date()
  }
})

module.exports = Msg = mongoose.model('msg', MsgSchema)