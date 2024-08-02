const express = require('express');
const cors = require('cors');

// routes
const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');


const app = express();

// config JSON response
app.use(express.json());

// solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// public folder for images
app.use(express.static('public'));

// routes
app.use('/users', UserRoutes); 
app.use('/pets', PetRoutes);

app.listen(5000); 