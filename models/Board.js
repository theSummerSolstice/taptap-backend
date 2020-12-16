const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId, Mixed } = Schema.Types;

const NoteSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
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
  color: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const SnapshotSchema = new Schema({
  notes: [NoteSchema],
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
  isCategorized: {
    type: Boolean,
    default: false,
  },
  layouts: [{
    type: Mixed,
    get: (data) => {
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    },
    set: (data) => {
      return JSON.stringify(data);
    }
  }],
  imageSrc: {
    type: String,
    default: 'https://doc-0k-8c-docs.googleusercontent.com/docs/securesc/vhccbc5irekbseue1jf1ccg54n0bshh7/t5kpkhufu1dem2uv2el4baaotoke6vi0/1608114600000/08406904874006010201/08406904874006010201/1fa_RHGu_TIdsFjCrMiP26HahA_zXTT_j?e=view&authuser=0&nonce=bnulnk33bvrug&user=08406904874006010201&hash=7tr88idaou3bljcp71t4h0m6jc6v899o',
  },
  currentNotes: {
    type: [NoteSchema],
    default: [],
  },
  snapshots: {
    type: [SnapshotSchema],
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Board', BoardSchema);
