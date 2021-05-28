const userModel = require('./model');

module.exports = {
  async getAll() {
    const users = userModel.find({}).exec();
    return users;
  },

  async get({ id, email }) {
    let user;
    if (id) {
      user = await userModel.findById(id).exec();
    }
    if (email) {
      user = await userModel.findOne({ email }).exec();
    }

    return user;
  },

  async any({ id, email }) {
    let user;
    if (id) {
      user = await userModel.find({ id }).exec();
    }
    if (email) {
      user = await userModel.find({ email }).exec();
    }

    return user.length > 0;
  },

  async insert(user, hashedPassword) {
    const newUser = userModel.create({
      user,
      password: hashedPassword,
    });

    return newUser;
  },

  async update(id, user) {
    const userUpdated = await userModel.findByIdAndUpdate(id, { user }).exec();
    return userUpdated;
  },

  async updatePassword(id, user, hashedPassword) {
    const userUpdated = await userModel
      .findByIdAndUpdate(id, {
        ...user,
        password: hashedPassword,
      })
      .exec();
    return userUpdated;
  },

  async delete(id) {
    const userDeleted = await userModel.deleteOne({ id }).exec();
    return userDeleted;
  },
};
