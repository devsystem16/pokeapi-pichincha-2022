import React, { useEffect, useContext } from "react";

import PokemonsTable from "./PokemonsTable/index";
import PokemonAddForms from "./PokemonAddForms";
import PokemonEditForms from "./PokemonEditForms";
import Header from "./Header";
import { PokemonContext } from "../../context/PokemonContext";

const Pokemons = () => {
  const { pokemons, isEditing } = useContext(PokemonContext);

  useEffect(() => {}, []);
  return (
    <>
      <div className="container">
        <Header />

        <div className="row columns-1 mg-y-5">
          <PokemonsTable pokemons={pokemons} />
        </div>

        <div className="row text-center border-2 mg-y-5">
          {isEditing ? <PokemonEditForms /> : <PokemonAddForms />}
        </div>
      </div>
    </>
  );
};

export default Pokemons;
