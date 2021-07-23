import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ScrimCard.scss'
import { BsTrashFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { Context } from '../Context'

function ScrimCard({title, id}) {
    const { deleteScrim } = useContext(Context);

    // Function to handle delete
    function handleDelete() {
        deleteScrim(id);
    }

    return (
        <div className="scrim-card">
            <Link to={`/scrims/editor/${id}`}><h2 className="scrim-card__title">{title}</h2></Link>
            <div className="util-btns">
                <FaEdit/>
                <BsTrashFill onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default ScrimCard
