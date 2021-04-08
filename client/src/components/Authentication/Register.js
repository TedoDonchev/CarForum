import React from 'react';
import styles from '../Authentication/Register.module.css';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
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
        
        const data = await promise.json();

        console.log(data)

    }
    
    render() {
        const {
            username,
            password,
            passwordConfirm,
            
        } = this.state;

        
       


        return (
            <div className={styles.register}>
                <div className={styles.registerInner}>
                    <h1>Register</h1>
                    
                    {/* <div display='none' className={this.state.className}>
                        <p>asdasdasd{this.state.data.errorMsg}</p>
                    </div> */}
                    <form className={styles.registerForm} onSubmit={this.handleRegister}>
                        <label for='username'>Username</label>
                        <input type='text' name='username' id='username' />

                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' />

                        <label for='passwordConfirm'>Confirm Password</label>
                        <input type='password' name='passwordConfirm' id='passwordConfirm' />

                        <input type='submit' value='Register' className={styles.registerSubmit} />
                    </form>
                </div>
            </div>
        )
    }

}

export default Register;