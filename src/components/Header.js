import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Header.scss'
import Avatar from '@material-ui/core/Avatar'
import { AuthContext } from '../context/AuthContext'

function Header() {
    const [error, setError] = useState('');
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login');
        }
        catch{
            setError('Failed to logout!');
        }
    }

    return (
        <header className="header">
            <h1 className="header__title"><Link to="/dashboard">Scrims</Link></h1>
            <div className="header-nav">
                <Avatar className="avatar" src=""/>

                <div className="header-dropdown">
                    <div className="header-dropdown__top-pane">
                        {error && <h3 className="error-message">{error}</h3>}
                        <div className="top-pane__item"><Link to="/dashboard">Dashboard</Link></div>
                        <div className="top-pane__item"><Link to="/scrims">Scrims</Link></div>
                    </div>
                    <div className="header-dropdown__bottom-pane">
                        <button className="logout-btn" onClick={handleLogout}>Log out</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
