const { User } = require('../model/index')
!(async () => {
  const updateRes = await User.update(
    // 修改的内容
    {
      nickName: 'zhangsan',
    },
    // 修改条件
    {
      where: {
        userName: 'lisi',
      },
    }
  )
  console.log(updateRes)
})()
