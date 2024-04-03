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

      info: [],
    },
    actions: {
      loadSpecificData: async (type, id) => {
        const adjustedType = type === "characters" ? "people" : type;
        const store = getStore();

        await getActions().loadAllData();

        try {
          if (store.info && store.info.some((item) => item.uid === id)) {
            console.log(
              `Datos específicos para ${adjustedType} con ID ${id} ya cargados.`
            );
            return;
          }

          const object = store[adjustedType].find((item) => item.uid === id);
          if (!object) {
            console.log("Objeto no encontrado en el store.");
            return;
          }

          const response = await fetch(object.url);
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const data = await response.json();
          const newData = data.result.properties;

          setStore({
            ...store,
            [`info${adjustedType}`]: [...(store.info || []), newData], // Crea o actualiza la clave con los datos específicos.
          });
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
