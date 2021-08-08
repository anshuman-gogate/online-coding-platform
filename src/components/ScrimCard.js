import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ScrimCard.scss'
import { BsTrashFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { Context } from '../Context'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function ScrimCard({title, id}) {
    const { updateScrimTitle, deleteScrim } = useContext(Context);
    const [newTitle, setNewTitle] = useState(title);
    const [titleModal, setTitleModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const cardOverlayRef = useRef(null);

    // Function to handle delete
    function handleDelete() {
        cardOverlayRef.current.style.display = "flex";
        setDeleteModal(true);
    }

    // Function to handle title change
    function handleChangeTitle() {
        cardOverlayRef.current.style.display = "flex";
        setTitleModal(true);
    }

    const toDeleteModal = (
        <div className="modal">
            <div className="logo-container">
                <AiOutlineCloseCircle className="cancel-icon"/>
            </div>
            <h2 className="delete-title">Are you sure?</h2>
            <p className="delete-desc">Clicking on okay will permanently delete the scrim!</p>

            <div className="update-btns">
                <button className="cancel-btn cancel-delete" onClick={() => {
                    setDeleteModal(false);
                    cardOverlayRef.current.style.display = "none";
                }}>Cancel</button>
                <button className="confirm confirm-delete" onClick={() => {
                    deleteScrim(id);
                    setDeleteModal(false);
                    cardOverlayRef.current.style.display = "none";
                }}>Delete</button>
            </div>
        </div>
    )

    const updateTitleModal = (
        <div className="modal update-title-form">
            <h2 className="update-title">Enter a new title</h2>

            <input 
                type="text" 
                className="update-title-input" 
                placeholder="Enter new title"
                value={newTitle}
                onChange={ e => {
                    setNewTitle(e.target.value);
                }}
            />

            <div className="update-btns">
                <button className="cancel-btn" onClick={() => {
                    setTitleModal(false);
                    cardOverlayRef.current.style.display = "none";
                }}>Cancel</button>
                <button className="confirm" disabled={!newTitle} onClick={() => {
                    updateScrimTitle(id, newTitle);
                    setTitleModal(false);
                    cardOverlayRef.current.style.display = "none";
                }}>Confirm</button>
            </div>
        </div>
    )

    return (
        <div className="scrim-card">
            <Link to={`/scrims/editor/${id}`} className="editor-link">
                <h2 className="scrim-card__title">{title}</h2>
            </Link>
            <div className="util-btns">
                <FaEdit onClick={handleChangeTitle} className="update-title-btn"/>
                <BsTrashFill onClick={handleDelete} className="trash-btn"/>
            </div>
            <div className="card-overlay" ref={cardOverlayRef}>
                {deleteModal && toDeleteModal}
                {titleModal && updateTitleModal}
            </div>
        </div>
    )
}

export default ScrimCard
