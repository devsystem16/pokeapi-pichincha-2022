import React, { useContext } from "react";
import IcoAdd from "../../../assets/iconos/add.png";
import IcoDelete from "../../../assets/iconos/delete.png";
import { PokemonContext } from "../../../context/PokemonContext";
import PokemonApi from "../../../api/PokemonApi";

const PokemonsTable = (props) => {
  const { setReloadTable, setCurrentPokemon, setIsEditing } =
    useContext(PokemonContext);

  const removePokemon = async (id) => {
    const response = await PokemonApi.removePokemon(id);
    if (response) setReloadTable(true);
  };

  const updatePokemon = (pokemon) => {
    setCurrentPokemon({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense,
    });
    setIsEditing(true);
  };

  const { pokemons } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {pokemons?.length > 0 ? (
            pokemons.map((pokemon) => (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td className="text-center">
                  <img
                    className="ico--table"
                    src={pokemon.image}
                    alt=" Imagen Pokemon"
                  />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td className="text-center">
                  <img
                    className="ico--table"
                    alt="Boton Editar"
                    src={IcoAdd}
                    onClick={() => updatePokemon(pokemon)}
                  />
                  <img
                    alt="boton eliminar"
                    className="ico--table"
                    src={IcoDelete}
                    onClick={() => removePokemon(pokemon.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No existe ningún pokemón</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PokemonsTable;
