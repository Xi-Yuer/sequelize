const sequelize = require('sequelize')
const seq = require('../utils/sequelize')
// 创建模型对应users表

// 数据表名为users（自动加负数s）并且默认会创建一个id字段，并且自动设置为自增，还会创建一个创建时间（createAt）和更新时间 (updateAt)
const User = seq.define('user', {
  userName: {
    type: sequelize.STRING, // 对应 MySQL 的 varchar(255)
    allowNull: false, // 不允许为空
    unique: true, // 唯一
    validate: {
      len: [3, 20], // 长度限制
    },
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6, 20],
    },
  },
  nickName: {
    type: sequelize.STRING,
    allowNull: true,
    validate: {
      len: [3, 20],
    },
  },
  // 性别
  gender: {
    type: sequelize.STRING,
    defaultValue: 0,
  },
  // 个性签名
  slogon: {
    type: sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
})

// 博客模型
const Blog = seq.define('blog', {
  title: {
    type: sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  content: {
    type: sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  userId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  likeCount: {
    type: sequelize.INTEGER,
    defaultValue: 0,
  },
})

// 关联外键(多对一)
Blog.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
  as: 'user',
})

User.hasMany(Blog, {
  foreignKey: 'userId',
  targetKey: 'id',
  as: 'blogs',
})

module.exports = {
  User,
  Blog,
}
