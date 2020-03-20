import React from 'react';
import { Wrapper, Section } from './styles';

const Header = () => (
  <div style={Wrapper}>
    <div style={Section} />
    <div style={Section}>
      <img
        src="http://gastromotiva-site.azurewebsites.net/wp-content/uploads/2018/08/logo-footer.png"
        width={455/6}
        height={232/6}
        alt="Gastromotiva"
      />
    </div>
    <div style={Section} />
  </div>

);

export default Header;
