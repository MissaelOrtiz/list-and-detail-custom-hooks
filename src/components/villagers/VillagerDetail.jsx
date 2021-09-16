import React from 'react';
import { useDetailEvents } from '../../hooks/useEvents';

const VillagerList = () => {
  const { loading, villager } = useDetailEvents();
  if(loading) return <h1>Now Loading...</h1>;
  return (
    <div role="div" aria-label="villager">
      <img src={villager.image} alt={villager.name} height={'400px'}/>
      <p>{villager.name}</p>
      <p>{villager.gender}</p>
      <p>{villager.quote}</p>
      <p>{villager.species}</p>
      <p>{villager.birthday}</p>
      <p>{villager.phrase}</p>
      <p>{villager.style}</p>
    </div>
  );
};

export default VillagerList;
