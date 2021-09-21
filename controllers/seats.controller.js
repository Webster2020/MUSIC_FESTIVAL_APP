const Seats = require('../models/seats.model');
const sanitize = require('mongo-sanitize');

exports.getAll = async (req, res) => {
  try {
    res.json(await Seats.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const cleanId = sanitize(req.params.id);

    const seat = await Seats.findById(cleanId);
    if(!seat) res.status(404).json({ message: 'Not found' });
    else res.json(seat);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.newDocument = async (req, res) => {
  try {
    const { day, seat, client, email } = req.body;

    const takenSeat = await Seats.findOne({day: day, seat: seat});

    if (takenSeat) {
        res.json({ message: "This seat is already taken." });
    } else {
      const newSeats = new Seats({ 
          day: day, 
          seat: seat, 
          client: client, 
          email: email 
          });
      await newSeats.save();
      req.io.emit('seatsUpdated', (await Seats.find()));
      res.json({ message: 'OK OK' });
    }

  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.changeDocument = async (req, res) => {
  const { day, seat, client, email } = req.body;

  try {
      const seat = await Seats.findById(req.params.id);
      if(seat) {
          seat.day = day,
          seat.seat = seat,
          seat.client = client,
          seat.email = email;

      await seat.save();
      res.json({ message: 'OK' });
      }
      else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const seat = await Seats.findById(req.params.id);
    if(seat) {
      await Seats.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK', deleteDocument: seat });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};