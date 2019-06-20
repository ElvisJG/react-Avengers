import React from 'react';
import { Route, Link } from 'react-router-dom';

import AvengerDetails from './AvengerDetails';
import AvengerMovies from './AvengersMovies';

function AvengerPage(props) {
  const id = props.match.params.id;
  const avenger = props.avengers.find(avenger => `${avenger.id}` === id);
  return (
    <div>
      <img className='character-image' src={avenger.img} alt={avenger.alt} />
      <div className='character-info-wrapper'>
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
      </div>
      <Link to={`/avengers/${props.match.params.id}/details`}>
        Avengers Details
      </Link>
      <Link to={`/avengers/${props.match.params.id}/movies`}>Movies</Link>
      <Route
        path='/avengers/:id/details'
        render={props => (
          <AvengerDetails
            className='avenger-button'
            {...props}
            details={avenger.description}
          />
        )}
      />
      <Route
        path='/avengers/:id/movies'
        render={props => <AvengerMovies {...props} movies={avenger.movies} />}
      />
      <div>
        <Link to='/avengers'>Return to Avengers Database</Link>
      </div>
    </div>
  );
}

export default AvengerPage;
