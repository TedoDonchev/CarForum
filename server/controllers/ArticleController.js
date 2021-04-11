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
    //console.log(article);
    res.status(200).send(JSON.stringify(article));
    // const articles = await Article.find({}).lean();
    // //console.log(articles);
    // res.send(JSON.stringify(articles));
})

router.post('/comment', async(req, res) => {
    //console.log(req.body);
    const { comment, commentAuthor } = req.body;

    
    // let arr = [];

    // let currentArticle = await Article.findOne({_id: req.body._id}, (err, data) => {
    //     arr = data.comments;
    //     //.push({ comment, commentAuthor });
    //     //console.log(arr);
    // })
    
    // arr.push({ comment, commentAuthor });
    let currentArticle = await Article.findOne({_id: req.body._id});
    //console.log(arr);
    //console.log(arr)
    currentArticle.comments.push({ comment, commentAuthor });
    //console.log(currentArticle);
    currentArticle.save();
    
    //Article.update({_id: req.body.id}, {comments:arr}, { new: true });
    
    res.status(200).send(JSON.stringify(currentArticle));
})


module.exports = router;