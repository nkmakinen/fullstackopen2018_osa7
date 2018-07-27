const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: { type: Number, default: 0 },
    comments: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

blogSchema.statics.format = (blog) => {
    return {
        id: blog._id,
        title: blog.title,
        author: blog.author,
        url: blog.url,
        comments: blog.comments,
        likes: blog.likes,
        adult: blog.adult,
        user: blog.user
    }
}

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog