# graduation

> A Vue.js project

## 主要使用到

* vue
* vue-router
* vuex
* sass
* axios
* express
* mongodb
* mongoose

## 启动项目步骤

1.安装项目依赖

```
npm install
```

2.开启mongodb数据库（mongodb安装在E盘，数据库在E:\data，此命令在E盘根路径执行）

```
mongod --dbpath=E:\data
```

3.启动后端，连接数据库

```
nodemon app.js
```

4.启动vue前端界面，浏览器中打开localhost:8080

```
npm run dev
```