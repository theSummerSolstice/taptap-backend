const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const NoteSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: 'User',
  },
  contents: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: 'unsorted',
  },
  position: {
    x: Number,
    y: Number,
  },
}, {
  timestamps: true,
});

const SnapshotSchema = new Schema({
  notes: [NoteSchema],
  isSnapshotted: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  timestamps: true,
});

const BoardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: ObjectId,
    ref: 'User',
  },
  authorizedUsers: [{
    type: String,
  }],
  isPublic: {
    type: Boolean,
    required: true,
    default: true,
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  imageSrc: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Graph-paper.svg/768px-Graph-paper.svg.png',
  },
  snapshots: {
    type: [SnapshotSchema],
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Board', BoardSchema);
