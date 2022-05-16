import React, { createContext, useState, useEffect } from "react";
import PokemonApi from "../api/PokemonApi";

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsTable, setPokemonsTable] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [reloadTable, setReloadTable] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const obtenetPokemons = async () => {
    const response = await PokemonApi.getAllPokemon();
    setPokemons(response);
    setPokemonsTable(response);
  };

  useEffect(() => {
    if (reloadTable) {
      obtenetPokemons();
      setReloadTable(false);
    }
  }, [reloadTable]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        pokemonsTable,
        setReloadTable,
        currentPokemon,
        setCurrentPokemon,
        isEditing,
        setIsEditing,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
