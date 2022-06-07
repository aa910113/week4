const Users = require('../model/Users');
const users = {
  async getUsers(req, res) {
    const allUsers = await Users.findOne({ _id: '629f5760ad16747026f81aa8' });
    res.send(allUsers);
    res.end();
  },
};

module.exports = users;
