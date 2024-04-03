import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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

  const item = store.info;

  return (
    <div className="bg-secondary mx-1 rounded-3 w-25">
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
        onError={(e) =>
          (e.target.src =
            "https://c8.alamy.com/compes/r3yw81/el-icono-de-imagen-no-disponible-vector-plana-r3yw81.jpg")
        }
        className="w-100 rounded-top"
      />
      <div className="px-2 d-flex flex-column align-items-center">
        <h5 className="text-white text-center fw-bold">
          `https://www.swapi.tech/api/{typeApi}/{id}`{item.name}
        </h5>
      </div>
    </div>
  );
};
