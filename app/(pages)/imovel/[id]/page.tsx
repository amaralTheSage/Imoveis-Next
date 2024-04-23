"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/types";
import { apiClient } from "@/services/apiClient";

import { format } from "../../../../utils/BRLFormatter";
import imgImovel from "@/public/images/img-imovel.png";

import mapIcon from "@/public/images/map-icon.svg";
import bathtubIcon from "@/public/images/bathtub-icon.png";
import bedIcon from "@/public/images/bed-icon.png";
import mailIcon from "@/public/images/mail-icon.png";
import carIcon from "@/public/images/car-icon.png";
import rulerIcon from "@/public/images/ruler-icon.png";
import whatsappIcon from "@/public/images/whatsapp-icon.png";
import { testing_data } from "@/utils/ItemsData";

export default function PaginaImovel({ params }: { params: { id: number } }) {
  const [imoveis, setImoveis] = useState<Property[]>(testing_data);
  const [imovel, setImovel] = useState<Property>(
    testing_data[params.id] as Property
  );
  const [images, setImages]: [any, any] = useState(
    testing_data[params.id].images
  );
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setPending(true);
      //const response = await apiClient.get("http://localhost:3333/api/imoveis");
      //setImoveis(response.data.properties);
    } catch (e: any) {
      setError(e.response.data.message ?? e.response.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {!pending ? (
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
                  <Image
                    src={images[0].imageUrl}
                    alt=""
                    className=""
                    width={10}
                    height={10}
                  />
                  <Image
                    src={images[1].imageUrl}
                    alt=""
                    className=""
                    width={10}
                    height={10}
                  />
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
                    {imovel.neighborhood} - {imovel.city}
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
                    {imovel.bedrooms}
                    {imovel.bedrooms == 1 ? " Quarto" : " Quartos"}
                  </li>
                  <li className="w-1/2 flex my-1 gap-1 items-center ">
                    <Image
                      src={bathtubIcon}
                      alt=""
                      className="w-5"
                      width={10}
                      height={10}
                    />
                    {imovel.bathrooms}
                    {imovel.bathrooms == 1 ? " Banheiro" : " Banheiros"}
                  </li>
                  <li className="w-1/2 flex my-1 gap-1 items-center ">
                    <Image
                      src={carIcon}
                      alt=""
                      className="w-6"
                      width={10}
                      height={10}
                    />
                    {imovel.car_spots}
                    {imovel.car_spots == 1 ? " Vaga" : " Vagas"}
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
                      {imovel.condo_price && "Condomínio"}
                    </span>
                    <span>
                      {imovel.condo_price && format(imovel.condo_price)}
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
              {imoveis.slice(1).map((property) => {
                return <PropertyCard property={property} key={property.id} />;
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
