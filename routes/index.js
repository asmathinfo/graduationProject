/**
 * Created by Administrator on 2017/4/21.
 */
const express = require('express');
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

module.exports = router;
