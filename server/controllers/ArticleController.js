const router = require('express').Router();
const Article = require('../models/Article');

router.post('/create', (req, res) => {

    const { title, text, carBrand, authorName, authorId} = req.body;
    //console.log({ title, text, carBrand, authorName, authorId});

    const article = new Article({ title, text, carBrand, authorName, authorId });
    article.save();

    res.status(200).send(JSON.stringify('Article created!'))
})

router.get('/', async(req, res) => {
    //console.log(req);
    const articles = await Article.find({}).lean();
    //console.log(articles);
    res.send(JSON.stringify(articles));
})

router.get('/:id', async(req, res) => {
    //console.log(req);
    const _id = req.params.id;

    const article = await Article.findOne({ _id }).lean();

    res.status(200).send(JSON.stringify(article));
    // const articles = await Article.find({}).lean();
    // //console.log(articles);
    // res.send(JSON.stringify(articles));
})


module.exports = router;