const Testimonials = require('../models/testimonials.model');

exports.getAll = async (req, res) => {
  try {
      res.json(await Testimonials.find());
  }
  catch(err) {
      res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const tes = await Testimonials.findById(req.params.id);
    if(!tes) res.status(404).json({ message: 'Not found' });
    else res.json(tes);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.newDocument = async (req, res) => {
  try {

    const { author, text } = req.body;
    const newTestimonials = new Testimonials({ author: author, text: text });
    await newTestimonials.save();
    res.json({ message: 'OK' });

  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.changeDocument = async (req, res) => {
  const { author, text } = req.body;

  try {
      const tes = await Testimonials.findById(req.params.id);
      if(tes) {
          tes.author = author,
          tes.text = text,
      await tes.save();
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
    const tes = await Testimonials.findById(req.params.id);
    if(tes) {
      await Testimonials.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK', deletedDocument: tes });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};