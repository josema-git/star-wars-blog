const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      infopeople: [],

      starships: [],
      infostarships: [],

      vehicles: [],
      infovehicles: [],

      planets: [],
      infoplanets: [],

      species: [],
      infospecies: [],

      films: [],
      infofilms: [],
    },
    actions: {
      loadSpecificData: async (type, id) => {
        const adjustedType = type === "characters" ? "people" : type;
        const store = getStore();

        if (!store[adjustedType] || store[adjustedType].length === 0) {
          await getActions().loadAllData();
        }

        const object = store[adjustedType].find((item) => item.uid === id);
        if (!object) {
          console.log("Objeto no encontrado en el store.");
          return;
        }

        try {
          const response = await fetch(object.url);
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const data = await response.json();
          setStore({ info: data.result.properties });
        } catch (error) {
          console.log("Error loading specific data:", error.message);
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

          const urlsToFetch = types.map(
            (type) => `https://www.swapi.tech/api/${type}/`
          );

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
length;
