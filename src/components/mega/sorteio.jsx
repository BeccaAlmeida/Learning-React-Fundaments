/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react"
import './sorteio.css';

export default class Contador extends Component {

    state = {
        numbers: Array(this.props.quantity || 6).fill(0)
    }

    // toda chamda recursiva precisa de uma condição de parada.

    generateRandonNumber(max, min, array) {
        const numberRandom = Math.floor(Math.random() * (max + 1 - min) + min);
        return array.includes(numberRandom) ? this.generateRandonNumber(max, min, array) : numberRandom;
    }

    generateNumbers(quantity) {
        const numbers = Array(quantity).fill(0)
            .reduce((nums) => {
                const newNumber = this.generateRandonNumber(1, 60, nums)
                return [...nums, newNumber]
            }, []).sort((n1, n2) => n1 - n2);

            this.setState({
                numbers: numbers
            })
        return numbers;
    }

    getValues() {
        return this.state.numbers.map((num, i) => {
            return (
                <tr key={i} >
                    <td>{num}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='sorteioComponent'>
                <table>
                    <thead>
                        <tr>
                            <th>Mega Sena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getValues()}
                    </tbody>
                </table>
                <button className="buttonRandom" onClick={_ => this.generateNumbers(6)}>Gerar</button>
            </div>
        )
    }
}