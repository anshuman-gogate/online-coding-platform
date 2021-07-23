import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ContextProvider } from './Context'
import ScrimDetail from './components/ScrimDetail'

function App() {
  return (
    <ContextProvider>
      <div className="app-container">
        <Header/>

        <Switch>
          <Route path="/scrims/editor/:scrimId"><ScrimDetail/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </ContextProvider>
  )
}

export default App
