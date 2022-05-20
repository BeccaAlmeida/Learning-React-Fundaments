// JSX convert html em javascript podendo usar dentro do javascript o html usando biblioteca React

import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import App from './App';


const tag = <h1>Learning React</h1>

ReactDOM.render(
    <div className='indexStyle'>
        {tag}
        <App />
    </div>,
    document.getElementById('root')
);