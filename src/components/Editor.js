import React from 'react'
import './Editor.scss'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = React.forwardRef((props, ref) => {
    const {language , displayName, value, onChange, run} = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    function runCode() {
        // const outputPane = document.querySelector('.output-pane');
        ref.current.style.display = "flex"
        run();
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button className="run-btn" onClick={runCode}>Run</button>
            </div>

            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
})

export default Editor
