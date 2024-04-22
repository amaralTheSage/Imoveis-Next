"use client";

import React, { useEffect, useState } from "react";
import { apiClient } from "@/services/apiClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import heroPng from "../public/images/hero2.png";
import Image from "next/image";
import { testing_data } from "@/utils/ItemsData";
import { Property } from "@/types/types";

// * CONFIGURAR VALIDATION *

const schema = yup.object().shape({
  location: yup.string(),
  type: yup.string(),
  property_type: yup.string(),
  min_price: yup.number(),
  max_price: yup.number(),
  min_area: yup.number(),
  max_area: yup.number(),
  bedrooms: yup.number(),
  bathrooms: yup.number(),
  car_spots: yup.number(),
});

type FormData = yup.InferType<typeof schema>;

export default function FilterSection({ properties, onSetProperties }: any) {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState<FormData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   location: "",
    //   type: "selling",
    //   property_type: "house",
    //   min_price: 0,
    //   max_price: 0,
    //   min_area: 0,
    //   max_area: 0,
    //   bedrooms: 0,
    //   bathrooms: 0,
    //   car_spots: 0,
    // }, // initial values
  });

  async function onSubmit(data: FormData) {
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

    onSetProperties(
      properties.filter((p: Property) => {
        p.type === data.type &&
          p.property_type === data.property_type &&
          p.price >= data.min_price &&
          p.price <= data.max_price &&
          p.area >= data.min_area &&
          p.price <= data.max_area &&
          p.bedrooms >= data.bedrooms &&
          p.bathrooms >= data.bathrooms &&
          p.car_spots >= data.car_spots;
      })
    );
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

            <div className="flex my-3 gap-4 h-12 lg:justify-end">
              <div
                className="w-full border border-orange
                 rounded-bl-md text-white lg:max-w-32"
              >
                <input
                  type="radio"
                  id="sellingRadio"
                  value={"selling"}
                  className="hidden peer"
                  {...register("type")}
                />

                <label
                  htmlFor="sellingRadio"
                  className="peer-checked:bg-orange peer-checked:text-white cursor-pointer duration-100 flex h-full justify-center items-center"
                >
                  Venda
                </label>
              </div>

              <div
                className="w-full border border-orange
                 rounded-bl-md text-white lg:max-w-32"
              >
                <input
                  type="radio"
                  id="rentingRadio"
                  value={"renting"}
                  className="hidden peer"
                  {...register("type")}
                />

                <label
                  htmlFor="rentingRadio"
                  className="peer-checked:bg-orange peer-checked:text-white cursor-pointer duration-100 flex h-full justify-center items-center"
                >
                  Locação
                </label>
              </div>
            </div>

            <div>
              <p className="font-semibold">Tipo de imóvel:</p>
              <div className="grid grid-cols-2 text-[16px] md:text-xl">
                <div>
                  <input
                    type="radio"
                    {...register("property_type")}
                    value={"house"}
                  />
                  <span className="text-light-gray font-light ">Casa</span>
                </div>

                <div>
                  <input
                    type="radio"
                    {...register("property_type")}
                    value={"apartment"}
                  />
                  <span className="text-light-gray font-light ">
                    Apartamento
                  </span>
                </div>

                <div>
                  <input
                    type="radio"
                    {...register("property_type")}
                    value={"urban_land"}
                  />
                  <span className="text-light-gray font-light ">Terreno</span>
                </div>

                <div>
                  <input
                    type="radio"
                    {...register("property_type")}
                    value={"rural_land"}
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
                  type="number"
                  className=" w-1/2 py-1 px-2 rounded-sm border   "
                  placeholder="de R$"
                  {...register("min_price")}
                />
                <input
                  type="number"
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
                  type="number"
                  className="w-1/2  py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo m²"
                  {...register("min_area")}
                />
                <input
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
                  className="w-1/2 py-1 px-2 rounded-sm border   "
                  placeholder="Mínimo"
                  {...register("car_spots")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-orange text-white w-full py-2 rounded-md mt-2"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
