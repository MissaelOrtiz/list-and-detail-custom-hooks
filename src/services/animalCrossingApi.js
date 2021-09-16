export const fetchApi = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers/')
    .then((res) => res.json())
    .then((json) => {
      return json.map((character) => {
        return {
          id: character._id,
          name: character.name,
          image: character.image,
          gender: character.gender,
          quote: character.quote,
          species: character.species,
          birthday: character.birthday,
          phrase: character.phrase,
          style: character.style,
        };
      });
    }
    );
};
  
export const fetchVillager = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.json())
    .then((character) => {
      return {
        id: character._id,
        name: character.name,
        image: character.image,
        gender: character.gender,
        quote: character.quote,
        species: character.species,
        birthday: character.birthday,
        phrase: character.phrase,
        style: character.style,
      };});
};
