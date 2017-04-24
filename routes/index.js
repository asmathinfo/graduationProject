/**
 * Created by Administrator on 2017/4/21.
 */
const express = require('express')

const Commodity = require('../models/commodity')
const User = require('../models/user')

const router = express.Router();

// 注册账号，检查是否已经注册过，state表示注册状态，1为注册成功，0为注册失败
router.post('/loginUp', (req, res) => {
  User.findOne({'email': req.body.email})
    .then(user => {
      if (user === null) {
        User.create(req.body, (err,user) => {
          if (err) {
            res.json({state: '0', msg: '注册失败，请稍后重试'})
          } else {
            // 设置保持登录的session
            req.session.user = {useremail: req.body.email, psw: req.body.psw}
            res.json({state: '1', msg: '注册成功'})
          }
        })
      } else {
        res.json({state: '0', msg: '注册失败，该账号已存在'})
      }
    })
    .catch(err => {
      res.json({state: '0', msg: '注册失败，请稍后重试'})
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
  var poster = req.session.user.useremail
  var option = req.body
  option.poster = poster
  Commodity.create(option, (err, commodity) => {
    if (err) {
      res.json({state: '0', msg: err})
    } else {
      res.json({state: '1', msg: '发布商品成功'})
    }
  })
})

// 获取首页的所有商品，state为1表示获取成功，为0表示获取失败d
router.get('/list', (req, res) => {
  Commodity.find({}, '_id name poster price')
    .then(commodity => {
      var commodityItems = []
      commodity.forEach(item => {
        commodityItems.push({
          id: item._id,
          name: item.name,
          poster: item.poster,
          price: item.price
        })
      })
      console.log(commodityItems)
      res.json({commodityItems: commodityItems})
    })
    .catch(err => {
      res.json({state: '0', msg: '获取商品失败，请稍后重试'})
    })
})


module.exports = router;
