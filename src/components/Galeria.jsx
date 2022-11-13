import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useContext } from "react";
import Context from "../context/context.js";

const Galeria = () => {
  const { fotos, favoritos, handleFavoritos } = useContext(Context)

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        fotos.map((foto) => {
          return (
            <div
              key={foto.id}
              className="foto"
              onClick={() => handleFavoritos(foto)}
              style={{ backgroundImage: `url(${foto.src.portrait})` }}>
              <Heart filled={favoritos.includes(foto) ? true : false}></Heart>
              <p>{foto.alt}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Galeria