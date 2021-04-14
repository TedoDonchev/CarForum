import styles from '../Error/Error.module.css';

const Error = (props) => {
    return (
        <div className={styles.errorDiv}>
            <h3>{props.error}</h3>
        </div>
    )
}

export default Error;