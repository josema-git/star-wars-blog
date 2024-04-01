const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],

      starships: [],

      vehicles: [],

      planets: [],

      species: [],

      films: [],

      favorites: [],
    },
    actions: {
      loadSomeData: async () => {
        setStore({ people: [] });
        setStore({ starships: [] });
        setStore({ vehicles: [] });
        setStore({ planets: [] });
        setStore({ species: [] });
        setStore({ films: [] });

        const resPeople = await fetch(`https://www.swapi.tech/api/people/`);
        const dataPeople = await resPeople.json();
        const newDataPeople = dataPeople.results;
        setStore({ people: newDataPeople });

        const resStarships = await fetch(
          `https://www.swapi.tech/api/starships/`
        );
        const dataStarships = await resStarships.json();
        const newDataStarships = dataStarships.results;
        setStore({ starships: newDataStarships });

        const resVehicles = await fetch(`https://www.swapi.tech/api/vehicles/`);
        const dataVehicles = await resVehicles.json();
        const newDataVehicles = dataVehicles.results;
        setStore({ vehicles: newDataVehicles });

        const resPlanets = await fetch(`https://www.swapi.tech/api/planets/`);
        const dataPlanets = await resPlanets.json();
        const newDataPlanets = dataPlanets.results;
        setStore({ planets: newDataPlanets });

        const resSpecies = await fetch(`https://www.swapi.tech/api/species/`);
        const dataSpecies = await resSpecies.json();
        const newDataSpecies = dataSpecies.results;
        setStore({ species: newDataSpecies });
      },
    },
  };
};

export default getState;
