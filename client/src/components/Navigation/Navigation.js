import NavigationItem from './NavigationItem'
import styles from './Navigation.module.css';


const Navigation = () => {

    return (
        <nav className={styles.navigation}>
            <h3 className={styles.h3}>CarShop</h3>
            <NavigationItem/>
        </nav>
    )
}

export default Navigation;