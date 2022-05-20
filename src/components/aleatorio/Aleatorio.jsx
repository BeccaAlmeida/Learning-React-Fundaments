/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import './aleatorio.css';

export default (props) => {
    const { max, min } = props;
    let result = 0;

    function randomNumbers() {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div className="componentAleatorio">
            <form className='aleatorioForm'>
                <div className='inputMax'>
                    <label>Número Máximo</label>
                    <input
                        type="number"
                        defaultValue={max}
                        disabled={true}
                    />
                </div>
                <div className='inputMin'>
                    <label>Número Mínimo</label>
                    <input
                        type="number"
                        defaultValue={min}
                        disabled={true}
                    />
                </div>
                <button className='buttonRandom' onClick={randomNumbers()}>Sortiar</button>

                <div>
                    <p>{ result }</p>
                </div>
            </form>
        </div>
    )
}