import styles from '../HomePageLoggedOut/HomePageLoggedOut.module.css';

const HomeLoggedOut = () => {

    return (
        <div className={styles.loggedOutMain}>
            <div className={styles.loggedOutInner}>
                <div className={styles.welcome}>
                    <p>Welcome to our site!</p>
                    <p>sadsadasdasdasdasdasdasdas</p>
                </div>
                <div className={styles.homeRegister}>
                    <p>To use the shop register here</p>
                    <button>Register</button>
                </div>
                <div className={styles.homeLogin}>
                    <p>Already have and account?</p>
                    <button>Login</button>
                </div>
            </div>
        </div>

    )

}

export default HomeLoggedOut;