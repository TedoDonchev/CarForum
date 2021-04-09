import React from 'react';
import styles from '../Authentication/Register.module.css';
import { Redirect } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }
    
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const passwordConfirm = e.target.passwordConfirm.value;

        
        const url = 'http://localhost:4000/users/register';
        
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                passwordConfirm
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const response = await promise.json();

        //console.log(response);

        localStorage.setItem('jwt', response.token);
        localStorage.setItem('username', response.user.username);

        this.setState({ redirect: true });
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
                    <h1>Register</h1>
                    
                    {/* <div display='none' className={this.state.className}>
                        <p>asdasdasd{this.state.data.errorMsg}</p>
                    </div> */}
                    <form className={styles.registerForm} onSubmit={this.handleRegister}>
                        <label for='username'>Username</label>
                        <input type='text' name='username' id='username' className={styles.input} />

                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' className={styles.input} />

                        <label for='passwordConfirm'>Confirm Password</label>
                        <input type='password' name='passwordConfirm' id='passwordConfirm' className={styles.input} />

                        <input type='submit' value='Register' className={styles.registerSubmit} />
                    </form>
                </div>
            </div>
        )
    }

}

export default Register;