import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../UI/Header';
import SelectedPlace from '../UI/SelectedPlace';
import './MyPlace.css';

const MyPlace = props => {
  const url = new URL(window.location.href);
  const queryParams = url.searchParams;
  const coords = {
    lat: parseFloat(queryParams.get('lat')),
    lng: +queryParams.get('lng')
  };
  const address = queryParams.get('address');

  return (
    <React.Fragment>
      <Header title={address} />

      <SelectedPlace
        fallbackText="Could not find place."
        centerCoords={coords}
      />

      <section id="share-controls">
        <Link to="/">Share a New Place!</Link>
      </section>
    </React.Fragment>
  );
};

export default MyPlace;
