const { Blog, User } = require('../model')

!(async () => {
    
//   const deleteRes = await Blog.destroy({
//     where: {
//       id: 1,
//     },
//   })
//   console.log(deleteRes)

  const deleteUserRes = await User.destroy({
    where: {
      id: 1,
    },
  })
  console.log(deleteUserRes)
})()
