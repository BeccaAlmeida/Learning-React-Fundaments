import './card.css';
import React from 'react';

export  default function Card(props) {
    const cardColor = {
        backgroundColor: props.color || '#fff',
        borderColor: props.color ||' #fff'
    }
    return (
        <div className='layoutCard' style={cardColor}>
            <span className='titleCard'>{props.title}</span>
            <div className='contentCard'>
                { props.children }
            </div>
        </div>
    )
}