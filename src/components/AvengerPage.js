import React from 'react';
import { Link } from 'react-router-dom';

import avengers from '../data';

function AvengerPage(props) {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id);
  return (
    <div>
      <img className='character-image' src={avenger.img} alt={avenger.alt} />
      <div className='character-info-wrapper'>
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
        <p>{avenger.description}</p>
        <Link to='/avengers'>Return to Avengers Database</Link>
      </div>
    </div>
  );
}

export default AvengerPage;
