const mongoose = require('mongoose')

const Schema = mongoose.Schema

const now = new Date()
const today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
const DashboardSchema = new Schema({
  date: {
    type: String,
    default: today
  },
  count: {
    type: Number,
    default: 0
  },
  create_time: {
    type: String,
    default: Date.now()
  }
})

module.exports = Dashboard = mongoose.model('dashboard', DashboardSchema)