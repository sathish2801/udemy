import React from 'react';
import './partner.scss';

const PartnerLogo = ({ initial, name }) => {
  return (
    <div className="partner-logo-container">
      <div className="partner-logo-circle">{initial}</div>
      <div className="partner-logo-text">{name}</div>
    </div>
  );
};

export default PartnerLogo;
