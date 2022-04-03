const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "test1 blog",
    "postContent": "This is the first blog post of test1",
    "userId": 1
  },
  {
    "postTitle": "test2 blog",
    "postContent": "This is the first blog post of test2",
    "userId": 2
  },
  {
    "postTitle": "test3 blog",
    "postContent": "This is the first blog post of test3",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;