const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: Number,
    required: true,
  },
  profile: {
    avatar: {
      type: String,
      require: false
    },
    name: {
      type: String,
      require: false
    },
    phone: {
      type: String,
      require: false
    },
    desc: {
      type: String,
      require: false
    }
  },
  msgs: [{
    // 项目id
    project_id: {
      type: String,
      require: true
    },
    // 在项目的评论
    project_msg_id: {
      type: String,
      require: true
    },
    // 来自user
    from_user: Object,
    content: {
      type: String,
      require: true
    },
    // 是否已读
    checked: {
      type: Boolean,
      default: false,
    },
    // 是否是可操作信息
    isAction: {
      type: Boolean,
      default: false,
    },
    // 4种操作
    action: {
      type: Number,
      require: false
    },
    create_time: {
      type: String,
      default: Date.now()
    },
  }],
  skill: String,
  create_time: {
    type: Number,
    detfaul: Date.now()
  }
})

const User = mongoose.model('user', UserSchema)
module.exports = User