const seq = require('../utils/sequelize')
// 导入模型
require('./model/index')
// 注册模型数据表
seq
  .sync({
    force: true,
  })
  .then(() => {
    console.log('sync success')
    process.exit()
  })
  .catch(() => {
    console.log('sync fail')
  })