// 初始化
const sequelize = require('sequelize')
const seq = new sequelize('weibo', 'root', '2214380963Wx', {
  host: '112.124.28.77',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000, // 10s之内连接池没有连接时，自动释放连接
  },
})

module.exports = seq
