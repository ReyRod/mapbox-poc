import React from 'react';
import { Popup as PopupNative } from 'react-map-gl';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Popup = ({
  visible,
  closePopup,
  latitude,
  longitude,
}) => {
  if (!visible) return null;
  return (
    <PopupNative
      latitude={latitude}
      longitude={longitude}
      closeButton
      closeOnClick={false}
      onClose={() => closePopup()}
    >
      <div style={Container}>
        <b>Project Name</b>
        <p>Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <p>
          <b>Since: </b>2015
        </p>
        <p>
          <b>Address: </b>Rua de Lapa 1234
        </p>
        <p>
          <b>Email: </b>project@gmail.com
        </p>
        <p>
          <b>Phone Number: </b>41213121
        </p>
      </div>
    </PopupNative>
  );
};

Popup.defaultProps = {
  visible: false,
  data: null,
};

Popup.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.shape({}),
  closePopup: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Popup;
