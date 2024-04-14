"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

export default function HomeRecomendations() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function getImoveis() {
      await fetch("http://localhost:3333")
        .then((res) => res.json())
        .then((data) => {
          setImoveis(data);
          console.log(data);
        });
    }

    getImoveis();
  }, []);

  return (
    <>
      {imoveis.map((im) => {
        return (
          <Link href={`/imovel/${im.id}`} key={im.id}>
            <PropertyCard imovel={im} />
          </Link>
        );
      })}
    </>
  );
}
