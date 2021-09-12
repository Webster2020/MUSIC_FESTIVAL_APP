const Concerts = require('../models/concerts.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Concerts.find({}));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const con = await Concerts.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.newDocument = async (req, res) => {
  try {
    const { performer, genre, image } = req.body;
    const newConcerts = new Concerts({ performer: performer, genre: genre, image: image });
    await newConcerts.save();
    res.json({ message: 'OK' });

  } catch(err) {
    res.status(500).json({ message: err });
  } 
};

exports.changeDocument = async (req, res) => {
  const { performer, genre, image } = req.body;
  try {
      const con = await Concerts.findById(req.params.id);
      if(con) {
          con.performer = performer,
          con.genre = genre,
          con.image = image
      await con.save();
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
    const tes = await Concerts.findById(req.params.id);
    if(con) {
      await Concerts.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK', deleteDocument: con });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};