const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controller');
//const Concerts = require('../models/concerts.model.js');
// const db = require('../db');
// const { v4: uuidv4 } = require('uuid');

router.get('/concerts', ConcertController.getAll);
router.get('/concerts/:id', ConcertController.getById);
router.post('/concerts', ConcertController.newDocument);
router.put('/concerts/:id', ConcertController.changeDocument);
router.delete('/concerts/:id', ConcertController.deleteDocument);


// router.route('/concerts').get((req, res) => {
// res.json(db.concerts);
// });
// router.get('/concerts', async (req, res) => {
//     try {
//         res.json(await Concerts.find());
//     }
//     catch(err) {
//         res.status(500).json({ message: err });
//     }
// });


// router.route('/concerts/:id').get((req, res) => {
// res.json(db.concerts[`${req.params.id}`]);
// });
// router.get('/concerts/:id', async (req, res) => {
//     try {
//       const con = await Concerts.findById(req.params.id);
//       if(!con) res.status(404).json({ message: 'Not found' });
//       else res.json(con);
//     }
//     catch(err) {
//       res.status(500).json({ message: err });
//     }
// });


// router.route('/concerts').post((req, res) => {
//     req.body.id = uuidv4();
//     req.body.performer;
//     req.body.genre;
//     req.body.image;
// db.concerts.push(req.body);
// res.json({message: 'OK'});
// });
// router.post('/concerts', async (req, res) => {
//     try {
//       const { performer, genre, image } = req.body;
//       const newConcerts = new Concerts({ performer: performer, genre: genre, image: image });
//       await newConcerts.save();
//       res.json({ message: 'OK' });
  
//     } catch(err) {
//       res.status(500).json({ message: err });
//     } 
// });


// router.route('/concerts/:id').put((req, res) => {
// db.concerts[`${req.params.id}`].performer = req.body.performer;
// db.concerts[`${req.params.id}`].genre = req.body.genre;
// db.concerts[`${req.params.id}`].image = req.body.image;
// res.json({message: 'OK'});
// });
// router.put('/concerts/:id', async (req, res) => {
//     const { performer, genre, image } = req.body;
//     try {
//         const con = await Concerts.findById(req.params.id);
//         if(con) {
//             con.performer = performer,
//             con.genre = genre,
//             con.image = image
//         await con.save();
//         res.json({ message: 'OK' });
//         }
//         else res.status(404).json({ message: 'Not found...' });
//     }
//     catch(err) {
//       res.status(500).json({ message: err });
//     }
// });


// router.route('/concerts/:id').delete((req, res) => {
// db.concerts.splice(`${req.params.id}`, 1);
// res.json({message: 'OK'});
// });
// router.delete('/concerts/:id', async (req, res) => {
//     try {
//       const tes = await Concerts.findById(req.params.id);
//       if(con) {
//         await Concerts.deleteOne({ _id: req.params.id });
//         res.json({ message: 'OK', deletedDocument: con });
//       }
//       else res.status(404).json({ message: 'Not found...' });
//     }
//     catch(err) {
//       res.status(500).json({ message: err });
//     }
// });

module.exports = router; 