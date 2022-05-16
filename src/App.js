import Pokemons from "./views/Pokemons/";
import PokemonProvider from "./context/PokemonContext";
import "./Estilos.css";

function App() {
  return (
    <>
      <PokemonProvider>
        <Pokemons />
      </PokemonProvider>
    </>
  );
}

export default App;
