// Initializes the `blogs` service on path `/blogs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/blogs.model');
const hooks = require('./blogs.hooks');
const filters = require('./blogs.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'blogs',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/blogs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('blogs');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
