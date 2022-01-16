const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts.js');

app.use('/api/posts', posts);

const port = 5000;

app.listen(port, () => {
    console.log(`server starts at port ${5000}`)
})