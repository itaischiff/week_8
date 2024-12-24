const articleService = require('../services/article');
const Article = require('../models/article');

// Create an article
const createArticle = async (req, res) => {
  const article = await articleService.createArticle(req.body.title);
  res.status(201).json(article);
};

// Get all articles
const getArticles = async (req, res) => {
  const articles = await articleService.getArticles();
  res.json(articles);
};

// Get an article by ID
const getArticle = async (req, res) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json({});
  }
  res.json(article);
};

// Update an article by ID
const updateArticle = async (req, res) => {
  const updatedArticle = await articleService.updateArticle(req.params.id, req.body.title);
  if (!updatedArticle) {
    return res.status(404).json({});
  }
  res.json(updatedArticle);
};

// Delete an article by ID
const deleteArticle = async (req, res) => {
  const deletedArticle = await articleService.deleteArticle(req.params.id);
  if (!deletedArticle) {
    return res.status(404).json({});
  }
  res.json(deletedArticle);
};

module.exports = { createArticle, getArticles, getArticle, updateArticle, deleteArticle };
