import blogService from '../services/blogs'

const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_BLOGS':
            return action.data
        case 'CREATE':
            return state.concat(action.data.newBlog)
        default:
            return state
    }
}

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}

export const createBlog = (blog) => {
    return async (dispatch) => {
        const newBlog = await blogService.create(blog)

        dispatch({
            type: 'CREATE',
            data: {
                newBlog
            }
        })
    }
}

export default blogsReducer