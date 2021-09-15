import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <ul role="list" aria-label="villagers">
    {villagers.map((villager) => (
      <li key={villager.id}>
        <Villager 
          villagerName={villager.name} 
          villagerId={villager.id} 
          villagerImage={villager.image}
        />
      </li>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default VillagerList;
