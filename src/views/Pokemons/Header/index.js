import React, { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";

const Header = () => {
  const { pokemonsTable, setPokemons } = useContext(PokemonContext);

  const filtrarPokemon = (text) => {
    const results = pokemonsTable.filter((pokemons) => {
      const itemData = pokemons.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setPokemons(results);
  };

  return (
    <>
      <div className="row">
        <label className="label">Listado de Pokemons</label>
      </div>

      <div className="row columns-2">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Buscar "
            onChange={(e) => filtrarPokemon(e.target.value)}
          />
        </div>

        <div className="text-right">
          <button> + Nuevo</button>
        </div>
      </div>
    </>
  );
};

export default Header;
