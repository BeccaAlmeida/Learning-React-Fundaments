import React from 'react';
import './membro.css';

export default function Membro(props) {
    return (
        <div className='membroComponent'>
            <span>{ props.firstname }</span>
            <strong>{ props.lastname }</strong>
        </div>
    )
}