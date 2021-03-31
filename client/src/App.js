import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomeLoggedOut from './components/HomePageLoggedOut/HomePageLoggedOut';
import About from './components/About/About';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

import styles from './App.css';


function App() {
    return (
        <div className={styles.pageDiv}>

            <Header />
            <Switch>
                <Route path='/' exact component={HomeLoggedOut}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/register' exact component={Register}></Route>
                <Route path='/login' exact component={Login}></Route>

            </Switch>

        </div>
    );
}

export default App;