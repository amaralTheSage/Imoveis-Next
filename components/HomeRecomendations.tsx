"use client";

import { apiClient } from "@/services/apiClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types/types";
import { testing_data } from "@/utils/ItemsData";

export default function HomeRecomendations({
  properties,
  onSetProperties,
}: any) {
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      setPending(true);

      //const response = await axios.get("http://localhost:3333/api/properties");
      //onSetProperties(response.data.properties);

      setTimeout(() => {
        setError("");
        onSetProperties(testing_data);
      }, 1000);

      console.log();
    } catch (e: any) {
      setError(e.response.data.message ?? e.response.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {properties.map((property: Property) => {
        return (
          <Link href={`/imovel/${property.id}`} key={property.id}>
            <PropertyCard property={property} key={property.id} />
          </Link>
        );
      })}
    </>
  );
}
