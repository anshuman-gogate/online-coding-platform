import React, { useContext } from 'react'
import { Context } from '../Context'
import './ScrimDetail.scss'
import Scrim from './Scrim'
import { useParams } from 'react-router-dom'

function ScrimDetail() {
    const {scrimId} = useParams();
    const intScrimId = scrimId - '0'
    const { allScrims } = useContext(Context);
    const scrim = allScrims.find(item => item.id === intScrimId);
    return (
        <div>
            <Scrim data={scrim}/>
        </div>
    )
}

export default ScrimDetail
