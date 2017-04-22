/**
 * Created by Administrator on 2017/4/21.
 */
const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity')

// 获取二手商品
router.get('/list', (req,res) => {
  res.json([
    {
      img: 'static/images/list/phone.jpg',
      name: '欧派电动车',
      owner: {
        info: '通信13级',
        name: '张三'
      },
      price: 2500
    },
    {
      img: 'static/images/list/phone.jpg',
      name: '欧派手机',
      owner: {
        info: '外国语13级',
        name: '李四'
      },
      price: 40000
    }]);
})

// 获取二手商品
//router.get('/list', (req, res) => {
//  Commodity.find({})
//           .sort({ updata_at: -1})
//           .then(commoditys => {
//             res.json(commoditys)
//           })
//           .catch(err => {
//             res.json(err)
//           })
//})

// 添加一件商品
//router.post('/publish', (req, res) => {
//  Commodity.create({
//    name: '金立手机',
//    poster: '张三',
//    introdution: '完好无损',
//    place: '西四',
//    contact: 119
//  }, (err, commodity) => {
//    if (err) {
//      res.json(err)
//    } else {
//      res.json(commodity)
//    }
//  })
//})

module.exports = router;
