import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomeLoggedOut from './components/HomePageLoggedOut/HomePageLoggedOut';
import About from './components/About/About';

import styles from './App.css';


function App() {
    return (
        <div className={styles.pageDiv}>
           
            <Header />
            
            <Route path='/about' exact component={About}></Route>
            <Route path='/' exact component={HomeLoggedOut}></Route>
        </div>
    );
}

export default App;