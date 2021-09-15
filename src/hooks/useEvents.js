import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../services/animalCrossingApi';

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
