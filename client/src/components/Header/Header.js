//import image from '../../Images/site-header-bmw.png'
import styles from '../Header/Header.module.css';

import NavigationBar from './NavigationBar';

const Header = () => {
    return (
        <div className={styles.header}>
            <h2 className={styles.h2}>Flash Auto</h2>
            <NavigationBar />
            {/* <img src={image} className={styles.headerImage} alt="BMW"></img> */}
        </div>
    )
}

export default Header;