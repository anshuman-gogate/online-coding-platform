import React, {useState, useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './NewScrim.scss'
import {Context} from '../Context'

function NewScrim() {
    const [title, setTitle] = useState('');
    const [created, setCreated] = useState(false);

    const { createNewScrim } = useContext(Context);

    function handleChange(e) {
        setTitle(e.target.value);
    }

    return (
        <div className="new-scrim">
            <h1 className="new-scrim__title">Create a New Scrim</h1>
            <input 
                type="text" 
                className="new-scrim-input"
                placeholder="Title of scrim" 
                value={title} 
                onChange={handleChange}
            />
            <button className="new-scrim__btn" disabled={title === '' || title === ' '} onClick={() => {
                createNewScrim(title);
                setCreated(true);
            }}>Create!</button>

            <Switch>
                <Route exact path="/scrims/new">
                    {created && <Redirect to="/scrims" />}
                </Route>
            </Switch>
        </div>
    )
}

export default NewScrim
