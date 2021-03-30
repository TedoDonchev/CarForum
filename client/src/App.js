import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomeLoggedOut from './components/HomePageLoggedOut/HomePageLoggedOut';

import styles from './App.css';

import About from './components/sadsa';

function App() {
    return (
        <div className={styles.pageDiv}>
           
            <Header />
            {/* <HomeLoggedOut /> */}
            <Route path='/about' exact component={About}></Route>
            <Route path='/' exact component={HomeLoggedOut}></Route>
        </div>
    );
}

export default App;