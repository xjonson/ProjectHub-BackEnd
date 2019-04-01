const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  // demand_user_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  // },
  demand_user: {
    type: Object,
    required: true
  },
  dev_user: {
    type: Object,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  skills: {
    type: String,
  },
  cycle: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0
  },
  comments: [{
    content: String,
    user: Object,
    create_time: {
      type: String,
      default: Date.now()
    },
  }],
  applys: [{
    user_id: String,
    status: String,
    deadline: Number
  }],
  audit: {
    type: Number,
    default: 0
  },
  create_time: {
    type: String,
    default: Date.now()
  },
  create_date: {
    type: String
  }
})

module.exports = Project = mongoose.model('project', ProjectSchema)