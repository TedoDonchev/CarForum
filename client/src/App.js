import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeLoggedOut from './components/HomePageLoggedOut/HomePageLoggedOut';
import About from './components/About/About';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Home from './components/HomePage/Home';
import Logout from './components/Authentication/Logout';
import CreateArticle from './components/Create/CreateArticle';
import Details from './components/Article/Details';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: null
        }
    }

    isLogged = () => {
        const token = localStorage.getItem('jwt');
        const username = localStorage.getItem('username');

        if (token && username) {
            this.setState({ username: username, loggedIn: true });
        }
    }

    logout = () => {
        this.setState({
            loggedIn: null, 
            username: null
        })
    }

    
    componentDidMount() {
        this.isLogged();
    }

    render() {
        {
            if (this.state.loggedIn) {
                return (
                    <div>
                        <Header checkLogin={this.state}/>
                        <Switch>

                            <Route path='/' exact component={Home}></Route>
                            <Route path='/about' exact component={About}></Route>
                            <Route path='/logout' exact component={() => (<Logout logout={this.logout} />)}></Route>
                            <Route path='/create' exact component={CreateArticle}></Route>
                            <Route path='/articles/:id' component={Details}></Route>
                            
                        </Switch>
                        <Footer />
                    </div>
                )
            } else {
                return (
                    <div>
        
                        <Header checkLogin={this.state}/>
                        <Switch>
        
                            <Route path='/' exact component={HomeLoggedOut}></Route>
                            <Route path='/about' exact component={About}></Route>
                            <Route path='/register' exact component={() => (<Register checkLogin={this.isLogged} />)}></Route>
                            <Route path='/login' exact component={() => (<Login checkLogin={this.isLogged} />)} ></Route>
 
                        </Switch>
                        <Footer />
        
                    </div>
                );
            }
        } 
    }
}

export default App;