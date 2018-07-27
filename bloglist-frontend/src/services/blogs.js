import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async (newObj) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(baseUrl, newObj, config)
    return response.data
}

const update = async (newObj) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.put(`${baseUrl}/${newObj.id}`, newObj, config)
    return response.data
}

const sendComment = async (id, newComment) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(`${baseUrl}/${id}/comments`, newComment, config)
    return response.data
}

const remove = async (obj) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.delete(`${baseUrl}/${obj.id}`, config)
    return response.data
}

export default { getAll, setToken, create, update, remove, sendComment }