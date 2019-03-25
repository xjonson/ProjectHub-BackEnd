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
  profile: {
    avatar: {
      type: String,
    },
  },
  create_time: {
    type: Number,
    detfaul: Date.now()
  }
})

const User = mongoose.model('user', UserSchema)
module.exports = User