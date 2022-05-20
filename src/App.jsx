/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Sorteio from './components/mega/sorteio';
import Contador from './components/contador/contador';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/produtos/TabelaProdutos';
import ListaAlunos from './components/repeticao/listaAlunos';
import Membro from './../src/components/componentPai&Filho/membros/membro';
import Familia from './components/componentPai&Filho/familia/familia';
import Card from './components/layout/Card';
import Aleatorio from './components/aleatorio/Aleatorio';
import Primeiro from './components/primeiro/Primeiro';
import Segundo from './components/segundo/segundo';
import './App.css';

export default () => {
    return (
        <div className='app'>
             <Card color='#F96646' title="#09 - Mega Sena">
                <Sorteio quantity={6} />
            </Card>

            <Card color='#EDD83D' title="#08 - Contador com Classe">
                <Contador numeroInicial={10} />
            </Card>

            <Card color='#6AB547' title="#07 - Renderização Condicional">
                <ParOuImpar />
            </Card>

            <Card color='#d3a588' title="#06 - Tabela Produtos">
                <TabelaProdutos />
            </Card>

            <Card color='#22aaa1' title="#05 - Repetição">
                <ListaAlunos />
            </Card>

            <Card color='#d64161' title="#04 - Componente Filho">
                <Familia lastname="Ferreira">
                    <Membro firstname="Children" />
                </Familia>
            </Card>

            <Card color='#8A2BE2' title="#03 - Componente Aleatório">
                <Aleatorio max={1} min={60} />
            </Card>

            <Card color='#A52A2A' title="#02 - Segundo Component">
                <Segundo titulo='Segundo Componente' subtitulo='Com Parametro' />
            </Card>

            <Card color='#7FFFD4' title="#01 - Primeiro Component">
                <Primeiro />
            </Card>
        </div>
    )
}