const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  myBoards: [{
    type: ObjectId,
    ref: 'Board',
    default: [],
  }],
  authorizedBoards: [{
    type: ObjectId,
    ref: 'Board',
    default: [],
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
