import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './ScrimBoard.scss'
import ScrimCard from './ScrimCard'
import { Context } from '../Context'

function ScrimBoard() {
    const { allScrims } = useContext(Context);
    const allScrimCards = allScrims.map(item => {
        return <ScrimCard id={item.id} key={item.id} title={item.title} />
    })

    return (
        <div className="scrim-board">
            <div className="scrim-board-header">
                <h2 className="scrim-board__title">Scrims</h2>
                <Link to="/scrims/new" className="new-scrim-btn">New Scrim</Link>
            </div>

            <div className="all-scrims">
                {allScrimCards}
            </div>
        </div>
    )
}

export default ScrimBoard
