import React from 'react';
import { Marker as MarkerNative } from 'react-map-gl';
import PropTypes from 'prop-types';

const Marker = ({
  name,
  onPress,
  latitude,
  longitude,
}) => (
  <MarkerNative latitude={latitude} longitude={longitude} offsetLeft={-15} offsetTop={-30}>
    <div role="button" tabIndex={0} onClick={() => onPress()} onKeyPress={() => onPress()}>
      <img src="marker.png" alt={name} width={30} height={30} />
    </div>
  </MarkerNative>
);

Marker.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Marker;
