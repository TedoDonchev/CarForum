const router = require('express').Router();
const Article = require('../models/Article');
const User = require('../models/User');



router.post('/create', async (req, res) => {

    const { title, text, carBrand, authorName, authorId} = req.body;
    //console.log({ title, text, carBrand, authorName, authorId});

    const article = new Article({ title, text, carBrand, authorName, authorId });
    article.save();

    let user = await User.findOne({_id: authorId});
    user.articles.push(article);   
    user.save();

    res.status(200).send(JSON.stringify('Article created!'));
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
    //console.log(article);
    res.status(200).send(JSON.stringify(article));
})

router.post('/comment', async(req, res) => {
    //console.log(req.body);
    const { comment, commentAuthor } = req.body;

    let currentArticle = await Article.findOne({_id: req.body._id});
    
    currentArticle.comments.push({ comment, commentAuthor });
    //console.log(currentArticle);
    currentArticle.save();

    res.status(200).send(JSON.stringify(currentArticle));
})


module.exports = router;