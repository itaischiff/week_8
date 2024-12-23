const articleService = require('../services/article');
const createArticle = async (req, res) => {
res.json(await articleService.createArticle(req.body.title));
};

const getArticles = async (req, res) => {
res.json(await articleService.getArticles());
};
const getArticle = async (req, res) => {
const article = await articleService.getArticleById(req.params.id);
if (!article) {
return res.status(404).json({ errors: ['Article not found'] });
}
res.json(article);
};
const updateArticle = async (id, title) => {
    const article = await getArticleById(id);
    if (!article) return null;
    article.title = title;
    await article.save();
    return article;
    };
    const deleteArticle = async (id) => {
    const article = await getArticleById(id);
    if (!article) return null;
    await article.remove();
    return article;
    };
module.exports = {createArticle, getArticles, getArticle, updateArticle, deleteArticle };