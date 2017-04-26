/**
 * Created by Administrator on 2017/4/23.
 */
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: String,
  psw: String,
  name: String,
  headUrl: String,
  create_at: {type: Date, default: Date.now}
})

const User = module.exports = mongoose.model('User', userSchema)
