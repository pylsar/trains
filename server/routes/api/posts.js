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
router.post('/', async (req, res ) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})


//Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://UserTrain:ParolHeroes@cluster0.bu2wa.mongodb.net/poezda?retryWrites=true&w=majority', {
        useNewUrlParser: true // to protect us from warnings
    });
    return client.db('trains').collection('posts')
}


module.exports = router;