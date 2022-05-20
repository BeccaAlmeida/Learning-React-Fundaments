import './tabelaProdutos.css';
import produtos from './../../data/produtos';

export default function TabelaProdutos() {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className='tabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}