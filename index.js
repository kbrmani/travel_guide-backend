const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const authRoutes = require('./routes/auth');

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Headers'],
}));

app.use(express.json());

mongoose.connect('mongodb+srv://kbrmanish01:w58DQJBNjTA2SGqd@cluster0.41bpp.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
