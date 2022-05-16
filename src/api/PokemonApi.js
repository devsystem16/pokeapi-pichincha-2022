import API from "./Environment/config";

const ENDPOINTS = {
  endPointBase: "?idAuthor=1",
  removePokemon: "",
  updatePokemon: "",
  getByIdPokemon: "pokemons/",
  getNPokemons: "?idAuthor=1",
};

const PokemonApi = {
  savePokemon: async (pokemon) => {
    const response = await API.post(ENDPOINTS.endPointBase, pokemon);
    return response.data;
  },

  removePokemon: async (id) => {
    const response = await API.delete(ENDPOINTS.removePokemon + id);
    return response.data;
  },

  updatePokemon: async (id, updatedPokemon) => {
    const response = await API.put(
      ENDPOINTS.updatePokemon + id,
      updatedPokemon
    );
    return response.data;
  },

  getAllPokemon: async () => {
    const response = await API.get(ENDPOINTS.endPointBase);
    return response.data;
  },

  getByIdPokemon: async (id) => {
    const response = await API.get(ENDPOINTS.getByIdPokemon + id);
    return response.data;
  },

  getNPokemons: async (length) => {
    const response = await API.get(length + ENDPOINTS.getNPokemons);
    return response.data;
  },
};

export default PokemonApi;
