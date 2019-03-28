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
    avatar: String,
    name: String,
    phone: String,
    desc: String
  },
  msgs: [{
    id: String,
    project_id: String,
    project_msg_id: String,
    from_user: {},
    content: String,
    checked: Boolean,
    create_time: String,
    isAction: Boolean,
    action: Number,
  }],
  skill: String,
  create_time: {
    type: Number,
    detfaul: Date.now()
  }
})

const User = mongoose.model('user', UserSchema)
module.exports = User