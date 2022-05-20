import Membro from './../membros/membro';
import React, { cloneElement } from 'react';

export default function Familia(props) {
    return (
        <div className='familiaComponent'>
            <Membro firstname="Bruno" lastname={props.lastname} />
            <Membro firstname="Rebecca" {...props} />
            <Membro firstname="João " lastname="Silva" />

            <div>
                {cloneElement(props.children, { ...props })}
            </div>

            <div>
                {
                    React.Children.map(props.children, (child) => {
                        return cloneElement(child, props)
                    })}
            </div>
        </div>
    )
}