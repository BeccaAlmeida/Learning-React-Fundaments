import React from 'react';
import './contador.css'

export default function Form(props) {

    return (
        <div className='formComponent'>
            <label htmlFor="">passo: </label>
            <input
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)}
            />
        </div>
    )

}