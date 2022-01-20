const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts.js');

app.use('/api/posts', posts);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server starts at port http://localhost/${PORT}`)
})