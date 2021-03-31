import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

const NavList = () => {
    return (
        <ul className={styles.userList}>
            <li className={styles.navItem}><Link to='/'>Home</Link></li>
            <li className={styles.navItem}><Link to='/about'>About Us</Link></li>
            <li className={styles.navItem}><Link to='/register'>Register</Link></li>
            <li className={styles.navItem}><Link to='/'>Login</Link></li>
            <li className={styles.navItem}><Link to='/'>Logout</Link></li>

        </ul>
    )
}

export default NavList;