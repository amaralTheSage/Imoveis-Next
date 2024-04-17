"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";

import { format } from "../../../../utils/BRLFormatter";
import imgImovel from "../../../../public/imgImóvel.png";

import mapIcon from "../../../../public/map-icon.svg";
import bathtubIcon from "../../../../public/bathtub-icon.png";
import bedIcon from "../../../../public/bed-icon.png";
import mailIcon from "../../../../public/mail-icon.png";
import carIcon from "../../../../public/car-icon.png";
import rulerIcon from "../../../../public/ruler-icon.png";
import whatsappIcon from "../../../../public/whatsapp-icon.png";

// const imovel = {
//   id: 1,
//   nome: "Casa à venda no Amarilis",
//   tipo: 0,
//   bairro: "Laranjal",
//   cidade: "Pelotas, RS",
//   descricao:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
//   imgs: [imgImovel, imgImovel, imgImovel, imgImovel, imgImovel, imgImovel],
//   metragem: 60,
//   quartos: 2,
//   banheiros: 1,
//   vagas: 2,
//   precoVenda: 300000,
//   precoAluguel: 0,
//   condominio: 200,
// };

// const imoveis = [
//   {
//     id: 1,
//     nome: "Casa à venda no Amarilis",
//     tipo: 0,
//     bairro: "Laranjal",
//     cidade: "Pelotas, RS",
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
//     imgs: [imgImovel, imgImovel, imgImovel, imgImovel, imgImovel, imgImovel],
//     metragem: 60,
//     quartos: 2,
//     banheiros: 1,
//     vagas: 2,
//     precoVenda: 300000,
//     condominio: 200,
//   },
//   {
//     id: 2,
//     nome: "Casa à venda no Amarilis",
//     tipo: 1,
//     bairro: "Laranjal",
//     cidade: "Pelotas, RS",
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
//     imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
//     metragem: 60,
//     quartos: 2,
//     banheiros: 1,
//     vagas: 2,
//     precoAluguel: 1234,
//     condominio: 200,
//   },
// ];

const axios = require("axios").default;

export default function PaginaImovel({ params }: { params: { id: number } }) {
  const [imoveis, setImoveis] = useState([]);
  const [imovel, setImovel] = useState({});
  const [images, setImages]: [any, any] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    try {
      axios.get("http://localhost:3333").then((res) => setImoveis(res.data));

      axios
        .get(`http://localhost:3333/${params.id}`)
        .then((res) => setImovel(res.data));

      axios
        .get(`http://localhost:3333/${params.id}/images`)
        .then((res) => setImages(res.data));
    } catch {
      console.error("ERROOOOOOOOOOOOO");
    } finally {
      setIsPending(false);
    }
  }, [params.id]);

  console.log(imoveis, imovel, images);

  return (
    <>
      {isPending == false ? (
        <>
          <Header />
          {/*wrapper */}
          <main className="lg:max-w-[80%] m-auto lg:mt-12 ">
            <section className="px-4 lg:flex  justify-center gap-6">
              <div className="flex flex-col items-center ">
                <Image
                  src={images[0].imageUrl}
                  alt=""
                  className="mb-1 w-full"
                  width={10}
                  height={10}
                />

                <div className="grid grid-cols-3  gap-1 md:text-2xl">
                  <Image src={images[0].imageUrl} alt="" className="" />
                  <Image src={images[1].imageUrl} alt="" className="" />
                  <div className="w-full text-center">
                    <Image
                      src={images[2].imageUrl}
                      alt=""
                      className="brightness-50 "
                      width={10}
                      height={10}
                    />
                    <p className="relative bottom-1/2 flex my-1 gap-1  text-white justify-center">
                      {images.length - 3} mais fotos
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:gap-6 mb-4 lg:max-w-[600px]">
                <h2 className="font-medium text-2xl xl:text-3xl">
                  {imovel.name}
                </h2>
                <p className="text-light-gray text-sm xl:text-lg">
                  {imovel.description}
                </p>
                <ul className="flex flex-wrap font-medium xl:text-lg ">
                  <li className="w-full flex gap-1 items-center">
                    <Image
                      src={mapIcon}
                      alt=""
                      className="w-6"
                      width={10}
                      height={10}
                    />{" "}
                    Bairro:
                    {imovel.neighbourhood} - {imovel.city}
                  </li>
                  <li className="w-1/2 flex my-1 relative right-[2px] gap-1 items-center ">
                    <Image
                      src={rulerIcon}
                      alt=""
                      className=" w-6"
                      width={10}
                      height={10}
                    />
                    {imovel.area}m² úteis
                  </li>
                  <li className="w-1/2 flex my-1 gap-1 items-center ">
                    <Image
                      src={bedIcon}
                      alt=""
                      className="w-6"
                      width={10}
                      height={10}
                    />
                    {imovel.numBedrooms}
                    {imovel.numBedrooms == 1 ? " Quarto" : " Quartos"}
                  </li>
                  <li className="w-1/2 flex my-1 gap-1 items-center ">
                    <Image
                      src={bathtubIcon}
                      alt=""
                      className="w-5"
                      width={10}
                      height={10}
                    />
                    {imovel.numBathrooms}
                    {imovel.numBathrooms == 1 ? " Banheiro" : " Banheiros"}
                  </li>
                  <li className="w-1/2 flex my-1 gap-1 items-center ">
                    <Image
                      src={carIcon}
                      alt=""
                      className="w-6"
                      width={10}
                      height={10}
                    />
                    {imovel.numCarSpots}
                    {imovel.numCarSpots == 1 ? " Vaga" : " Vagas"}
                  </li>
                </ul>
                <div>
                  {/* Preços */}
                  <div className="flex justify-between text-xl xl:text-2xl">
                    <span className="font-medium">
                      {imovel.price && "Preço de Venda"}
                    </span>
                    <span>{imovel.price && format(imovel.price)}</span>
                  </div>
                  <div className="flex justify-between text-xl xl:text-2xl">
                    <span className="font-medium">
                      {imovel.rent && "Preço de Aluguel"}
                    </span>
                    <span>{imovel.rent && format(imovel.rent)}</span>
                  </div>
                  <div className="flex justify-between text-xl xl:text-2xl">
                    <span className="font-medium ">
                      {imovel.condoPrice && "Condomínio"}
                    </span>
                    <span>
                      {imovel.condoPrice && format(imovel.condoPrice)}
                    </span>
                  </div>
                </div>
                <div className="text-lg xl:text-2xl">
                  <h4 className="font-semibold text-xl ">
                    Interessado? Nos chame por WhatsApp ou Email:
                  </h4>
                  <a href="" className="flex align-middle gap-2">
                    <Image src={whatsappIcon} alt="" className="w-4 h-4" />
                    53 9999-9999
                  </a>
                  <a href="" className="flex gap-2">
                    <Image src={mailIcon} alt="" className="w-4 h-4" />
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
                return <PropertyCard imovel={i} key={i.id} />;
              })}
            </div>
          </main>
          <Footer />
        </>
      ) : (
        "LOADING"
      )}
    </>
  );
}
