import { useContext } from "react";
import Context from "../context/context.js";

const Favoritos = () => {
  const { favoritos } = useContext(Context)
  return (
    <div>
      <h1>Fotos Favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          favoritos.map((foto) => {
            return (
              <div
                key={foto.id}
                className="foto"
                style={{ backgroundImage: `url(${foto.src.portrait})` }}>
                <p>{foto.alt}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Favoritos