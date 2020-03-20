import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import Marker from '../Marker';
import Popup from '../Popup';

const Map = () => {
  const [popup, setPopup] = useState({
    visible: false,
    data: null,
  });

  const [viewport, setViewport] = useState({
    latitude: -22.9156802,
    longitude: -43.1801873,
    zoom: 14,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1Ijoic2F2YWxpa2l0dWt1IiwiYSI6ImNrMjIxczBhMzA3bWMzY3Fvc2RydzQxd3UifQ.hNGtZUh5syY9E684sH54bg"
      {...viewport}
      width={window.innerWidth}
      height={window.innerHeight}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker
        latitude={-22.9156894}
        longitude={-43.178059}
        name="test"
        onPress={() => setPopup({ visible: true, data: 'asd' })}
      />
      <Popup
        {...popup}
        latitude={-22.9156894}
        longitude={-43.178059}
        closePopup={() => setPopup({ visible: false, data: null })}
      />
    </ReactMapGL>
  );
};

export default Map;
