import React, { useState } from "react";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import imgImovel from "../public/imgImóvel.png";
import Link from "next/link";
import HomeRecomendations from "@/components/HomeRecomendations";

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

export default function Home() {
  return (
    <>
      <Header />
      <FilterSection />
      <div className="lg:max-w-[80%] m-auto">
        <h2 className="text-center mt-5 text-3xl font-medium px-4 ">
          Imóveis à Venda
        </h2>
        <section className="grid grid-flexivel gap-3 mx-8 lg:mx-0">
          {imoveis.map((i) => {
            return <HomeRecomendations key={i.id} />;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}
