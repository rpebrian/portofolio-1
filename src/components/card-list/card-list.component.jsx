import React from 'react';

import { Card } from '../card/card.component';


import './card-list.styles.css';

export const Cardlist = (props) => {
    return <div className='card-list'>
        {props.biodata.map(biodata => ( 
            <Card 
            key={biodata.id} 
            biodata={biodata}
            />
        ))}
    </div>
};