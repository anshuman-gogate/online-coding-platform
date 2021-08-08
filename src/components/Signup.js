import React, {useState, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Signup.scss'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../context/AuthContext'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useContext(AuthContext);
    const history = useHistory(); 

    async function handleSubmit(e) {
        e.preventDefault();

        if(password !== confirmPassword) {
            return setError("passwords don't match");
        }

        try {
            setError(''); // Setting error to none while trying to sign in
            setLoading(true); // Set's loading to true to disable the button so users don't accidentally create multiple accounts
            // calling the signup fxn
            await signup(name, email, password);
            history.push('/');
        }

        catch{
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <div className="center-container">
            <div className="signup-container">
                <h2 className="signup-form-title">Create an Account</h2>
                {error && <h3 className="error-message">{error}</h3>}
                <form action="" className="signup-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="name-field" 
                        placeholder="Enter your name" 
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                        required
                    />
                    <input 
                        type="email" 
                        style={{fontSize:"0.9rem"}} 
                        className="email-field" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className="password-field" 
                        placeholder="Choose a password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className="password-field confirm-password-field" 
                        placeholder="Re-enter your password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button className="signup-btn" disabled={loading}>Register</button>
                </form>

                {/* <button className="signup-with-google" disabled={loading}>
                    <FcGoogle className="icon"/>Signup with Google
                </button> */}
                <p className="not-a-user">Registered? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup
