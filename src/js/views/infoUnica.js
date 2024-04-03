import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ItemDetails = ({ item, type }) => {
  if (!item) {
    return <div>Cargando información...</div>;
  }
  if (type === "people") {
    return (
      <>
        <h2>{item.name}</h2>
        <ul>
          {item.birth_year && <li>Año de nacimiento: {item.birth_year}</li>}
          {item.eye_color && <li>Color de ojos: {item.eye_color}</li>}
          {item.gender && <li>Género: {item.gender}</li>}
          {item.hair_color && <li>Color de cabello: {item.hair_color}</li>}
          {item.height && <li>Altura: {item.height} cm</li>}
          {item.mass && <li>Masa: {item.mass} kg</li>}
          {item.skin_color && <li>Color de piel: {item.skin_color}</li>}
          {item.url && (
            <li>
              URL:{" "}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
            </li>
          )}
        </ul>
        <div>Creado: {new Date(item.created).toLocaleDateString()}</div>
        <div>Editado: {new Date(item.edited).toLocaleDateString()}</div>
      </>
    );
  } else if (type === "starships") {
    return (
      <>
        <h2>{item.name}</h2>
        {item.model && <li>Modelo: {item.model}</li>}
        {item.starship_class && <li>Clase de nave: {item.starship_class}</li>}
        {item.manufacturer && <li>Fabricante: {item.manufacturer}</li>}
        {item.cost_in_credits && (
          <li>Costo en créditos: {item.cost_in_credits}</li>
        )}
        {item.length && <li>Longitud: {item.length} metros</li>}
        {item.crew && <li>Equipo: {item.crew}</li>}
        {item.passengers && <li>Pasajeros: {item.passengers}</li>}
        {item.max_atmosphering_speed && (
          <li>Velocidad máxima en atmósfera: {item.max_atmosphering_speed}</li>
        )}
        {item.hyperdrive_rating && (
          <li>Clase de hiperimpulsor: {item.hyperdrive_rating}</li>
        )}
        {item.MGLT && <li>Megaluz: {item.MGLT}</li>}
        {item.cargo_capacity && (
          <li>Capacidad de carga: {item.cargo_capacity} kg</li>
        )}
        {item.consumables && <li>Consumibles: {item.consumables}</li>}
        {item.url && (
          <li>
            URL:{" "}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          </li>
        )}
        <div>Creado: {new Date(item.created).toLocaleDateString()}</div>
        <div>Editado: {new Date(item.edited).toLocaleDateString()}</div>
      </>
    );
  } else if (type === "vehicles") {
    return (
      <>
        <h2>{item.name}</h2>
        {item.model && <li>Modelo: {item.model}</li>}
        {item.vehicle_class && <li>Clase de vehículo: {item.vehicle_class}</li>}
        {item.manufacturer && <li>Fabricante: {item.manufacturer}</li>}
        {item.length && <li>Longitud: {item.length} metros</li>}
        {item.cost_in_credits && (
          <li>Costo en créditos: {item.cost_in_credits}</li>
        )}
        {item.crew && <li>Equipo: {item.crew}</li>}
        {item.passengers && <li>Pasajeros: {item.passengers}</li>}
        {item.max_atmosphering_speed && (
          <li>Velocidad máxima en atmósfera: {item.max_atmosphering_speed}</li>
        )}
        {item.cargo_capacity && (
          <li>Capacidad de carga: {item.cargo_capacity} kg</li>
        )}
        {item.consumables && <li>Consumibles: {item.consumables}</li>}
        {item.url && (
          <li>
            URL:{" "}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          </li>
        )}
        <div>Creado: {new Date(item.created).toLocaleDateString()}</div>
        <div>Editado: {new Date(item.edited).toLocaleDateString()}</div>
      </>
    );
  } else if (type === "species") {
    return (
      <>
        <h2>{item.name}</h2>
        {item.classification && <li>Classification: {item.classification}</li>}
        {item.designation && <li>Designation: {item.designation}</li>}
        {item.average_height && (
          <li>Average Height: {item.average_height} cm</li>
        )}
        {item.average_lifespan && (
          <li>Average Lifespan: {item.average_lifespan} years</li>
        )}
        {item.eye_colors && <li>Eye Colors: {item.eye_colors}</li>}
        {item.hair_colors && <li>Hair Colors: {item.hair_colors}</li>}
        {item.skin_colors && <li>Skin Colors: {item.skin_colors}</li>}
        {item.language && <li>Language: {item.language}</li>}
        {item.homeworld && <li>Homeworld: {item.homeworld}</li>}
        {item.url && (
          <li>
            URL:{" "}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          </li>
        )}
        {item.created && (
          <li>Created: {new Date(item.created).toLocaleDateString()}</li>
        )}
        {item.edited && (
          <li>Edited: {new Date(item.edited).toLocaleDateString()}</li>
        )}
      </>
    );
  } else if (type === "planets") {
    return (
      <>
        <h2>{item.name}</h2>
        <ul>
          {item.diameter && <li>Diameter: {item.diameter} km</li>}
          {item.rotation_period && (
            <li>Rotation Period: {item.rotation_period} hours</li>
          )}
          {item.orbital_period && (
            <li>Orbital Period: {item.orbital_period} days</li>
          )}
          {item.gravity && <li>Gravity: {item.gravity} standard G</li>}
          {item.population && <li>Population: {item.population}</li>}
          {item.climate && <li>Climate: {item.climate}</li>}
          {item.terrain && <li>Terrain: {item.terrain}</li>}
          {item.surface_water && <li>Surface Water: {item.surface_water}%</li>}
          {item.residents && <li>Residents: {item.residents.join(", ")}</li>}
          {item.films && <li>Films: {item.films.join(", ")}</li>}
          {item.url && (
            <li>
              URL: <a href={item.url}>{item.url}</a>
            </li>
          )}
          {item.created && (
            <li>Created: {new Date(item.created).toLocaleDateString()}</li>
          )}
          {item.edited && (
            <li>Edited: {new Date(item.edited).toLocaleDateString()}</li>
          )}
        </ul>
      </>
    );
  }
};

export const InfoUnica = () => {
  const { type, id } = useParams();
  const { store, actions } = useContext(Context);

  let typeApi = type;
  if (type === "characters") {
    typeApi = "people";
  }

  useEffect(() => {
    actions.loadSpecificData(typeApi, id);
  }, []);

  const item = store[`info${typeApi}`][0];

  return (
    <div className="container mt-4 d-flex">
      <div className="row">
        <div className="col-lg-8 col-md-7"></div>
      </div>
      <div className="col-lg-4 col-md-5">
        <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          onError={(e) =>
            (e.target.src =
              "https://c8.alamy.com/compes/r3yw81/el-icono-de-imagen-no-disponible-vector-plana-r3yw81.jpg")
          }
          alt={item?.name}
          className="img-fluid rounded"
        />
      </div>
      <div className="col-lg-8 col-md-7 text-white">
        <ItemDetails item={item} type={typeApi} />
      </div>
    </div>
  );
};
