import React from 'react';

import './results.css';

import { useStoreState, useStoreActions } from 'easy-peasy';

import { calculate } from '../../calc/calc';

//tabela de results


const Results = () => {

    const items = useStoreState(store => store.items.items);

    const results = [calculate(items)[0]];
    //  const results = items;

    return (
        <>
            <div className='results-container'>
                {results.map(item => {
                    return (
                        <div className='result-container'>
                            <div className='result-info-container'>
                                <div className='info'>
                                    <span className='info-text'>{item.nome}</span>
                                    <span className='info-text'>Lote= {item.tamanhoLote}</span>
                                    <span className='info-text'>LT= {item.leadTime}</span>
                                    <span className='info-text'>ES= {item.estoqueSegurança}</span>
                                </div>
                            </div>
                            <div className='result-leads-container'>
                                <div className='results-row'>
                                    <span className='results-header'>Períodos</span>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                                            return <span className='results-header' key={index}>{item}</span>
                                        })
                                    }
                                </div>

                                <div className='results-row'>
                                    <span className='results-name'>Necessidade bruta</span>
                                    {
                                        item.entradas.map((ent, index) => {
                                            return <span className={`${ent === -1 ? 'stock-out' : 'results-txt'}`} key={index}>{ent === -1 ? 0 : ent}</span>
                                        })
                                    }
                                </div>

                                <div className='results-row'>
                                    <span className='results-name'>{`Est. projetado | `}<b>{item.estoqueInicial}</b></span>
                                    {
                                        item.estoqueProjetado.map((ent, index) => {
                                            return <span className={`${ent === -1 ? 'stock-out' : 'results-txt'}`} key={index}>{ent === -1 ? 0 : ent}</span>
                                        })
                                    }
                                </div>

                                <div className='results-row'>
                                    <span className='results-name'>Recebimentos Planej.</span>
                                    {
                                        item.recebimentosProgramados.map((ent, index) => {
                                            return <span className={`${ent === -1 ? 'stock-out' : 'results-txt'}`} key={index}>{ent === -1 ? 0 : ent}</span>
                                        })
                                    }
                                </div>

                                <div className='results-row'>
                                    <span className='results-name'>Liberação das Ordens Planej.</span>
                                    {
                                        item.saida.map((ent, index) => {
                                            return <span className={`${ent === -1 ? 'stock-out' : 'results-txt'}`} key={index}>{ent === -1 ? 0 : ent}</span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Results;