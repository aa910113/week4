const Article = require('../model/Article.js');
const { ImgurClient } = require('imgur');
const posts = {
  async getAllArticle(req, res) {
    try {
      const articles = await Article.find();
      res.status(200).send(articles);
    } catch (error) {
      res.status(400).send({
        status: 'error',
        error,
      });
    } finally {
      res.end();
    }
  },
  async postArticle(req, res) {
    try {
      const client = new ImgurClient({
        clientId: process.env.IMGUR_CLIENTID,
        clientSecret: process.env.IMGUR_CLIENT_SECRET,
        refreshToken: process.env.IMGUR_REFRESH_TOKEN,
      });
      const response = await client.upload({
        image: req.file.buffer.toString('base64'),
        type: 'base64',
        album: process.env.IMGUR_ALBUM_ID,
      });
      const { body } = req;
      await Article.create({
        userId: body.userId,
        photo: response.data.link,
        message: body.message,
      });
      res.status(200).send({
        status: 'success',
      });
    } catch (error) {
      res.status(400).send({
        status: 'error',
        error,
      });
    } finally {
      res.end();
    }
  },
};

module.exports = posts;
