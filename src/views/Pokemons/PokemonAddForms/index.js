import React, { useContext } from "react";

import SavIicon from "../../../assets/iconos/IconSave.svg";
import CloseIcon from "../../../assets/iconos/close.png";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../context/PokemonContext";
import PokemonApi from "../../../api/PokemonApi";

const PokemonAddForms = () => {
  const { setReloadTable, setIsEditing } = useContext(PokemonContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPokemon = async (data, e) => {
    const pokemon = {
      idAuthor: 1,
      name: data.name,
      type: "normal",
      hp: 50,
      image: data.image,
      attack: data.attack,
      defense: data.defense,
    };
    await PokemonApi.savePokemon(pokemon);
    setReloadTable(true);
  };

  const cancellRequest = () => {
    setIsEditing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(addPokemon)}>
        <div className="row columns-1">
          <h4 className="text-center">Nuevo Pokemon</h4>
        </div>

        <div className="row columns-2">
          <div>
            <label className="label--inline">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Por favor ingrese el nombre del Pokemon.",
                },
                minLength: {
                  value: 4,
                  message: "La longitud mínima de carcteres es 4",
                },
              })}
            />
            <br />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div>
            <div className="container  mg-y-5">
              <div className="row columns-3">
                <div>
                  <label className="label--inline"> Ataque</label> 0
                </div>
                <div className="range">
                  <input
                    name="attack"
                    type="range"
                    min="0"
                    max="100"
                    steps="1"
                    {...register("attack", {
                      required: {
                        value: true,
                        message: "Por favor ingrese el nombre del Pokemon.",
                      },
                    })}
                  />
                </div>
                <div>100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row columns-2 mg-y-5">
          <div>
            <label className="label--inline">Imagen</label>
            <input
              type="text"
              name="image"
              placeholder="Url imagen"
              {...register("image", {
                required: {
                  value: true,
                  message: "Por favor ingrese la url de la imagen.",
                },
              })}
            />
          </div>
          <div>
            <div>
              <div className="container  mg-y-5">
                <div className="row columns-3">
                  <div>
                    <label className="label--inline"> Defensa</label> 0
                  </div>
                  <div className="range">
                    <input
                      name="defense"
                      type="range"
                      min="0"
                      max="100"
                      steps="1"
                      {...register("defense", {
                        required: {
                          value: true,
                          message: "Por favor ingrese el nombre del Pokemon.",
                        },
                      })}
                    />
                  </div>
                  <div>100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns-1 text-center  mg-y-5">
          <button type="submit">
            <img alt="Btn guardar" className="ico" src={SavIicon} />
            Guardar
          </button>

          <button
            type="reset"
            className="mg-l-5 "
            onClick={() => cancellRequest()}
          >
            <img alt="btn Cancelar" className="ico" src={CloseIcon} /> Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default PokemonAddForms;
