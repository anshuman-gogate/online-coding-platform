import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import './Home.scss'
import Dashboard from '../components/Dashboard'
import ScrimBoard from '../components/ScrimBoard'
import NewScrim from '../components/NewScrim'

function Home() {
    return (
        <div className="home">
            <div className="home-navigations">
                <Link to="/dashboard"><h2 className="home-nav-item">Dashboard</h2></Link>
                <Link to="/scrims"><h2 className="home-nav-item">Scrims</h2></Link>
            </div>

            <div className="home-display">
                <Switch>
                    <Route path="/dashboard"><Dashboard/></Route>
                    <Route exact path="/scrims"><ScrimBoard/></Route>
                    <Route path="/scrims/new"><NewScrim/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home
