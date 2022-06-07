const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '貼文姓名未填寫'],
    },
    email: {
      type: String,
      required: [true, '電子郵件未填寫'],
    },
    photo: String,
  },
  {
    collection: 'user',
    versionKey: false,
  },
);
const User = mongoose.model('user', userSchema);

module.exports = User;
