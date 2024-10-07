// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconn = require('./config/db'); // Ensure DB connection is established

// Import routers

const DishesRouter = require('./Router/Dishresipes');

const app = express();
app.use(express.json());
app.use(cors());

const port =7777;


app.use('/dishes', DishesRouter); 
app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`);
});