import { Property } from "@/types/types";

import imgImovel from "../public/images/img-imovel.png";

const testing_data: Property[] = [
  {
    id: 1,
    name: "Vista Encantada",
    type: "selling",
    property_type: "house",
    city: "Rio de Janeiro",
    neighborhood: "Barra da Tijuca",
    description: "Casa ampla com vista para o mar, jardim e piscina.",
    images: [
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
    ],
    area: 350,
    bedrooms: 1,
    bathrooms: 1,
    car_spots: 1,
    price: 120000,
    rent: 4000,
    condo_price: 500,
  },
  {
    id: 2,
    name: "Refúgio Tranquilo",
    type: "selling",
    property_type: "rural land",
    city: "Campos do Jordão",
    neighborhood: "Monte Belo",
    description:
      "Acampamento de luxo com todas as comodidades modernas em meio à natureza.",
    images: [
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
    ],
    area: 500,
    bedrooms: 5,
    bathrooms: 4,
    car_spots: 4,
    price: 1500000,
    rent: 5000,
    condo_price: 0,
  },
  {
    id: 3,
    name: "Terreno no Fragas",
    type: "selling",
    property_type: "urban land",
    city: "Pelotas",
    neighborhood: "Fragata",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    images: [
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
    ],
    area: 500,
    bedrooms: 5,
    bathrooms: 4,
    car_spots: 4,
    price: 1500000,
    rent: 5000,
    condo_price: 0,
  },
  {
    id: 4,
    name: "Apzao no Laranjal",
    type: "selling",
    property_type: "apartment",
    city: "Pelotas",
    neighborhood: "laranjal",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    images: [
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
      {
        imageUrl: imgImovel,
      },
    ],
    area: 500,
    bedrooms: 5,
    bathrooms: 4,
    car_spots: 4,
    price: 1500000,
    rent: 5000,
    condo_price: 80,
  },
];

export { testing_data };
