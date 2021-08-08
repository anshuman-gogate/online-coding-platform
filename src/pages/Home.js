import React, {useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import './Home.scss'
import Dashboard from '../components/Dashboard'
import ScrimBoard from '../components/ScrimBoard'
import NewScrim from '../components/NewScrim'

function Home() {
    const [dashactive, setDashActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);

    return (
        <div className="home">
            <div className="home-navigations">
                <h2 className={dashactive ? "home-nav-item active" : "home-nav-item"}>
                    <Link to="/dashboard">Dashboard</Link>
                </h2>
                <h2 className={projectsActive ? "home-nav-item active" : "home-nav-item"}>
                    <Link to="/scrims">Projects</Link>
                </h2>
            </div>

            <div className="home-display">
                <Switch>
                    <Route path="/dashboard"><Dashboard setDashActive={setDashActive}/></Route>
                    <Route exact path="/scrims"><ScrimBoard setProjectsActive={setProjectsActive}/></Route>
                    <Route path="/scrims/new"><NewScrim/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home
