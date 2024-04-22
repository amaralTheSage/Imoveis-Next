import Image from "next/image";
import React from "react";
import Link from "next/link";
import { format } from "../utils/BRLFormatter";
import { Property } from "@/types/types";

/*w-[300px] min-[400px]:w-[380px] min-[500px]:w-[450px] lg:w-[280px] min-[850px]:w-[400px]xl:w-[300px] */

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="rounded-md shadow-md my-2 text-lg">
      <Image
        alt={property.name}
        src={property.images[0]}
        className="rounded-t-md"
        width={500}
        height={500}
      />
      <div className="p-2 flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-light-gray font-light capitalize">
            {property.property_type} - {property.neighborhood}
          </span>
          <span className="font-medium ">{property.area}m²</span>
        </div>
        <h2 className="font-medium text-xl">{property.name}</h2>
        <div className="flex gap-3 text-[17px]">
          <span>
            {property.bedrooms}{" "}
            {property.bedrooms == 1 ? " Quarto" : " Quartos"}
          </span>
          <span>
            {property.bathrooms}
            {property.bathrooms == 1 ? " Banheiro" : " Banheiros"}
          </span>
          <span>
            {property.car_spots} {property.car_spots == 1 ? " Vaga" : " Vagas"}
          </span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium">
            {property.price && "Preço de Venda"}
          </span>
          <span>{property.price && format(property.price)}</span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium">
            {property.rent && "Preço de Aluguel"}
          </span>
          <span> {property.rent && format(property.rent)}</span>
        </div>
        <div className="flex justify-between text-xl">
          <span className="font-medium ">
            {property.condo_price && "Condomínio"}
          </span>
          <span>{property.condo_price && format(property.condo_price)}</span>
        </div>
      </div>
    </div>
  );
}
