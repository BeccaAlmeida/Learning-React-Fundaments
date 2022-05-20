import './segundo.css';

export default function Segundo(props) {
    console.log(props)
    return (
        <div>
            <div className='segundoComponent'>
                <h3>{ props.titulo }</h3>
                <p>{ props.subtitulo }</p>
            </div>
        </div>
    )
}