import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import { ContextProvider } from '../Context'
import { AuthProvider } from '../context/AuthContext'
import ScrimDetail from '../components/ScrimDetail'

function LandingPage() {
    return (
        <AuthProvider>
            <ContextProvider>
                <div className="app-container">
                <Header/>

                <Switch>
                    <Route path="/scrims/editor/:scrimId"><ScrimDetail/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
                </div>
            </ContextProvider>
        </AuthProvider>
    )
}

export default LandingPage
