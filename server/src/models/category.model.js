// category-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const category = new Schema({
    category: { type: String, required: true },
    created: { type: Date, 'default': Date.now}
  }, {
    timestamps: true
  });

  return mongooseClient.model('category', category);
};
