/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './parOuImpar.css';

export default function ParOuImpar(props) {
    const [number, setNumber] = useState(0);
    let [isPar] = useState(true);

    isPar = number % 2 === 0;
    
    function getNumber(e) {
        setNumber(e.target.value);
    }

    return (
        <div className='parOuImparComponent'>
            <input
                type="number"
                value={number}
                onChange={getNumber}
            />
            <input
                type="number"
                value={number}
                readOnly
            />
            <input
                type="number"
                value={undefined}
            />

            {isPar ? <span>Número Par</span> : <span>Número Ímpar</span>}

        </div>
    )
}