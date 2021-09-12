const express = require('express');
const router = express.Router();
const SeatsController = require('../controllers/seats.controller');
//const Seats = require('../models/seats.model.js');
// const db = require('../db');
// const { v4: uuidv4 } = require('uuid');

router.get('/seats', SeatsController.getAll);
router.get('/seats/:id', SeatsController.getById);
router.post('/seats', SeatsController.newDocument);
router.put('/seats/:id', SeatsController.changeDocument);
router.delete('/seats/:id', SeatsController.deleteDocument);


//without Mongo
// router.route('/seats').get((req, res) => {
//     res.json(db.seats);
// });

//with mongoDB
// router.get('/seats', (req, res) => {
//     req.db.collection('seats').find().toArray((err, data) => {
//         if(err) res.status(500).json({ message: err });
//         else res.json(data);
//     });
// });

//with mogoose
// router.get('/seats', async (req, res) => {
//   try {
//       res.json(await Seats.find());
//   }
//   catch(err) {
//       res.status(500).json({ message: err });
//   }
// });

//without Mongo
// router.route('/seats/:id').get((req, res) => {
//     const seatData = db.seats.find(item => item.id == req.params.id);
//     res.json(seatData);
// });

//with mogoose
// router.get('/seats/:id', async (req, res) => {
//   try {
//     const seat = await Seats.findById(req.params.id);
//     if(!seat) res.status(404).json({ message: 'Not found' });
//     else res.json(seat);
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

//without Mongo
// router.route('/seats').post((req, res) => {
//     const {day, seat, client, email} = req.body;
//     req.body.id = uuidv4();

//     const takenSeat = db.seats.some(item => (item.seat == seat && item.day == day));
//     if (takenSeat) {
//         res.json({ message: "The slot is already taken..." });
//     } else if (day && seat && client && email){
//         day;
//         seat; 
//         client;
//         email;
//         db.seats.push(req.body);
//         res.json({message: 'OK'});
//         req.io.emit('seatsUpdated', db.seats, console.log('Seats updated!'));
//     } else {
//         res.json({message: 'Please put all informations'});
//     }
// });

//with mogoose
// router.post('/seats', async (req, res) => {
//   try {

//     const { day, seat, client, email } = req.body;

//     const takenSeat = await Seats.findOne({day: day, seat: seat});

//     if (takenSeat) {
//         res.json({ message: "This seat is already taken." });
//     } else {
//       const newSeats = new Seats({ 
//           day: day, 
//           seat: seat, 
//           client: client, 
//           email: email 
//           });
//       await newSeats.save();
//       req.io.emit('seatsUpdated', (await Seats.find()));
//       res.json({ message: 'OK OK' });
//     }

//   } catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

//without Mongo
// router.route('/seats/:id').put((req, res) => {
//     const seatData = db.seats.find(item => item.id == req.params.id);
//     const { day, seat, client, email } = req.body;
    
//     if(day && seat && client && email){
//         seatData.day = day;
//         seatData.seat = seat;
//         seatData.client = client;
//         seatData.email = email;
//         res.json({message: 'OK'});
//     } else {
//         res.json({message: 'Please put all informations'});
//     }
// });

//with mogoose
// router.put('/seats/:id', async (req, res) => {
//   const { day, seat, client, email } = req.body;

//   try {
//       const seat = await Seats.findById(req.params.id);
//       if(seat) {
//           seat.day = day,
//           seat.seat = seat,
//           seat.client = client,
//           seat.email = email;

//       await seat.save();
//       res.json({ message: 'OK' });
//       }
//       else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

//without Mongo
// router.route('/seats/:id').delete((req, res) => {
//     const seatToDel = db.seats.indexOf(db.seats.find(item => item.id == req.params.id));
//     db.seats.splice(seatToDel, 1);
//     res.json({message: 'OK'});
// });

//with mogoose
// router.delete('/seats/:id', async (req, res) => {
//   try {
//     const seat = await Seats.findById(req.params.id);
//     if(seat) {
//       await Seats.deleteOne({ _id: req.params.id });
//       res.json({ message: 'OK', deletedDocument: seat });
//     }
//     else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// });

module.exports = router;