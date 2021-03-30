import styles from '../Header/Header.module.css';

import NavList from './NavList';

const NavigationBar = () => {
    return (
        <div className={styles.navigationBar}>
            <NavList />
        </div>
    )
}

export default NavigationBar;