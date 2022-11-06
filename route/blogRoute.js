const express = require('express')
const BlogController = require('../controllers/BlogController')
const blogRouter = express.Router();


blogRouter.post('/', BlogController.createBlog)

blogRouter.get('/:blogId', BlogController.getBlogById)

blogRouter.get('/', BlogController.getAllBlogs)

blogRouter.patch('/:id', BlogController.updateBlog)

blogRouter.delete('/:id', BlogController.deleteBlog)


module.exports = blogRouter

