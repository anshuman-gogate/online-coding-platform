import React, {createContext, useState, useEffect, useContext} from 'react'
import firebase from 'firebase';
import { AuthContext } from './context/AuthContext';

const Context = createContext();
const {Provider} = Context;
function ContextProvider({children}) {
    const { currentUser } = useContext(AuthContext); // Auth Context
    // Reference to the dataBase
    const userId = currentUser.uid; // user ID
    const databaseRef = firebase.database().ref('/users/' + userId)

    const [allScrims, setAllScrims] = useState([]); // State for all scrims

    // Getting data on page load
    useEffect(() => {
        databaseRef.on("value", snapshot => {
            const scrimsFirebase = snapshot.val();
            const newAllScrims = [];
            for(let id in scrimsFirebase) {
                newAllScrims.push({ id, ...scrimsFirebase[id] });
            }
            setAllScrims(newAllScrims);
        })
        
    }, [])

    console.log(allScrims) // clear this in future

    // Function to create a new scrim
    function createNewScrim(title) {
        const newScrim = {
            // id: Math.random() * 10000,
            title: title,
            html: '',
            css: '',
            js: ''
        }

        // setAllScrims(prev => [...prev , newScrim]);
        // trying firebase here
        databaseRef.push(newScrim); // pushing new scrim to firebase
    }

    // Function to delete an existing scrim
    function deleteScrim(id) {
        const updatedAllScrims = allScrims.filter(item => {
            if(item.id !== id) {
                return item;
            }
        })

        setAllScrims(updatedAllScrims);

        databaseRef.child(id).remove(); // updating the db
    }

    // Function to update the title of the scrim
    function updateScrimTitle(id, updatedTitle) {
        const updatedAllScrims = allScrims.map(item => {
            if(item.id === id) {
                item.title = updatedTitle;
            }
            return item;
        })

        setAllScrims(updatedAllScrims);

        databaseRef.child(id).update({ // updating the db
            title: updatedTitle,
        });
    }

    // Function to update an existing scrim
    function updateScrim(scrim) {
        const updatedAllScrims = allScrims.map(item => {
            if(item.id === scrim.id) {
                item.html = scrim.html;
                item.css = scrim.css;
                item.js = scrim.js;
            }
            return item;
        })

        setAllScrims(updatedAllScrims);
        databaseRef.child(scrim.id).update({ // updating the db
            html: scrim.html,
            css: scrim.css,
            js: scrim.js
        })
    }

    return(
        <Provider value={{allScrims, createNewScrim, deleteScrim, updateScrim, updateScrimTitle}}>
            {children}
        </Provider>
    )
}

export {Context , ContextProvider};