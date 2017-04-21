/**
 * Created by Administrator on 2017/4/19.
 */
const express = require('express')
const mongoose = require('mongoose')
const index = require('./routes/index')

const app = express()

//app.use('/', (req, res) => {
//  res.json({name: '111', price: '3000'})
//})

app.use('/api', index)

app.listen(3000, () => {
  console.log('listening on port 3000')
})

module.exports = app
