"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import imgImovel from "../public/imgImóvel.png";
import Link from "next/link";
import HomeRecomendations from "@/components/HomeRecomendations";
import { Property } from "@/types/types";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);

  return (
    <>
      <Header />
      <FilterSection properties={properties} onSetProperties={setProperties} />
      <div className="lg:max-w-[80%] m-auto">
        <h2 className="text-center mt-5 text-3xl font-medium px-4 md:text-left md:ml-5">
          Imóveis à Venda
        </h2>
        <section className="grid grid-flexivel gap-3 mx-8 lg:mx-0">
          <HomeRecomendations
            properties={properties}
            onSetProperties={setProperties}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
