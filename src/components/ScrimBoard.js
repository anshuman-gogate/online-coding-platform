import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './ScrimBoard.scss'
import ScrimCard from './ScrimCard'
import { Context } from '../Context'

function ScrimBoard({setProjectsActive}) {
    const { allScrims } = useContext(Context);
    const allScrimCards = allScrims.map(item => {
        return <ScrimCard id={item.id} key={item.id} title={item.title} />
    })

    useEffect( () => {
        setProjectsActive(true);

        return () => {
            setProjectsActive(false);
        }
    }, [] )

    return (
        <div className="scrim-board">
            <div className="scrim-board-header">
                <h2 className="scrim-board__title">Projects</h2>
                <Link to="/scrims/new" className="new-scrim-btn">New Project</Link>
            </div>

            <div className="all-scrims">
                {allScrimCards}
            </div>
        </div>
    )
}

export default ScrimBoard
