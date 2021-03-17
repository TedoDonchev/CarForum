import styles from './Navigation.module.css';


const NavigationItem = () => {

    return (
        <ul className={styles.navigationList}>
            
            <li className={styles.navigationItem}><a href='/'>Home</a></li>
            <li className={styles.navigationItem}><a href='/'>About</a></li>
            <li className={styles.navigationItem}><a href='/'>Contacts</a></li>
            
        </ul>
    )

}

export default NavigationItem;