import styles from '../Authentication/Register.module.css';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
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
        //console.log(response);
        localStorage.setItem('jwt', response.token);
        localStorage.setItem('username', response.user.username);
        
        //console.log(this.props);
        this.setState({redirect: true});
        this.props.checkLogin();
        
    }

    render() {
        {
            if(this.state.redirect) {
                return <Redirect to="/"/>
            }
        }
        return (
            <div className={styles.register}>
                <div className={styles.registerInner}>
                    <h1>Login</h1>
                    <form className={styles.registerForm} onSubmit={this.handleLogin}>
                        <label for='username'>Username</label>
                        <input type='text' name='username' id='username' className={styles.input} />
                        
                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' className={styles.input} />
                        
                        <input type='submit' value='Login' className={styles.registerSubmit} />
                    </form>
                </div>
            </div>
        )
    }
    
}

export default Login;