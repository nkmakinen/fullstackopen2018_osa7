let token = null

const blogs = [
    {
      id: "5a451df7571c224a31b5c8ce",
      title: "HTML on helppoa",
      author: 'author #1',
      url: 'url #1',
      likes: 1,
      user: {
        _id: "5a437a9e514ab7f168ddf138",
        username: "mluukkai",
        name: "Matti Luukkainen"
      }
    },
    {
      id: "5a451e21e0b8b04a45638211",
      title: "Selain pystyy suorittamaan vain javascriptiä",
      author: 'author #2',
      url: 'url #2',
      likes: 2,
      user: {
        _id: "5a437a9e514ab7f168ddf138",
        username: "mluukkai",
        name: "Matti Luukkainen"
      }
    },
    {
      id: "5a451e30b5ffd44a58fa79ab",
      title: "HTTP-protokollan tärkeimmät metodit ovat GET ja POST",
      author: 'author 3',
      url: 'url #3',
      likes: 3,
      user: {
        _id: "5a437a9e514ab7f168ddf138",
        username: "mluukkai",
        name: "Matti Luukkainen"
      }
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

const setToken = () => {
    return
}

export default { getAll, blogs, setToken }