import React from 'react';

import './card-list.style.css';
import Card from '../card/card.component';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monstors.map((monstor) => (
        <Card key={monstor.id} monstor={monstor} />
      ))}
    </div>
  );
};

export default CardList;
