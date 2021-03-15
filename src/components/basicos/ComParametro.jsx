import React from 'react'

export default function ComParamentro(props) {
    const nome = props.nome
    const cargo = props.cargo
    const salario = props.salario
    return (
        <div>
            <h3>Colaborador:</h3>
            <p>{nome}</p>
            <h3>Cargo:</h3>
            <p>{cargo}</p>
            <h3>Salário:</h3>
            <p>R$ {salario}</p>
        </div>
    )
}