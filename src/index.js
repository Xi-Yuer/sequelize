const seq = require('./utils/sequelize')
// 导入模型
require('./model/index')

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

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
