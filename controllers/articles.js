const articles = require('../models/articles')

const getArticle = (req, res) => {
    const id = req.params.id
    console.log(articles.getArticle(id))
    res.render('article.ejs', {foo : articles.getArticle(id) })
    
}

module.exports = { getArticle };
