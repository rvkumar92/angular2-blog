// blogs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const blogs = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true},
    category: { type: String, required: true},
    articleBody: { type: String, required: true},
    description: { type: String, required: false},
    publishedDate: { type: Date, 'default': Date.now},
  }, {
    timestamps: true
  });

  return mongooseClient.model('blogs', blogs);
};
