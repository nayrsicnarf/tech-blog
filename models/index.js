const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

// User has many Articles
User.hasMany(Article, {
  foreignKey: 'user_id',
});

// Articles belong to one User
Article.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

// Comments belong to one User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comments belong to one Article
Comment.belongsTo(Article, {
  foreignKey: 'article_id',
});

// Articles has many comments
Article.hasMany(Comment, {
  foreignKey: 'article_id',
});

module.exports = { User, Article, Comment };