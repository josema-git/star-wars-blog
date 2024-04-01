import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Search = () => {
  return (
    <div className="bg-secondary mt-4">
      <h2 className="text-white text-center">Browse</h2>
      <div className="d-flex justify-content-around align-items-center">
        <a href="#Characters" className="text-decoration-none">
          <h2 className="text-white fw-bold">characters</h2>
        </a>
        <a href="#Starships" className="text-decoration-none">
          <h2 className="text-white fw-bold">Starships</h2>
        </a>
        <a href="#Vehicles" className="text-decoration-none">
          <h2 className="text-white fw-bold">Vehicles</h2>
        </a>
        <a href="#Planets" className="text-decoration-none">
          <h2 className="text-white fw-bold">Planets</h2>
        </a>
        <a href="#Species" className="text-decoration-none">
          <h2 className="text-white fw-bold">Species</h2>
        </a>
      </div>
    </div>
  );
};

const Item = ({ type, name, id }) => {
  return (
    <div className="bg-secondary mx-1 rounded-3 w-25">
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
        className="w-100 rounded-top"
        alt={name}
      />
      <div className="px-2 d-flex flex-column align-items-center">
        <h5 className="text-white text-center fw-bold">{name}</h5>
      </div>
    </div>
  );
};

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, []);

  return (
    <div className="px-1">
      <Search />
      <div className="wide-padding"></div>
      <div className="row">
        <div className="col">
          <h2 id="Characters" className="text-center text-white mt-5">
            Characters
          </h2>
          <div className="d-flex w-90 mb-5">
            {store.people.map((character, index) => {
              return (
                <Item
                  key={index}
                  type="characters"
                  name={character.name}
                  id={index + 1}
                />
              );
            })}
          </div>
          <h2 id="Starships" className="text-center text-white mt-5">
            Starships
          </h2>
          <div className="d-flex w-90 mb-5">
            {store.starships.map((starship, index) => {
              return (
                <Item
                  key={index}
                  type="starships"
                  name={starship.name}
                  id={index + 1}
                />
              );
            })}
          </div>
          <h2 id="Vehicles" className="text-center text-white mt-5">
            Vehicles
          </h2>
          <div className="d-flex w-90 mb-5">
            {store.vehicles.map((vehicle, index) => {
              return (
                <Item
                  key={index}
                  type="vehicles"
                  name={vehicle.name}
                  id={index + 1}
                />
              );
            })}
          </div>
          <h2 id="Planets" className="text-center text-white mt-5">
            Planets
          </h2>
          <div className="d-flex w-90 mb-5">
            {store.planets.map((planet, index) => {
              return (
                <Item
                  key={index}
                  type="planets"
                  name={planet.name}
                  id={index + 1}
                />
              );
            })}
          </div>
          <h2 id="Species" className="text-center text-white mt-5">
            Species
          </h2>
          <div className="d-flex w-90 mb-5">
            {store.species.map((specie, index) => {
              return (
                <Item
                  key={index}
                  type="species"
                  name={specie.name}
                  id={index + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
