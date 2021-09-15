import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi, fetchVillager } from '../services/animalCrossingApi';

export const useListEvents = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  return { loading, villagers };
};

export const useDetailEvents = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});
  
  useEffect(() => {
    fetchVillager(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, villager }; 
};
