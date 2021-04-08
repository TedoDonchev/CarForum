import styles from '../Authentication/Register.module.css';
import { Component } from 'react';



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
        }
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const url = 'http://localhost:4000/users/login';

        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,   
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const response = await promise.json();
        console.log(response);
        this.setState({
            username: response.user.username
        })
    }

    render() {
        return (
            <div className={styles.register}>
                <div className={styles.registerInner}>
                    <h1>Login</h1>
                    <form className={styles.registerForm} onSubmit={this.handleLogin}>
                        <label for='username'>Username</label>
                        <input type='text' name='username' id='username' />
                        
                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' />
                        
                        <input type='submit' value='Login' className={styles.registerSubmit} />
                    </form>
                </div>
            </div>
        )
    }
    
}

export default Login;