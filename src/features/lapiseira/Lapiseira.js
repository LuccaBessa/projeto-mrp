import React from 'react';

import './lapiseira.css';


const Lapiseira = () => {
    const periodos = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className='lapiseira-container'>
                <div className='lapiseira-row'>
                <span className='lapiseira-header'>Períodos</span>
                {
                    periodos.map((item, index) => {
                        return <span className='lapiseira-header' key={index}>{item}</span>
                    })
                }
                </div>

                <div className='lapiseira-row'>
                    <span className='lapiseira-name'>Necessidade bruta</span>
                </div>
            </div>
        </>
    );
}

export default Lapiseira;