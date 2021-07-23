import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import Avatar from '@material-ui/core/Avatar'

function Header() {

    return (
        <header className="header">
            <h1 className="header__title"><Link to="/dashboard">Scrims</Link></h1>
            <Avatar className="avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQEdBVRIDJioHQ/profile-displayphoto-shrink_400_400/0/1617359492889?e=1632355200&v=beta&t=rG1TtaVjmRR_9Nz6laZFy_Qws48ICs2zcJWiNkR_CuE"/>
        </header>
    )
}

export default Header
