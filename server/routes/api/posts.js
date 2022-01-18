const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get posts
router.get('/', async (req, res) => {
    // res.send('hello ');
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//Add Posts

//Delete Posts


async function loadPostsCollection(){
    const client = mongodb.MongoClient.connect('mongodb+srv://trains:ParolHeroes86@cluster0.upnsj.mongodb.net/posts', {
        useNewUrlParser: true
    });
    return client.db('trains').collection('posts')
}


module.exports = router;