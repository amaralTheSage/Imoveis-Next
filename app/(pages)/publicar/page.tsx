"use client"

import React from "react";
import { apiClient } from "@/services/apiClient";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import viteSvg from "@/public/images/vite.svg";
import Footer from "../../../components/Footer";
import Image from "next/image";

const schema = yup.object().shape({
  name: yup.string().max(50).required(),
  type: yup.string().required(),
  neighborhood: yup.string().max(20),
  city: yup.string().max(20).required(),
  description: yup.string(),
  images: yup.array().required(),
  area: yup.number().required(),
  bedrooms: yup.number().required(),
  bathrooms: yup.number().required(),
  car_spots: yup.number().required(),
  price: yup.number(),
  rent: yup.number(),
  condo_price: yup.number(),
});

type FormData = yup.InferType<typeof schema>;

export default function Publicar() {

  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      type: "house",
      neighborhood: "",
      description: "",
      images: [],
      area: 0,
      bedrooms: 0,
      bathrooms: 0,
      car_spots: 0,
      price: 0,
      rent: 0,
      condo_price: 0
    }
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

  function uploadImages(e: any) {
    const files = e.currentTarget.files;
    const urls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        urls.push(url);
      }
    }
    setValue("images", urls);
  }

  return (
    <>
      <header className="flex justify-between px-4 py-5 text-xl lg:text-md">
        <a href={"/"}>
          <div className="flex items-center gap-2 font-semibold">
            <Image src={viteSvg} className="w-6" alt="JVS" /> Coisa
          </div>
        </a>
      </header>

      <div className="max-w-[90vw] h-screen mt-14 lg:max-w-[50vw] m-auto">
        <h3 className="font-medium text-2xl mb-3">Novo Imóvel:</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-light-gray"
        >
          <div>
            <label
              htmlFor="name"
              className="text-light-gray font-light text-lg"
            >
              Nome :
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="xl:row-span-2 h-max">
            <label
              htmlFor="description"
              className="text-light-gray font-light text-lg"
            >
              Descrição :
            </label>
            <input
              type="text"
              {...register("description")}
              id="description"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full xl:h-28"
            />
          </div>

          <div>
            <label
              htmlFor="area"
              className="text-light-gray font-light text-lg"
            >
              M² :
            </label>
            <input
              type="number"
              {...register("area")}
              id="area"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="bedrooms"
              className="text-light-gray font-light text-lg"
            >
              Nº Quartos :
            </label>
            <input
              type="number"
              {...register("bedrooms")}
              id="bedrooms"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="bathrooms"
              className="text-light-gray font-light text-lg"
            >
              Nº Banheiros :
            </label>
            <input
              type="number"
              {...register("bathrooms")}
              id="bathrooms"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="car_spots"
              className=" font-light text-lg text-light-gray"
            >
              Nº Vagas :
            </label>
            <input
              type="number"
              {...register("car_spots")}
              id="car_spots"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="grid grid-cols-2 text-light-gray">
            <label htmlFor="tipo" className="col-span-2 text-light-gray">
              Tipo de Imóvel:
            </label>
            <select
              {...register("type")}
              id="tipo"
              className="border w-full  p-1 rounded-sm"
            >
              <option value="house">Casa</option>
              <option value="apartment">Apartamento</option>
              <option value="land">Terreno</option>
              <option value="camp">Campo</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="price"
              className="text-light-gray font-light text-lg"
            >
              Preço de Venda(opcional) :
            </label>
            <input
              {...register("price")}
              type="number"
              id="price"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>
          <div>
            <label
              htmlFor="rent"
              className="text-light-gray font-light text-lg"
            >
              Preço de Aluguel(opcional) :
            </label>
            <input
              {...register("rent")}
              type="number"
              id="rent"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="condo_price"
              className="text-light-gray font-light text-lg "
            >
              Preço de Condomínio(opcional) :
            </label>
            <input
              {...register("condo_price")}
              type="number"
              id="condo_price"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="imgs"
              className="text-light-gray font-light text-lg"
            >
              Imagens :
            </label>
            <input
              type="file"
              id="imgs"
              className="text-light-gray font-light text-lg flex flex-wrap"
              multiple
              onChange={uploadImages}
            />
          </div>

          <button className="text-white bg-orange p-3 my-3  rounded-md font-medium">
            Publicar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
