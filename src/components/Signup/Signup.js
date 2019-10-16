import React from 'react';
import './Signup.css'

class Signup extends React.Component{

    render(){
        return(
            <div className="signup">
                <h2>Sign Up</h2>
                <form className="signup-form">
                    <label>Username</label>
                    <input type="text" name="username" required/>

                    <label>Full name</label>
                    <input type="text" name="fullname" required/>

                    <label>Email</label>
                    <input type="email" name="email" required/>

                    <label>Password</label>
                    <input id="password" type="password" name="password" required/>

                    <label>Repeat password</label>
                    <input type="password" name="password" required/>

                    <button type="submit">Join</button>
                </form>
            </div>
        );
    }
}

export default Signup;