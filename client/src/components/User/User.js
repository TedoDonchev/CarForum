import styles from './User.module.css';

const User = (props) => {
    return (
        <div className={styles.user}>
            <h2>{props.username}</h2>
            <div className={styles.imgDiv}>
                <img src={props.imageUrl}></img>
            </div>
        </div>
    )
}

export default User;