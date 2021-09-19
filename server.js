const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const socket = require('socket.io');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
}); //new

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

//new
// connects our backend code with the database
//local: 'mongodb://localhost:27017/NewWaveDB'

const dbPassword = '1234qwer';
const dbName = 'NewWaveDB';

const dbLocalURI = 'mongodb://localhost:27017/NewWaveDB';
const dbAtlasURI = `mongodb+srv://webster2020:${dbPassword}@cluster0.013rz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const dbURI = process.env.NODE_ENV === 'production' ? dbAtlasURI : dbLocalURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
}); //new

module.exports = server;

const io = socket(server);

io.on('connection', socket => {
  console.log(`New socket (${socket})!`);
});