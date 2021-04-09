//import image from '../../Images/site-header-bmw.png'
import styles from '../Header/Header.module.css';


import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        {
            if(this.props.checkLogin.loggedIn) {
                
                return (
                    <div className={styles.header}>
                        <h2 className={styles.h2}><Link className={styles.link} to='/'>Flash Auto</Link></h2>
                        <div className={styles.navigationBar}>
                            <ul className={styles.userList}>
                                <li className={styles.navItem}><Link to='/'>Home</Link></li>
                                <li className={styles.navItem}><Link to='/about'>About Us</Link></li>
                                <li className={styles.navItem}><Link to='/logout'>Logout</Link></li>
                                {/* <li className={styles.navItem}><Link to='/register'>Register</Link></li>
                                <li className={styles.navItem}><Link to='/login'>Login</Link></li> */}
                            </ul>
                        </div>
                    </div>

                )
            } else {
                
                return (
                    <div className={styles.header}>
                        <h2 className={styles.h2}><Link className={styles.link} to='/'>Flash Auto</Link></h2>
                        <div className={styles.navigationBar}>
                            <ul className={styles.userList}>
                                <li className={styles.navItem}><Link to='/'>Home</Link></li>
                                <li className={styles.navItem}><Link to='/about'>About Us</Link></li>
                                <li className={styles.navItem}><Link to='/register'>Register</Link></li>
                                <li className={styles.navItem}><Link to='/login'>Login</Link></li>
                                {/* <li className={styles.navItem}><Link to='/'>Logout</Link></li> */}
                            </ul>
                        </div>
                    </div>

                )
            }
        }
    }
}
export default Header;