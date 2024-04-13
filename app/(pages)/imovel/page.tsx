"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import { useSearchParams } from "next/navigation";
import { format } from "util";
import imgImovel from "../../../public/imgImóvel.png";

export default function PaginaImovel() {
  const imovel = {
    id: 1,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    precoAluguel: 0,
    condominio: 200,
  };

  const imoveis = [
    {
      id: 1,
      nome: "Casa à venda no Amarilis",
      tipo: 0,
      bairro: "Laranjal",
      cidade: "Pelotas, RS",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
      imgs: [imgImovel, imgImovel, imgImovel, imgImovel, imgImovel, imgImovel],
      metragem: 60,
      quartos: 2,
      banheiros: 1,
      vagas: 2,
      precoVenda: 300000,
      condominio: 200,
    },
    {
      id: 2,
      nome: "Casa à venda no Amarilis",
      tipo: 1,
      bairro: "Laranjal",
      cidade: "Pelotas, RS",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
      imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
      metragem: 60,
      quartos: 2,
      banheiros: 1,
      vagas: 2,
      precoAluguel: 1234,
      condominio: 200,
    },
  ];

  return (
    <>
      <Header />

      {/*wrapper */}
      <main className="lg:max-w-[80%] m-auto lg:mt-12 ">
        <section className="px-4 lg:flex  justify-center gap-6">
          <div className="flex flex-col items-center ">
            <Image
              src={"../../public/imgImóvel.png"}
              alt=""
              className="mb-1 w-full"
            />

            <div className="grid grid-cols-3  gap-1 md:text-2xl">
              <Image src={"../../public/imgImóvel.png"} alt="" className="" />
              <Image src={"../../public/imgImóvel.png"} alt="" className="" />
              <div className="w-full text-center">
                <Image
                  src={"../../public/imgImóvel.png"}
                  alt=""
                  className="brightness-50 "
                />
                <p className="relative bottom-1/2 flex my-1 gap-1  text-white justify-center">
                  {imovel.imgs.length - 3} mais fotos
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 mb-4 lg:max-w-[600px]">
            <h2 className="font-medium text-2xl xl:text-3xl">{imovel.nome}</h2>
            <p className="text-light-gray text-sm xl:text-lg">
              {imovel.descricao}
            </p>
            <ul className="flex flex-wrap font-medium xl:text-lg ">
              <li className="w-full flex gap-1 items-center">
                <Image
                  src={"../../public/map-icon.svg"}
                  alt=""
                  className="w-6"
                />{" "}
                Bairro:
                {imovel.bairro} -{imovel.cidade}
              </li>
              <li className="w-1/2 flex my-1 relative right-[2px] gap-1 items-center ">
                <Image
                  src={"../../public/ruler-icon.png"}
                  alt=""
                  className=" w-6"
                />
                {imovel.metragem}m² úteis
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <Image
                  src={"../../public/bed-icon.png"}
                  alt=""
                  className="w-6"
                />
                {imovel.quartos}
                {imovel.quartos == 1 ? " Quarto" : " Quartos"}
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <Image
                  src={"../../public/bathtub-icon.png"}
                  alt=""
                  className="w-5"
                />
                {imovel.banheiros}
                {imovel.banheiros == 1 ? " Banheiro" : " Banheiros"}
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <Image
                  src={"../../public/car-icon.png"}
                  alt=""
                  className="w-6"
                />
                {imovel.vagas}
                {imovel.vagas == 1 ? " Vaga" : " Vagas"}
              </li>
            </ul>
            <div>
              {/* Preços */}
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium">
                  {imovel.precoVenda && "Preço de Venda"}
                </span>
                <span>{imovel.precoVenda && format(imovel.precoVenda)}</span>
              </div>
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium">
                  {imovel.precoAluguel && "Preço de Aluguel"}
                </span>
                <span>
                  {imovel.precoAluguel && format(imovel.precoAluguel)}
                </span>
              </div>
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium ">
                  {imovel.condominio && "Condomínio"}
                </span>
                <span>{imovel.condominio && format(imovel.condominio)}</span>
              </div>
            </div>
            <div className="text-lg xl:text-2xl">
              <h4 className="font-semibold text-xl ">
                Interessado? Nos chame por WhatsApp ou Email:
              </h4>
              <a href="">
                <Image src="#" alt="" />
                53 9999-9999
              </a>
              <a href="">
                <Image src="#" alt="" />
                janice@gmail.com
              </a>

              {true && (
                <p className="bg-orange text-white w-min py-1 px-6 rounded-md mt-2">
                  Deletar
                </p>
              )}
            </div>
          </div>
        </section>
        <h3 className="text-center p-3 text-2xl lg:text-3xl lg:text-left font-medium">
          Veja Outros Imóveis à Venda
        </h3>
        <div className="grid grid-flexivel gap-3 mx-8 lg:mx-0">
          {imoveis.slice(1).map((i) => {
            return <PropertyCard key={i.id} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
