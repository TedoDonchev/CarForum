const router = require('express').Router();
const Article = require('../models/Article');
const User = require('../models/User');



router.post('/create', async (req, res) => {

    const { title, text, carBrand, authorName, authorId } = req.body;
    //console.log({ title, text, carBrand, authorName, authorId});

    const article = new Article({ title, text, carBrand, authorName, authorId });
    article.save();

    let user = await User.findOne({ _id: authorId });
    // console.log(user);
    let arr = user.articles
    arr.push(article);
    // console.log(user);
    //user.save();
    await User.findOneAndUpdate({ _id: authorId }, { articles: arr });

    res.status(200).send(JSON.stringify('Article created!'));
})

router.get('/', async (req, res) => {
    //console.log(req);
    const articles = await Article.find({}).lean();
    //console.log(articles);
    res.send(JSON.stringify(articles));
})

router.get('/:id', async (req, res) => {
    //console.log(req);
    const _id = req.params.id;

    const article = await Article.findOne({ _id }).lean();
    //console.log(article);
    res.status(200).send(JSON.stringify(article));
})

router.post('/comment', async (req, res) => {
    //console.log(req.body);
    const { comment, commentAuthor } = req.body;

    let currentArticle = await Article.findOne({ _id: req.body._id });

    currentArticle.comments.push({ comment, commentAuthor });
    //console.log(currentArticle);
    currentArticle.save();

    res.status(200).send(JSON.stringify(currentArticle));
})

router.get('/delete/:id', async (req, res) => {

    const articleId = req.params.id;
    const article = await Article.findOne({ _id: articleId }).lean();
    const { authorId } = article;

    await Article.findOneAndDelete({ _id: articleId });
    let user = await User.findOne({ _id: authorId });
    //console.log(user.articles);
    user.articles.map((article, index) => {
        if (article._id == articleId) {
            user.articles.splice(index, 1);
        }
    })
    //console.log(user.articles);
    await User.findByIdAndUpdate({ _id: authorId }, { articles: user.articles }, { new: true });
    res.send(JSON.stringify('Article deleted!'));
})

router.post('/edit/:id', async (req, res) => {
    //console.log(req.body);
    const { _id, title, text, carBrand } = req.body;

    const article = await Article.findOneAndUpdate({ _id: _id }, { title: title, text: text, carBrand: carBrand }, { new: true });

    const { authorId } = article;
    //console.log(authorId);


    let user = await User.findOne({ _id: authorId });

    user.articles.map((article, index) => {
        if (article._id == _id) {
            article.title = title;
            article.text = text;
            article.carBrand = carBrand;
        }
    })


    //console.log(user.articles);
    await User.findByIdAndUpdate({ _id: authorId }, { articles: user.articles }, { new: true });
    res.status(200).send(JSON.stringify(article));

})

module.exports = router;