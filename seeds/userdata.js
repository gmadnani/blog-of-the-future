const { User } = require('../models');

const userdata =
[
  {
    "username": "testuser1",
    "password": "password"
  },
  {
    "username": "testuser2",
    "password": "password"
  },
  {
    "username": "testuser3",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;