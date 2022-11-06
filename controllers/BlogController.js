const Blog = require('../models/blog')
const {readingTime} = require('../utils/utils')

exports.createBlog = async (req,res,next) =>{
  try{
    const {title,description ,tags,body} = req.body

    const newBlog = new Blog({
       title,
       description:description,
       tags,
       author:req.user._id,
       body,reading_time :readingTime(body)
    })
    const createdBlog = await newBlog.save()
    return res.status(201).json({
      status:true,
      data:createdBlog,
    })
  }catch(error){
    next(error)
  }
}

exports.getAllBlogs = async (req,res, next)=>{
  try{
    const blogs = await Blog
    .find({state:'publish'})
    .select({title:1})
    .populate('author', {username:username})
    .skip(page)
    .limit(per_page)
    return res.json({
      status:true,
      data:blogs
    })

  }catch(err){
    err.source = 'get publish blogs controller'
    next(err)
  }
}
exports.getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params
    const blog = await blog.findById(id)
      .populate('author', { username: username})

     const {query} = req
      const {
      page = 1,
      per_page= 20
     } =  query ;
    if (blog.state !== 'published') {
      return res.status(403).json({
        status: false,
        error: 'Requested article is not published  Or Blog is on default (draft)'
      })
    }

  
    blog.read_count += 1
    await blog.save()

    return res.json({
      status: true,
      data: blog
    })
  } catch (err) {
    err.source = 'get published blog controller'
    next(err)
  }
}

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
