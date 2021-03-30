import styles from './About.module.css';
import volvo from '../../Images/AboutUS/car-about-us.jpg'
import repair from '../../Images/AboutUS/car-repair-about-us.jpg';

const About = () => {
    return (
        <div className={styles.aboutUs}>
            <h1>About Us</h1>
            <div className={styles.aboutUsMain}>
                <div className={styles.aboutText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={styles.imgAboutDiv}>
                    <img src={volvo} className={styles.imgAbout} alt="Volvo"></img>
                </div>
                <div className={styles.imgAboutDiv}>
                    <img src={repair} className={styles.imgAbout} alt="Volvo"></img>
                </div>
                <div className={styles.aboutText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

        </div>
    )
}

export default About;