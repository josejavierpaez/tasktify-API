const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    isActive: {
      type: Boolean,
      default: true,
      required: [true, 'The user must have have a is active statsu'],
    },
    firstName: {
      type: String,
      minlength: 1,
      required: [true, 'the user must have have a firstName'],
    },
    lastName: {
      type: String,
      minlength: 1,
      required: [true, 'the user must havehave a lastName'],
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    email: {
      type: String,
      minlength: 1,
      required: [true, 'the user must have a email'],
    },
    password: {
      type: String,
      maxLength: 60,
      required: [true, 'the user must have password'],
    },
    teamId: {
      type: Array,
    },
    deleteAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('user', userSchema);
