import "./Tabela.css"
import React from 'react'

import produtos from '../data/produtos'


export default (props) => {

function getLinhas() {
    return produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })
}

    return (
        <div className="TabelaProduto">
            <table >
                <thead>
                <tr >
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                </thead>
            <tbody>

               {getLinhas()}

            </tbody>
            </table>
        </div>
    );
};