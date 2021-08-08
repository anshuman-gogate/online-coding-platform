import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './components/Login'
import Signup from './components/Signup'
import LandingPage from './pages/LandingPage'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const session = false;
  if(!session){
    return(
      <AuthProvider>
          <Switch>
            <Route path="/signup"><Signup/></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/forgot-password"><ForgotPassword /></Route>
            <PrivateRoute path="/" component={LandingPage}></PrivateRoute>
          </Switch>
      </AuthProvider>
    )
  }
  
  // return (
  //   <AuthProvider>
  //     <ContextProvider>
  //       <div className="app-container">
  //         <Header/>

  //         <Switch>
  //           <Route path="/scrims/editor/:scrimId"><ScrimDetail/></Route>
  //           <Route path="/"><Home/></Route>
  //         </Switch>
  //       </div>
  //     </ContextProvider>
  //   </AuthProvider>
  // )
}

export default App
