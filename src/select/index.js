const { User, Blog } = require('../model/index')
!(async () => {
  // 查询一条记录
  const zhangsan = await User.findOne({
    where: {
      userName: 'lisi',
    },
  })
//   console.log(zhangsan.dataValues)

  // 查询特定的列数据
  const zhangsanName = await User.findOne({
    attributes: ['userName', 'password'],
    where: {
      userName: 'lisi',
    },
  })
//   console.log(zhangsanName.dataValues)

  // 查询多条记录
  const zhangsanBlogList = await Blog.findAll({
    where: {
      userId: 1,
    },
    order: [['id', 'desc']],
  })
//   console.log(zhangsanBlogList.map(item => item.dataValues))

  // 分页查询
  const zhangsanBlogListPage = await Blog.findAndCountAll({
    limit: 2, // 限制本次查询的数据条数
    offset: 0, // 跳过前 0 条数据
  })
//   console.log(zhangsanBlogListPage.rows.map(item => item.dataValues))

  // 查询总数不考虑分页
  const zhangsanBlogCount = await Blog.findAndCountAll({})
//   console.log(zhangsanBlogCount.count)

  // 查询总数考虑分页
  const zhangsanBlogCountPage = await Blog.findAndCountAll({
    limit: 1,
    offset: 0,
  })
//   console.log(zhangsanBlogCountPage.count)
//   console.log(zhangsanBlogCountPage.rows.map(item => item.dataValues))

  // 连表查询
  const zhangsanBlogListJoin = await Blog.findAndCountAll({
    order: [['id', 'desc']],
    include: [
      {
        as: 'user',
        model: User,
        where: {
          id: 1,
        },
      },
    ],
  })
  console.log(zhangsanBlogListJoin.count)
  console.log(
    zhangsanBlogListJoin.rows.map(item => {
        const blogval = item.dataValues
        const user = blogval.user.dataValues
        blogval.user = user
        return blogval
      })
  )
})()
