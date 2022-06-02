const sequelize = require('../config/connection');
const { User, Article, Comment } = require('../models');

const userData = require('./userSeed.json');
const articleData = require('./articleSeed.json');
const commentData = require('./commentSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Article.bulkCreate(articleData);

  await Comment.bulkCreate(commentData);

  process.exit(0);

};

seedAll();