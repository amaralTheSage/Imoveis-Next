import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../../public/images/arrow-icon.png";
import { testing_data } from "@/utils/ItemsData";
import PropertyCard from "@/components/PropertyCard";

export default function PaginaFiltrado() {
  return (
    <>
      <Header />
      <Link
        href={"/"}
        className="flex items-center ml-4 mt-6 lg:mt-12 lg:ml-8 gap-3"
      >
        <Image src={arrowIcon} className="lg:w-6 " alt="" />
        <p className="text-2xl">Voltar</p>
      </Link>
      <main className="lg:max-w-[80%] m-auto grid grid-flexivel gap-3 mt-8">
        {testing_data.map((property) => {
          return (
            <Link href={`/imovel/${property.id}`} key={property.id}>
              <PropertyCard property={property} key={property.id} />
            </Link>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
