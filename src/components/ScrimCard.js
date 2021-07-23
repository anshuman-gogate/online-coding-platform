import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ScrimCard.scss'
import { BsTrashFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { Context } from '../Context'

function ScrimCard({title, id}) {
    const { updateScrimTitle, deleteScrim } = useContext(Context);
    const [newTitle, setNewTitle] = useState(title);
    const cardOverlayRef = useRef(null);

    // Function to handle delete
    function handleDelete() {
        deleteScrim(id);
    }

    // Function to handle title change
    function handleChangeTitle() {
        cardOverlayRef.current.style.display = "flex";
    }

    return (
        <div className="scrim-card">
            <Link to={`/scrims/editor/${id}`}><h2 className="scrim-card__title">{title}</h2></Link>
            <div className="util-btns">
                <FaEdit onClick={handleChangeTitle}/>
                <BsTrashFill onClick={handleDelete}/>
            </div>
            <div className="card-overlay" ref={cardOverlayRef}>
                <div className="update-title-form">
                    <h2 className="update-title">Enter a new title</h2>

                    <input 
                        type="text" 
                        className="update-title-input" 
                        placeholder="Enter new title....."
                        value={newTitle}
                        onChange={ e => {
                            setNewTitle(e.target.value);
                        }}
                    />

                    <div className="update-btns">
                        <button className="cancel-btn" onClick={() => {
                            cardOverlayRef.current.style.display = "none";
                        }}>Cancel</button>
                        <button className="confirm" disabled={!newTitle} onClick={() => {
                            updateScrimTitle(id, newTitle);
                            cardOverlayRef.current.style.display = "none";
                        }}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrimCard
