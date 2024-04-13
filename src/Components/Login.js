import React, { useState } from 'react';
import './Project.css';

const SignUpBox = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform sign-up logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Contact Number:', contactNumber);
    };

    return (
        <div className="containerLogin">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-field">
                        <i className="fa-regular fa-user"></i>
                        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="input-field">
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="input-field">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <p>Forgot password <a href="/">Click Here!</a></p>
                </div>
                <div className="btn-field">
                    <button type="submit" id="signupBtn">Sign up</button>
                    <button type="submit" id="signinBtn">Sign in</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpBox;
