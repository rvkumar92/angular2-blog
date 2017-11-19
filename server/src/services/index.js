const blogs = require('./blogs/blogs.service.js');
const category = require('./category/category.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(blogs);
  app.configure(category);
};
