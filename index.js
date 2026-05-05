const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_router');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// module.exports = app;

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});