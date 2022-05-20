import './listaAlunos.css';
import alunos from './../../data/alunos';

export default function ListaAlunos() {
    const lis = alunos.map(aluno => {
        return <li key={aluno.id}> {aluno.id}) <strong>{aluno.nome}</strong>, nota: <strong>{aluno.nota}</strong> </li>
    })

    return (
        <div className='lista'>
            <ul style={{ listStyle: 'none' }}>
                {lis}
            </ul>
        </div>
    )
}