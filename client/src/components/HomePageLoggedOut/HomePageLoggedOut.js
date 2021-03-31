import styles from '../HomePageLoggedOut/HomePageLoggedOut.module.css';
import { Link } from 'react-router-dom';

const HomeLoggedOut = () => {

    return (
        <div className={styles.loggedOutMain}>
            <div className={styles.loggedOutInner}>
                <div className={styles.welcome}>
                    <p>Welcome to our site!</p>
                    <p>This forum is for car lovers!</p>
                </div>
                <div className={styles.homeRegister}>
                    <p>To use the shop register here</p>
                    <Link to='/register'><button>Register</button></Link>
                </div>
                <div className={styles.homeLogin}>
                    <p>Already have and account?</p>
                    <Link to='/login'><button>Login</button></Link>
                </div>
            </div>
        </div>

    )

}

export default HomeLoggedOut;