import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import './Login.scss'
import { AuthContext } from '../context/AuthContext';
import './ForgotPassword.scss'

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { resetPassword } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError(''); // Setting error to none while trying to sign in
            setLoading(true); // Set's loading to true to disable the button so users don't accidentally create multiple accounts
            // calling the reset password fxn
            await resetPassword(email);
            setMessage('Check your inbox for further instructions');
        }

        catch{
            setError('Failed to reset password');
        }

        setLoading(false);
    }

    return (
        <div className="center-container">
            <div className="reset-password-container">
                <h2 className="reset-password-form-title">Reset Password</h2>
                {error && <h3 className="error-message">{error}</h3>}
                {message && <h3 className="sucess-message">{message}</h3>}
                <form action="" className="reset-password-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        style={{fontSize:"0.9rem"}} 
                        className="email-field" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button className="reset-password-btn" disabled={loading}>Reset Password</button>
                </form>
                <div className="login-fp-container">
                    <Link to="/login">Login ?</Link>
                </div>
                <p className="not-a-user">Not registered? <Link to="/signup">Register Now</Link></p>
            </div>
        </div>
    )
}

export default ForgotPassword
