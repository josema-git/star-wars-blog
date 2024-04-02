const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],

      starships: [],

      vehicles: [],

      planets: [],

      species: [],

      films: [],

      info: [],
    },
    actions: {
      loadSpecificData: async (type, id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/${type}/${id}`
          );
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }

          const data = await response.json();
          const newData = data.result.properties;

          setStore((prevState) => ({
            ...prevState,
            info: newData,
          }));
        } catch (error) {
          console.error(error.message);
        }
      },

      loadAllData: async () => {
        try {
          const store = getStore();

          const types = [
            "people",
            "starships",
            "vehicles",
            "planets",
            "species",
            "films",
          ];

          const urlsToFetch = types
            .filter((type) => store[type].length === 0)
            .map((type) => `https://www.swapi.tech/api/${type}/`);

          if (urlsToFetch.length === 0) {
            console.log("Todos los datos ya están cargados.");
            return;
          }

          const responses = await Promise.all(
            urlsToFetch.map((url) => fetch(url))
          );
          responses.forEach((res) => {
            if (!res.ok) {
              throw new Error(`Error fetching data: ${res.statusText}`);
            }
          });

          const data = await Promise.all(responses.map((res) => res.json()));

          const newStore = { ...store };

          data.forEach((result, index) => {
            const type = urlsToFetch[index].match(/api\/(\w+)\//)[1];
            newStore[type] = result.results;
          });

          setStore(newStore);
        } catch (error) {
          console.error("Error loading all data:", error.message);
        }
      },
    },
  };
};

export default getState;
