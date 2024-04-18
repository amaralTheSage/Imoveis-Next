"use client";

import React from "react";
import { apiClient } from "@/services/apiClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import heroPng from "../public/images/hero2.png";
import Image from "next/image";

// * CONFIGURAR VALIDATION *

const schema = yup.object().shape({
  location: yup.string().required(),
  type: yup.string().required(),
  min_price: yup.number().required(),
  max_price: yup.number().required(),
  min_area: yup.number().required(),
  max_area: yup.number().required(),
  bedrooms: yup.number().required(),
  bathrooms: yup.number().required(),
  car_spots: yup.number().required(),
});

type FormData = yup.InferType<typeof schema>;

export default function FilterSection() {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      location: "",
      type: "house",
      min_price: 0,
      max_price: 0,
      min_area: 0,
      max_area: 0,
      bedrooms: 0,
      bathrooms: 0,
      car_spots: 0,
    }, // initial values
  });

  async function onSubmit(form: FormData) {
    try {
      setPending(true);
      //const response = await apiClient.post("http://localhost:3000/api/imoveis");
      //alert("Sucesso!");
      //reset();
    } catch (e) {
      requestError(e);
    } finally {
      setPending(false);
    }
  }

  function requestError(e: any) {
    console.error(e, e.stack);
    if (e.response.data.message != undefined) {
      setError(e.response.data.message);
    } else {
      setError(e.response.message ?? "Erro do Servidor");
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${heroPng.src})` }}
      className="min-h-[500px] bg-cover bg-no-repeat bg-center"
    >
      <div className=" lg:max-w-[80%] m-auto py-[10px] flex justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-md w-[85vw]  bg-opacity-80 mt-4 p-4 text-xl lg:text-base lg:grid lg:grid-cols-2 lg:gap-5"
        >
          <div>
            <input
              type="text"
              className="w-full p-2 rounded-t-md border border-orange font-normal"
              placeholder="Pesquisar por localidade"
              {...register("location")}
            />
            <div className="flex my-3 gap-4  lg:justify-end">
              <input
                className="w-full p-2 border border-orange rounded-bl-md text-white lg:max-w-32
              bg-orange"
                value="selling"
              >
                Venda
              </input>
              <input type="radio" name="selling" id="selling" />
              <label htmlFor="selling">Venda</label>
              <button
                className="w-full p-2 border border-orange rounded-br-md lg:max-w-32"
                value="renting"
              >
                Locação
              </button>
              <input type="radio" name="renting" id="renting" />
              <label htmlFor="renting">Aluguel</label>
            </div>
            <div>
              <p className="font-semibold">Tipo de imóvel:</p>
              <div className="grid grid-cols-2 text-[16px] md:text-xl">
                <div>
                  <input
                    type="checkbox"
                    className="ratio-square w-5 rounded-lg border-orange "
                  />
                  <span className="text-light-gray font-light ">Casa</span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="ratio-square w-5 rounded-lg border-orange checked:bg-orange"
                  />
                  <span className="text-light-gray font-light ">
                    Apartamento
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="ratio-square w-5 rounded-lg border-orange "
                  />
                  <span className="text-light-gray font-light ">Terreno</span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="ratio-square w-5 rounded-lg border-orange "
                  />
                  <span className="text-light-gray font-light ">Campo</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-2 lg:my-0">
              <p className="font-medium">Preço:</p>
              <div className=" flex gap-3 justify-between ">
                <input
                  type="text"
                  className=" w-1/2 py-1 px-2 rounded-sm border   "
                  placeholder="de R$"
                  {...register("min_price")}
                />
                <input
                  type="text"
                  className="w-1/2 py-1 px-2 rounded-sm border   "
                  placeholder="até R$"
                  {...register("max_price")}
                />
              </div>
            </div>

            <div className="my-2">
              <p className="font-medium">Área:</p>
              <div className=" flex  gap-3 justify-between">
                <input
                  type="text"
                  className="w-1/2  py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo m²"
                  {...register("min_area")}
                />
                <input
                  type="text"
                  className="w-1/2  py-1 px-2 rounded-sm border   "
                  placeholder="Máximo m²"
                  {...register("max_area")}
                />
              </div>
            </div>

            <div className="my-2">
              <p className="font-medium">Quartos:</p>
              <div>
                <input
                  type="text"
                  className="w-1/2  py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo"
                  {...register("bedrooms")}
                />
              </div>
            </div>

            <div className="my-2">
              <p className="font-medium">Banheiros:</p>
              <div>
                <input
                  type="text"
                  className="w-1/2  py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo"
                  {...register("bathrooms")}
                />
              </div>
            </div>

            <div className="my-2">
              <p className="font-medium">Vagas:</p>
              <div>
                <input
                  type="text"
                  className="w-1/2 py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo"
                  {...register("car_spots")}
                />
              </div>
            </div>

            <button className="bg-orange text-white w-full py-2 rounded-md mt-2">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
