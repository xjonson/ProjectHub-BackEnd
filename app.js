const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const passport = require('passport')
const path = require('path')
// const cookieParser = require('cookie-parser');

const app = new express()

// 使用body-parser中间件 要放到 使用router之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 链接mongodb
const mongoUrl = keys.mongoUrl
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(res => {
  console.log('MongoDB Connect!')
}).catch(err => {
  console.error(err);
})

// 路由
const user = require('./app/routes/api/user')
app.use('/api/user', user)
const project = require('./app/routes/api/project')
app.use('/api/project', project)
const msg = require('./app/routes/api/msg')
app.use('/api/msg', msg)
const upload = require('./app/routes/api/upload')
app.use('/api/upload', upload)
const skill = require('./app/routes/api/skill')
app.use('/api/skill', skill)
const dashboard = require('./app/routes/api/dashboard')
app.use('/api/dashboard', dashboard)
const projectStep = require('./app/routes/api/projectStep')
app.use('/api/projectStep', projectStep)


// static
app.use(express.static(path.join(__dirname, 'dist')));

// passport 初始化
app.use(passport.initialize())
// 将passport传递过去
require('./config/passport')(passport)


// listen 端口
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})