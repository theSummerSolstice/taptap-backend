const Board = require('../models/Board');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

exports.createBoard = async (boardInfo) => {
  const newBoard = await Board.create(boardInfo);
  return newBoard;
};

exports.getBoard = async (boardId) => {
  const board = await Board.findById(boardId);
  return board;
};

exports.updateBoard = async (id, data) => {
  await Board.findByIdAndUpdate(
    id,
    { $set: { authorizedUsers: data } },
  );
};

exports.deleteBoard = async (id) => {
  await Board.findByIdAndRemove(id);
};

exports.sendInviteMail = async (email, boardId) => {
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
      '<p>Please click link below.</p>' +
      '<a href="http://localhost:3000/board/' + boardId + '&email=' + email + '">Accept invitation</a>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw new Error(error);
    return info;
  });
};
