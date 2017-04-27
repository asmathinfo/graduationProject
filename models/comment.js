/**
 * Created by Administrator on 2017/4/27.
 */
const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  commodityID: String,
  name: String,
  headUrl: String,
  content: String,
  created_at: {type: Date, default: Date.now},
  updata_at: {type: Date, default: Date.now}
})

const Comment = module.exports = mongoose.model('Comment', commentSchema)
