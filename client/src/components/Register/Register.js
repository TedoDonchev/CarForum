import styles from '../Register/Register.module.css';

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.registerInner}>
                <h1>Register</h1>
                <form className={styles.registerForm} method='POST'>
                    <label for='name'>Username</label>
                    <input type='text' name='username' />
                    
                    <label for='password'>Password</label>
                    <input type='password' name='password' />
                    
                    <label for='passwordConfirm'>Confirm Password</label>
                    <input type='password' name='passwordConfirm' />
                    
                    <input type='submit' value='Register' className={styles.registerSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Register;