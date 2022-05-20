import React, { Component } from 'react';
import './contador.css';

import Form from './Form';
import Button from './Button';
import Display from './display';

export default class Contador extends Component {

    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5

    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo,
        })
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo,
        })
    };

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='contadorComponent'>
                <h1>Usando Classe</h1>
                <span>Contador</span>
                <Form passo={this.state.passo} setPasso={this.setPasso} />
                <Display number={this.state.number} />
                <div>
                    <Button setDec={this.dec} setInc={this.inc}></Button>
                </div>
            </div>
        )
    }
}