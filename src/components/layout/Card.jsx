import "./Card.css";
import React from "react"

export default (props) => {

    const estilo = {
        backgroundColor: props.cor || '#74992e',
        borderColor: props.cor || '#74992e',
    }
    return (
        <div className="Card" style={estilo}>
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo">
                {props.children}
            </div>
        </div>
    );
};