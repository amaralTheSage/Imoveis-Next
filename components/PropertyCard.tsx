import Image from "next/image";
import React from "react";
import Link from "next/link";
import { format } from "../utils/BRLFormatter";
import imgImovel from "../public/imgImóvel.png";

// Tipos - 0: CASA, 1: AP, 2: TERRENO, 3:CAMPO

// const imoveis = [
//   {
//     nome: "Casa à venda no Amarilis",
//     tipo: 0,
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
//     imgs: ["imgImóvel.png", "imgImóvel.png", "imgImóvel.png"],
//     metragem: 60,
//     quartos: 2,
//     banheiros: 1,
//     vagas: 2,
//     precoVenda: 300000,
//     condominio: 200,
//   },
// ];

interface Imovel {
  id: number;
  nome: string;
  tipo: number;
  bairro: string;
  descricao: string;
  imgs: string[];
  metragem: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  precoVenda?: number;
  precoAluguel?: number;
  condominio?: number;
}

function CheckTipo(tipo: number) {
  if (tipo === 0) {
    return "Casa";
  } else if (tipo === 1) {
    return "Apartamento";
  } else if (tipo === 2) {
    return "Terreno";
  } else if (tipo === 3) {
    return "Campo";
  }
}

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
//   precoAluguel: null,
//   condominio: 200,
// };

function PropertyCard({ imovel }) {
  {
    /*w-[300px] min-[400px]:w-[380px] min-[500px]:w-[450px] lg:w-[280px] min-[850px]:w-[400px]xl:w-[300px] */
  }
  return (
    <div className="rounded-md shadow-md my-2 text-lg">
      <Image
        alt={imovel.name}
        src={imovel.images}
        className="rounded-t-md"
        width={500}
        height={500}
      />
      <div className="p-2 flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-light-gray font-light capitalize">
            {imovel.type} - {imovel.neighbourhood}
          </span>
          <span className="font-medium ">{imovel.area}m²</span>
        </div>
        <h2 className="font-medium text-xl">{imovel.name}</h2>
        <div className="flex gap-3 text-[17px]">
          <span>{imovel.numBedrooms} Quartos</span>
          <span>{imovel.numBathrooms} Banheiro</span>
          <span>{imovel.numCarSpots} Vagas</span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium">
            {imovel.price && "Preço de Venda"}
          </span>
          <span>{imovel.price && format(imovel.price)}</span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium">
            {imovel.rent && "Preço de Aluguel"}
          </span>
          <span> {imovel.rent && format(imovel.rent)}</span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium ">
            {imovel.condoPrice && "Condomínio"}
          </span>
          <span>{imovel.condoPrice && format(imovel.condoPrice)}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
