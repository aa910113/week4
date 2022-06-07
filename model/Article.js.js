const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, '使用者ID未填寫'],
    },
    message: {
      type: String,
      required: [true, '貼文內容未填寫'],
    },
    date: {
      type: Date,
      default: Date.now,
      // select: false,
    },
    photo: String,
  },
  {
    collection: 'article',
    versionKey: false,
  },
);
const Article = mongoose.model('article', articleSchema);

module.exports = Article;
