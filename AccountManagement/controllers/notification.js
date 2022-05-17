const Notification = require("../models/notification");
const fetch = require('node-fetch');

exports.addnotification = async (req, res) => {
    const notification = new Notification(req.body);
    await notification.save((err,notification) => {
      if (err) {
         res.json(err);
      } else {
         res.json(notification);
      }
    });
  };
exports.test = async (req, res) => {

const response = await fetch('http://localhost:8002/PostHasReservations?idpost=627de24593f2af1a898c4d94');
const data = await response.json();
res.json(data);
}