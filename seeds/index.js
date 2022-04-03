const sequelize = require('../config/config');
const seedUser = require('./userdata');
const seedPost = require('./blogdata');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();