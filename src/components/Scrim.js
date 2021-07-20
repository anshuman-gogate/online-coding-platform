import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Scrim.scss'
import Editor from './Editor'

function Scrim() {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');
    const outputPaneRef = useRef(null);

    // This is where we render HTML, CSS and Javascript onto our iframe 
    // useEffect( () => {
    //     const timeout = setTimeout(() => {
    //         setSrcDoc(
    //             `
    //             <html>
    //                 <body>${html}</body>
    //                 <style>${css}<style>
    //                 <script>${js}</script>
    //             </html>
    //             `
    //         )
    //     } , 250)

    //     return () => clearTimeout(timeout);

    // } , [html , css , js] )

    // Function to render our code
    function run() {
        setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `)
    }

    // Function to close output pane
    function closeOutputPane() {
        outputPaneRef.current.style.display = "none"
    }

    // Function to make output pane small
    function makeSmallOutputPane() {
        outputPaneRef.current.style.width = "250px"
    }

    // Function to make output pane big
    function makeBigOutputPane() {
        outputPaneRef.current.style.width = "96%"
    }

    return (
        <>
            <div className="pane top-pane">
                <Switch>
                    <Route exact path="/">
                        <Editor 
                            language="xml" 
                            displayName="HTML" 
                            value={html} 
                            onChange={setHtml}
                            ref={outputPaneRef}
                            run={run} 
                        />
                    </Route>
                    <Route path="/css">
                        <Editor 
                            language="css" 
                            displayName="CSS" 
                            value={css} 
                            onChange={setCss}
                            ref={outputPaneRef}
                            run={run} 
                        />
                    </Route>
                    <Route path="/js">
                        <Editor 
                            language="javascript" 
                            displayName="Javascript" 
                            value={js} 
                            onChange={setJs}
                            ref={outputPaneRef}
                            run={run} 
                        />
                    </Route>
                </Switch>
            </div>
            <div className="pane output-pane" ref={outputPaneRef}>
                <div className="output-pane-navigations">
                    <div className="close-btn" onClick={closeOutputPane}></div>
                    <div className="make-small-btn" onClick={makeSmallOutputPane}></div>
                    <div className="make-big-btn" onClick={makeBigOutputPane}></div>
                </div>
                <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts" //helps with security purposes
                width="100%"
                height="100%"
                />
            </div>
        </>
    )
}

export default Scrim
