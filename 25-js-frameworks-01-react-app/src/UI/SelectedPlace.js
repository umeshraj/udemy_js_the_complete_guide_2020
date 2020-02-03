import React, { useEffect, useRef } from 'react';

import './SelectedPlace.css';

const SelectedPlace = props => {
  const { centerCoords, fallbackText } = props;
  const mapEl = useRef();

  useEffect(() => {
    if (centerCoords) {
      const map = new window.google.maps.Map(mapEl.current, {
        center: centerCoords,
        zoom: 16
      });

      new window.google.maps.Marker({
        position: centerCoords,
        map: map
      });
    }
  }, [centerCoords]);

  return (
    <section id="selected-place">
      <div ref={mapEl}>{!centerCoords && <p>{fallbackText}</p>}</div>
    </section>
  );
};

export default SelectedPlace;
