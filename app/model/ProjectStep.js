const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectStepSchema = new Schema({
  type: {
    type: String,
  },
  data: [{
    title: String,
    key: String,
    isLeaf: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    children: [{
      title: String,
      key: String,
      isLeaf: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Boolean,
        default: false
      },
      children: [{
        title: String,
        key: String,
        isLeaf: Boolean,
        price: Number
      }]
    }]
  }],
  // create_time: {
  //   type: String,
  //   default: Date.now()
  // }
})

module.exports = ProjectStep = mongoose.model('projectStep', ProjectStepSchema)