import React from 'react'
import Blog from './components/Blog'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import UserListing from './components/UserListing'
import UserInfo from './components/UserInfo'
import SimpleBlog from './components/SimpleBlog'
import { connect } from 'react-redux'
import { initializeUsers } from './reducers/usersReducer'
import { initializeBlogs } from './reducers/blogsReducer'
import { loadLastLogin } from './reducers/loggedUserReducer'
import { Navbar, Nav, NavItem, PageHeader, Button } from 'react-bootstrap'

class App extends React.Component {
    componentDidMount() {
        console.log('App, componentDidMount() -->')
        
        this.props.initializeUsers()
        this.props.initializeBlogs()
        this.props.loadLastLogin()

        // TODO: init blogs in correct order!
    }

    render() {
        const logout = () => {
            window.localStorage.removeItem('loggedUser')
            window.location.reload()
        }

        const loginForm = () => {
            return (
                <Togglable buttonLabel="login" ref={component => this.loginForm = component}>
                    <LoginForm />
                </Togglable>
            )
        }

        const homeView = () => {
            return (
                <div>
                    <p className="login-text">{this.props.loggedUser.name} logged in
                        <Button bsStyle="info" onClick={logout}>Logout</Button>
                    </p>
                    {<div>
                        <NewBlog />

                        <h2>Blogs</h2>
                        {this.props.blogs.map(blog => 
                            <Blog key={blog.id} blog={blog}/>
                        )}
                    </div>}
                </div>
            )
        }

        const userById = (id) => {
            return this.props.users.find(user => user.id === id)
        }

        const blogById = (id) => {
            return this.props.blogs.find(blog => blog.id === id)
        }

        const usersView = () => {
            if (this.props.loggedUser.user !== null) {
                return (
                    <div>
                        <p className="login-text">{this.props.loggedUser.name} logged in
                            <Button bsStyle="info" onClick={logout}>Logout</Button>
                        </p>
                        <UserListing users={this.props.users} />
                    </div>
                )
            } else {
                return (
                    <UserListing users={this.props.users} />
                )
            }
        }

        const userInfo = (match) => {
            if (this.props.loggedUser !== null) {
                return (
                    <div>
                        <p className="login-text">{this.props.loggedUser.name} logged in
                            <Button bsStyle="info" onClick={logout}>Logout</Button>
                        </p>
                        <UserInfo user={userById(match.params.id)} />
                    </div>
                )
            } else {
                return (
                    <div>
                        <UserInfo user={userById(match.params.id)} />
                    </div>
                )
            }
        }

        const blogInfo = (match) => {
            if (this.props.loggedUser !== null) {
                return (
                    <div>
                        <p className="login-text">{this.props.loggedUser.name} logged in
                            <Button bsStyle="info" onClick={logout}>Logout</Button>
                        </p>
                        <SimpleBlog blog={blogById(match.params.id)} />
                    </div>
                )
            } else {
                return (
                    <div>
                        <SimpleBlog blog={blogById(match.params.id)} />
                    </div>
                )
            }
        }

        let activeNavStyle = {
            color: 'red',
            fontWeight: 'bold'
        }

        return (
            <Router>
                <div className="main-content">
                    <Notification />
                    
                    {this.props.loggedUser !== null &&
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem componentClass="span">
                                        <NavLink exact to="/" activeStyle={activeNavStyle}>BLOGS</NavLink>
                                    </NavItem>
                                    <NavItem componentClass="span">
                                        <NavLink exact to="/users" activeStyle={activeNavStyle}>USERS</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    }

                    <PageHeader className="page-header">Blog App</PageHeader>
                                  
                    <Route exact path="/" render={() => {
                        return this.props.loggedUser === null ? loginForm() : homeView()
                    }} />

                    <Route exact path="/users" render={() => {
                        return usersView()
                    }} />

                    <Route exact path="/users/:id" render={({ match }) => {
                        return userInfo(match)
                    }} />

                    <Route exact path="/blogs/:id" render={({ match }) => {
                        return blogInfo(match)
                    }} />

                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('App, mapStateToProps(), state:', state)

    return {
        users: state.users,
        blogs: state.blogs,
        loggedUser: state.loggedUser
    }
}

export default connect(
    mapStateToProps,
    { initializeUsers, initializeBlogs, loadLastLogin }
)(App)