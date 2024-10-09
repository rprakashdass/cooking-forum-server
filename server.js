require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconn = require('./config/db'); 

const DishesRouter = require('./Router/Dishresipes');
const PostRouter = require('./Router/Postrouter'); 
const router = require('./Router/AuthRoute');

const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'https://cooking-forum-client.onrender.com'];

// CORS middleware applied before routes
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
}));

const port = 7777;

app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.use('/post', PostRouter); 
app.use('/dishes', DishesRouter); 
app.use('/', router);

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`);
});
