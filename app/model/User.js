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
    },
    required: false
  },
  skill: String,
  create_time: {
    type: Number,
    detfaul: Date.now()
  },
  create_date: {
    type: String
  }
})

module.exports = User = mongoose.model('user', UserSchema)