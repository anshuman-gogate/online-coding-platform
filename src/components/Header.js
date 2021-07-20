import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import Avatar from '@material-ui/core/Avatar'

function Header() {
    function toggleNav() {
        document.body.classList.toggle('nav-open');
    }

    function removeClass() {
        if(document.body.classList.contains('nav-open')) {
            document.body.classList.remove('nav-open')
        }
    }

    return (
        <header className="header">
            <button className="toggle-btn" onClick={toggleNav}><span className="hamburger"></span></button>
            <nav className="nav">
                <ul className="nav-list">
                    <Link to="/"><li className="nav-list__item" onClick={removeClass}>HTML</li></Link>
                    <Link to="/css"><li className="nav-list__item" onClick={removeClass}>CSS</li></Link>
                    <Link to="/js"><li className="nav-list__item" onClick={removeClass}>Javascript</li></Link>
                </ul>
            </nav>
            <Avatar className="avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQEdBVRIDJioHQ/profile-displayphoto-shrink_400_400/0/1617359492889?e=1632355200&v=beta&t=rG1TtaVjmRR_9Nz6laZFy_Qws48ICs2zcJWiNkR_CuE"/>
        </header>
    )
}

export default Header
