import React from 'react';
import './Login.css';

class Login extends React.Component{



    loginSubmit = e =>{
        e.preventDefault();
        console.log('Logged in')
        
    }

    render(){
        return(
            <form className="login-form" onSubmit={this.loginSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" required/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required/>
                
                <button type="submit">Login</button>
            </form>
        );
    }
}
export default Login;