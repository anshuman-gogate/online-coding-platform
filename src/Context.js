import React, {createContext, useState, useEffect} from 'react'

const Context = createContext();
const {Provider} = Context;
function ContextProvider({children}) {
    const [allScrims, setAllScrims] = useState([
        {
            id: 1,
            title: 'Anshuman test case',
            html: '<h1>Hello Anshuman</h1>',
            css: '',
            js: ''
        }
    ]);

    // Function to create a new scrim
    function createNewScrim(title) {
        const newScrim = {
            id: Math.random() * 10000,
            title: title,
            html: '',
            css: '',
            js: ''
        }

        setAllScrims(prev => [...prev , newScrim]);
    }

    // Function to delete an existing scrim
    function deleteScrim(id) {
        const updatedAllScrims = allScrims.filter(item => {
            if(item.id !== id) {
                return item;
            }
        })

        setAllScrims(updatedAllScrims);
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
    }

    return(
        <Provider value={{allScrims, createNewScrim, deleteScrim, updateScrim, updateScrimTitle}}>
            {children}
        </Provider>
    )
}

export {Context , ContextProvider};