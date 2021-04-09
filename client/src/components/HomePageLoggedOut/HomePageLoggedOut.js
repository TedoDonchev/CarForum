import styles from '../HomePageLoggedOut/HomePageLoggedOut.module.css';
import { Link } from 'react-router-dom';

const HomeLoggedOut = () => {

    return (
        <div className={styles.loggedOutMain}>
            <div className={styles.loggedOutInner}>
                <div className={styles.welcome}>
                    <h1>Welcome to <Link className={styles.homePageH1Link} to='/'>Flash Auto!</Link></h1>
                    <p>This forum is for car lovers!</p>
                </div>
                <div className={styles.homeRegister}>
                    <p>To use the forum register here</p>
                    <Link to='/register'><button>Register</button></Link>
                </div>
                <div className={styles.homeLogin}>
                    <p>Already have an account?</p>
                    <Link to='/login'><button>Login</button></Link>
                </div>
            </div>
        </div>

    )

}

export default HomeLoggedOut;