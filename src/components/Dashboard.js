import React, {useEffect} from 'react'
import './Dashboard.scss'

function Dashboard({setDashActive}) {
    
    useEffect( () => {
        setDashActive(true);

        return () => {
            setDashActive(false);
        }
    }, [] )

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Welcome back!</h1>
        </div>
    )
}

export default Dashboard
