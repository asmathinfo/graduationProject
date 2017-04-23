const mongoose = require('mongoose')

const commoditySchema = mongoose.Schema({
  name: {type:String, required: true},
  poster: String,
  detail: String,
  place: String,
  bargain: String,
  tel: Number,
  qq: Number,
  created_at: {type: Date, default: Date.now},
  updata_at: {type: Date, default: Date.now}
})

const Commodity = module.exports = mongoose.model('Commodity', commoditySchema)
