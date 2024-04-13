"use client";
import Link from "next/link";
import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { format } from "util";

export default function HomeRecomendations() {
  return (
    <Link href={"/imovel"}>
      <PropertyCard />
    </Link>
  );
}
