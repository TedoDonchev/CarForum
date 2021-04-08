import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeLoggedOut from './components/HomePageLoggedOut/HomePageLoggedOut';
import About from './components/About/About';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Home from './components/HomePage/Home';





class  App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: null,
            username: null
        }
    }
    

    render() {
        return (
            <div>
    
                <Header />
                <Switch>
                    <Route path='/' exact component={HomeLoggedOut}></Route>
                    <Route path='/about' exact component={About}></Route>
                    <Route path='/register' exact component={Register}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/home' exact component={Home}></Route>
    
    
                </Switch>
                <Footer />
    
            </div>
        );
    }
    
}

export default App;