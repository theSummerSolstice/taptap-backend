const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const Board = require('../models/Board');

exports.getBoard = async (id) => {
  const board = await Board.findById(id).lean();
  return board;
};

exports.createBoard = async (data) => {
  const newBoard = await Board.create(data);
  return newBoard;
};

exports.updateBoard = async (id, data) => {
  const updatedBoard = await Board.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true },
  );

  return updatedBoard;
};

exports.deleteBoard = async (id) => {
  await Board.findByIdAndRemove(id);
};


exports.updateCurrentNotes = async (id, data) => {
  await Board.findByIdAndUpdate(
    id,
    { $set: data },
  );
};

exports.updateSnapshots = async (id, data) => {
  await Board.findByIdAndUpdate(
    id,
    { $push: data },
  );
};


exports.deleteSnapshots = async (id, index) => {
  await Board.findByIdAndUpdate(
    id,
    {
      $push: {
        snapshots: {
          $each: [],
          $slice: index,
        },
      },
    },
  );
};

exports.sendInviteMail = async (email, id) => {
  const { GOOGLE_USER_EMAIL, GOOGLE_USER_PASSWORD } = process.env;
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: GOOGLE_USER_EMAIL,
      pass: GOOGLE_USER_PASSWORD,
    },
  }));

  const mailOptions = {
    from: GOOGLE_USER_EMAIL,
    to: email,
    subject: 'You are invited to taptap board👻',
    html:
      process.env.NODE_ENV === 'production'
        ? '<p>Please click link below.</p>' +
          '<a href="' + process.env.ORIGIN_URI_PROD + '/board/' + id +'">Accept invitation</a>'
        : '<p>Please click link below.</p>' +
          '<a href="' + process.env.ORIGIN_URI_DEV + '/board/' + id +'">Accept invitation</a>',

  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw new Error(error);
    return info;
  });
};
