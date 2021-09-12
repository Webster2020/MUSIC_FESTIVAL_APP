const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonials.controller');
//const Testimonials = require('../models/testimonials.model.js');
// const db = require('../db');
// const { v4: uuidv4 } = require('uuid');


router.get('/testimonials', TestimonialsController.getAll);
router.get('/testimonials/:id', TestimonialsController.getById);
router.post('/testimonials', TestimonialsController.newDocument);
router.put('/testimonials/:id', TestimonialsController.changeDocument);
router.delete('/testimonials/:id', TestimonialsController.deleteDocument);


// router.route('/testimonials').get((req, res) => {
//     res.json(db.testimonials);
// });
// router.get('/testimonials', async (req, res) => {
//   try {
//       res.json(await Testimonials.find());
//   }
//   catch(err) {
//       res.status(500).json({ message: err });
//   }
// });

// router.route('/testimonials/:id').get((req, res) => {
//     res.json(db.testimonials[`${req.params.id}`]);
// });
// router.get('/testimonials/:id', async (req, res) => {
//   try {
//     const tes = await Testimonials.findById(req.params.id);
//     if(!tes) res.status(404).json({ message: 'Not found' });
//     else res.json(tes);
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

// router.route('/testimonials').post((req, res) => {
//     req.body.id = uuidv4();
//     req.body.author;
//     req.body.text; 
//     db.testimonials.push(req.body);
//     res.json({message: 'OK'});
// });
// router.post('/testimonials', async (req, res) => {
//   try {

//     const { author, text } = req.body;
//     const newTestimonials = new Testimonials({ author: author, text: text });
//     await newTestimonials.save();
//     res.json({ message: 'OK' });

//   } catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

// router.route('/testimonials/:id').put((req, res) => {
//     db.testimonials[`${req.params.id}`].author = req.body.author;
//     db.testimonials[`${req.params.id}`].text = req.body.text;
//     res.json({message: 'OK'});
// });
// router.put('/testimonials/:id', async (req, res) => {
//   const { author, text } = req.body;

//   try {
//       const tes = await Testimonials.findById(req.params.id);
//       if(tes) {
//           tes.author = author,
//           tes.text = text,
//       await tes.save();
//       res.json({ message: 'OK' });
//       }
//       else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

// router.route('/testimonials/:id').delete((req, res) => {
//     db.testimonials.splice(`${req.params.id}`, 1);
//     res.json({message: 'OK'});
// });
// router.delete('/testimonials/:id', async (req, res) => {
//   try {
//     const tes = await Testimonials.findById(req.params.id);
//     if(tes) {
//       await Testimonials.deleteOne({ _id: req.params.id });
//       res.json({ message: 'OK', deletedDocument: tes });
//     }
//     else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

module.exports = router; 