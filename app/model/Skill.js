const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SkillSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
})

module.exports = Skill = mongoose.model('skill', SkillSchema)