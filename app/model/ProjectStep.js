const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectStepSchema = new Schema({
  type: {
    type: String,
  },
  data: [{
    title: String,
    key: String,
    children: [{
      title: String,
      key: String,
      children: [{
        title: String,
        key: String,
        isLeaf: Boolean
      }]
    }]
  }],
  // create_time: {
  //   type: String,
  //   default: Date.now()
  // }
})

module.exports = ProjectStep = mongoose.model('projectStep', ProjectStepSchema)