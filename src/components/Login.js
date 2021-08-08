import React, { useState, useContext } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom'
import './Login.scss'
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError(''); // Setting error to none while trying to sign in
            setLoading(true); // Set's loading to true to disable the button so users don't accidentally create multiple accounts
            // calling the signup fxn
            await login(email, password);
            history.push('/dashboard');
        }

        catch{
            setError('Failed to sign in');
        }

        setLoading(false);
    }

    return (
        <div className="center-container">
            <div className="login-container">
                <h2 className="login-form-title">Welcome Back</h2>
                {error && <h3 className="error-message">{error}</h3>}
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        style={{fontSize:"0.9rem"}} 
                        className="email-field" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className="password-field" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button className="login-btn" disabled={loading}>Login</button>
                </form>
                <button className="login-with-google"><FcGoogle className="icon"/> Login with Google</button>
                <div className="forgot-password-container">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <p className="not-a-user">Not registered? <Link to="/signup">Register Now</Link></p>
            </div>
        </div>
    )
}

export default Login
