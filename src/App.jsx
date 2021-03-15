import './App.css'
import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import Usuarioinfo from './components/condicional/Usuarioinfor'

export default () =>(
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#008 - Renderização Condicional" cor="#982395">
            <ParOuImpar numero={21}></ParOuImpar>
            <Usuarioinfo usuario={{ nome:'Melvin'}}></Usuarioinfo>
            <Usuarioinfo usuario={{ email:'davidmarques@gmailc.om'}}></Usuarioinfo>
        </Card>

        <Card titulo="#007 - Desafio Repetição" cor="#3A9AD9">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#006 - Repetição" cor="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#005 - Componentes com Filhos" cor="#00C8F8">
           <Familia sobrenome="Marques">
            <FamiliaMembro nome="Melvin" />
            <FamiliaMembro nome="Jacke" />
            <FamiliaMembro nome="Poliana" /> 
           </Familia>
        </Card>

        <Card titulo="#004 - Desafio Aletório" cor="#eecb08">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#003 - Fragmento" cor="#E94C6F">
            <Fragmento />
        </Card>
        
        <Card titulo="#002 - Com parametro" cor="#E9B71A">
            <ComParametro
            nome="Melvin Marques"
            cargo="Técnico de Informática Jr."
            salario={1600}
             />
        </Card>

        <Card titulo="#001 - Primeiro Componente" cor="#588C73">
                    <Primeiro />
                </Card>
        </div>

       
    </div>
)