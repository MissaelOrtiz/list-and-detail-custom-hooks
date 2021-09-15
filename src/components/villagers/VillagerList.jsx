import React from 'react';
import Villager from './Villager';
import { useListEvents } from '../../hooks/useEvents';

const VillagerList = () => {
  const { villagers, loading } = useListEvents();
  if(loading) return <h1>Now Loading...</h1>;
  return (
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
  );};

export default VillagerList;
