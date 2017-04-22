const mongoose = require('mongoose')

const commoditySchema = mongoose.Schema({
  name: {type:String, required: true},
  poster: String,
  introdution: String,
  place: String,
  contact: Number,
  created_at: {type: Date, default: Date.now},
  updata_at: {type: Date, default: Date.now}
})

const Commodity = module.exports = mongoose.model('Movie', commoditySchema)
