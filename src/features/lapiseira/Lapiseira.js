import React from 'react';

import './lapiseira.css';


import { useStoreState, useStoreActions } from 'easy-peasy';


const Lapiseira = () => {


    const items = useStoreState(store => store.items.items);
    const changeLapiseira = useStoreActions(action => action.items.changeLapiseira);

    const lapiseira = items[0];

    const handleChangeInitialLapiseira = (value, index) => {
        changeLapiseira({
            index: index,
            value: value,
        });
    }

    return (
        <>
            <div className='lapiseira-container'>
                <div className='lapiseira-row'>
                    <span className='lapiseira-header'>Períodos</span>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return <span className='lapiseira-header' key={index}>{item}</span>
                        })
                    }
                </div>

                <div className='lapiseira-row'>
                    <span className='lapiseira-name'>Necessidade bruta</span>
                    {
                        lapiseira.entradas.map((ent, index) => {
                            return <input
                                value={ent}
                                onChange={(e) => handleChangeInitialLapiseira(e.target.value, index)}
                                type='number'
                                className='lapiseira-input'
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Lapiseira;