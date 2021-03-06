// Initializes the `blogs` service on path `/blogs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/category.model');
const hooks = require('./category.hooks');
const filters = require('./category.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'category',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/category', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('category');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
