import styles from '../Authentication/Register.module.css';

const Login = () => {
    return (
        <div className={styles.register}>
            <div className={styles.registerInner}>
                <h1>Login</h1>
                <form className={styles.registerForm} method='POST'>
                    <label for='name'>Username</label>
                    <input type='text' name='username' />
                    
                    <label for='password'>Password</label>
                    <input type='password' name='password' />
                    
                    <input type='submit' value='Login' className={styles.registerSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Login;