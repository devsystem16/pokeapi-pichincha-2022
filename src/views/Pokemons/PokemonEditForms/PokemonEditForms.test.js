import { render, screen, fireEvent } from "@testing-library/react";
import PokemonEditForms from "./index";
// import PokemonContext from "../../../context/PokemonContext";
import PokemonProvider from "../../../context/PokemonContext";
test("Validation context api Pokemons", () => {
  const { container, getByText } = render(
    <PokemonProvider>
      <PokemonEditForms></PokemonEditForms>
    </PokemonProvider>
  );

  const name = container.querySelector(`input[name="name"]`);
  expect(name).toBeInTheDocument();

  const defense = container.querySelector(`input[name="defense"]`);
  expect(defense).toBeInTheDocument();

  const image = container.querySelector(`input[name="image"]`);
  expect(image).toBeInTheDocument();

  const attack = container.querySelector(`input[name="attack"]`);
  expect(attack).toBeInTheDocument();

  expect(getByText(/Actualizar/i).textContent).toBe("Actualizar");
});
