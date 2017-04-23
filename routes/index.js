/**
 * Created by Administrator on 2017/4/21.
 */
const express = require('express')

const Commodity = require('../models/commodity')
const User = require('../models/user')

const router = express.Router();

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

// 注册账号，state表示注册状态，1为注册成功，0为注册失败
router.post('/loginUp', (req, res) => {
  User.create(req.body, (err,user) => {
    if (err) {
      res.json({state: '0', msg: '注册失败，请稍后重试'})
    } else {
      // 设置保持登录的session
      req.session.user = {useremail: req.body.email, psw: req.body.psw}
      res.json({state: '1', msg: '注册成功'})
    }
  })
})

//账号登录，state表示登录状态，1为登录成功，0为登录失败
router.post('/loginIn', (req, res) => {
  User.findOne({'email': req.body.email}, 'psw')
    .then(user => {
      if (user.psw === req.body.psw) {
        // 设置保持登录的session
        req.session.user = {useremail: req.body.email, psw: req.body.psw}
        res.json({state: '1', msg: '登录成功'})
      } else {
        res.json({state: '0', msg: '密码错误，请重新输入'})
      }
    })
    .catch(err => {
      res.json({state: '0', msg: '登录失败，请稍后重试'})
    })
})

// 首页，如果账号已经登录则显示账号名
router.get('/home', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user)
    res.json({islogin: true, useremail: req.session.user.useremail})
  } else {
    res.json({islogin: false})
  }
})

// 退出登录，删除cookie
router.get('/loginOut', (req, res) => {
  delete req.session.user;
})

// 发布一件商品
router.post('/publish', (req, res) => {
  //var poster = req.session.user.useremail
  //console.log(req.session.user)
  var option = req.body
  //option.poster = poster
  Commodity.create(option, (err, commodity) => {
    if (err) {
      res.json({state: '0', msg: err})
    } else {
      res.json({state: '1', msg: '发布商品成功'})
    }
  })
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
