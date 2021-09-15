import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ villagerName, villagerImage, villagerId }) => (
  <button 
    onClick={() => {
      location.replace(`/${villagerId}`);
    }}>
    <img src={villagerImage} height={'200px'} alt={villagerName}/>
    <p>{villagerName}</p>
  </button>
);

Villager.propTypes = {
  villagerName: PropTypes.string.isRequired,
  villagerImage: PropTypes.string.isRequired,
  villagerId: PropTypes.string.isRequired
};

export default Villager;
