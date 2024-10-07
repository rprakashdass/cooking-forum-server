require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconn = require('./config/db'); 

const DishesRouter = require('./Router/Dishresipes');
const PostRouter = require('./Router/Postrouter'); 

const app = express();
app.use(express.json());
app.use(cors());

const port = 7777;
app.use('/post', PostRouter); 
app.use('/dishes', DishesRouter); 
app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`);
});