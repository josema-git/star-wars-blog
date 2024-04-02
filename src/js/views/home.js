import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="bg-secondary mt-4">
      <h2 className="text-white text-center">Browse</h2>
      <div className="d-flex justify-content-around align-items-center">
        <Link to="/characters" className="text-decoration-none">
          <h2 className="text-white fw-bold">characters</h2>
        </Link>
        <Link to="/starships" className="text-decoration-none">
          <h2 className="text-white fw-bold">Starships</h2>
        </Link>
        <Link to="/vehicles" className="text-decoration-none">
          <h2 className="text-white fw-bold">Vehicles</h2>
        </Link>
        <Link to="/planets" className="text-decoration-none">
          <h2 className="text-white fw-bold">Planets</h2>
        </Link>
        <Link to="/species" className="text-decoration-none">
          <h2 className="text-white fw-bold">Species</h2>
        </Link>
      </div>
    </div>
  );
};

const Item = ({ type, name, id }) => {
  return (
    <div className="bg-secondary mx-1 rounded-3 w-25">
      <Link to={`/${type}/${id}`} className="text-decoration-none">
        <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          onError={(e) =>
            (e.target.src =
              "https://c8.alamy.com/compes/r3yw81/el-icono-de-imagen-no-disponible-vector-plana-r3yw81.jpg")
          }
          className="w-100 rounded-top"
          alt={name}
        />
      </Link>
      <div className="px-2 d-flex flex-column align-items-center">
        <h5 className="text-white text-center fw-bold">{name}</h5>
      </div>
    </div>
  );
};

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadAllData();
  }, []);

  return (
    <div className="px-1">
      <Search />
      <div className="wide-padding"></div>
      <div className="row">
        <div className="col">
          <h2 className="text-center text-white mt-5">Characters</h2>
          <div className="d-flex w-90">
            {store.people.map((character, index) => {
              return (
                <Item
                  key={index}
                  type="characters"
                  name={character.name}
                  id={character.uid}
                />
              );
            })}
          </div>
          <h2 className="text-center text-white mt-5">Starships</h2>
          <div className="d-flex w-90">
            {store.starships.map((starship, index) => {
              return (
                <Item
                  key={index}
                  type="starships"
                  name={starship.name}
                  id={starship.uid}
                />
              );
            })}
          </div>
          <h2 className="text-center text-white mt-5">Vehicles</h2>
          <div className="d-flex w-90">
            {store.vehicles.map((vehicle, index) => {
              return (
                <Item
                  key={index}
                  type="vehicles"
                  name={vehicle.name}
                  id={vehicle.uid}
                />
              );
            })}
          </div>
          <h2 className="text-center text-white mt-5">Planets</h2>
          <div className="d-flex w-90 ">
            {store.planets.map((planet, index) => {
              return (
                <Item
                  key={index}
                  type="planets"
                  name={planet.name}
                  id={planet.uid}
                />
              );
            })}
          </div>
          <h2 className="text-center text-white mt-5">Species</h2>
          <div className="d-flex w-90 mb-5">
            {store.species.map((specie, index) => {
              return (
                <Item
                  key={index}
                  type="species"
                  name={specie.name}
                  id={specie.uid}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
