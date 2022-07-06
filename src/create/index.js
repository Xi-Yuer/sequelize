const { User, Blog } = require('../model/index')

;(async function () {
  // 创建用户
  const zhangsan = await User.create({
    userName: 'lisi',
    password: 123456789,
    nickName: 'lisi',
    gender: 1,
    slogon: '我很好',
  })

  // 创建博客
  const blog = await Blog.create({
    title: '标题',
    content: '内容',
    userId: 1,
  })
})()
