import React, { useState, useEffect, useRef, useContext } from 'react'
import { Context } from '../Context';
import { Switch, Route, Link } from 'react-router-dom'
import './Scrim.scss'
import Editor from './Editor'

function Scrim({data}) {
    const [html, setHtml] = useState(data.html);
    const [css, setCss] = useState(data.css);
    const [js, setJs] = useState(data.js);
    const [srcDoc, setSrcDoc] = useState('');
    const outputPaneContainerRef = useRef(null);
    const outputPaneRef = useRef(null);

    const { updateScrim } = useContext(Context);

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

    // Function to save the code
    function saveCode() {
        const updatedScrim = {...data};
        updatedScrim.html = html;
        updatedScrim.css = css;
        updatedScrim.js = js;
        console.log(updatedScrim); //Remove This
        updateScrim(updatedScrim);
    }

    // Function to close output pane
    function closeOutputPane() {
        outputPaneContainerRef.current.style.display = "none"
    }

    // Function to make output pane small
    function makeSmallOutputPane() {
        outputPaneRef.current.style.width = "25%"
    }

    // Function to make output pane big
    function makeBigOutputPane() {
        outputPaneRef.current.style.width = "95%"
    }

    // Functions for toggle btn to work
    function toggleNav() {
        document.body.classList.toggle('nav-open');
    }

    function removeClass() {
        if(document.body.classList.contains('nav-open')) {
            document.body.classList.remove('nav-open')
        }
    }

    return (
        <>
            <aside style={{position: "relative"}}>
                <button className="toggle-btn" onClick={toggleNav}><span className="hamburger"></span></button>
                <nav className="nav">
                    <ul className="nav-list">
                        <Link to={`/scrims/editor/${data.id}/html`}><li className="nav-list__item" onClick={removeClass}>HTML</li></Link>
                        <Link to={`/scrims/editor/${data.id}/css`}><li className="nav-list__item" onClick={removeClass}>CSS</li></Link>
                        <Link to={`/scrims/editor/${data.id}/js`}><li className="nav-list__item" onClick={removeClass}>Javascript</li></Link>
                    </ul>
                </nav>
            </aside>

            <div className="pane top-pane">
                <Switch>
                    <Route exact path={`/scrims/editor/${data.id}/html`}>
                        <Editor 
                            language="xml" 
                            displayName="HTML" 
                            value={html} 
                            onChange={setHtml}
                            ref={outputPaneContainerRef}
                            run={run} 
                            saveCode={saveCode}
                        />
                    </Route>
                    <Route path={`/scrims/editor/${data.id}/css`}>
                        <Editor 
                            language="css" 
                            displayName="CSS" 
                            value={css} 
                            onChange={setCss}
                            ref={outputPaneContainerRef}
                            run={run} 
                            saveCode={saveCode}
                        />
                    </Route>
                    <Route path={`/scrims/editor/${data.id}/js`}>
                        <Editor 
                            language="javascript" 
                            displayName="Javascript" 
                            value={js} 
                            onChange={setJs}
                            ref={outputPaneContainerRef}
                            run={run} 
                            saveCode={saveCode}
                        />
                    </Route>
                </Switch>
            </div>
            <div className="output-pane-container" ref={outputPaneContainerRef} onClick={ e => {
                // This part closes the mini browser if we click outside of mini browser
                if(e.target === outputPaneContainerRef.current) {
                    closeOutputPane();
                }
            }}>
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
            </div>
        </>
    )
}

export default Scrim
