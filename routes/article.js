const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/article.js');
const multer = require('multer');
const upload = multer({
  limit: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式。'));
    }
    cb(null, true);
  },
});

router.get(
  '/',
  articleControllers.getAllArticle,
);
router.post(
  '/',
  upload.single('image', 'info'),
  articleControllers.postArticle,
);

module.exports = router;
