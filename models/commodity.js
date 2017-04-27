const mongoose = require('mongoose')

const commoditySchema = mongoose.Schema({
  name: {type:String, required: true},
  poster: String,
  posterId: String,
  detail: String,
  place: String,
  bargain: String,
  price: Number,
  tel: Number,
  qq: Number,
  headUrl: String,
  posterUrl: String,
  created_at: {type: Date, default: Date.now},
  updata_at: {type: Date, default: Date.now}
})

const Commodity = module.exports = mongoose.model('Commodity', commoditySchema)
