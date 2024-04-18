import { Property } from "@/types/types"

const testing_data: Property[] = [
    {
        id: 1,
        name: "Vista Encantada",
        type: "house",
        city: "Rio de Janeiro",
        state: "RJ",
        neighborhood: "Barra da Tijuca",
        description: "Casa ampla com vista para o mar, jardim e piscina.",
        images: ["/images/img-imovel.png", "/images/img-imovel.png"],
        area: 350,
        bedrooms: 4,
        bathrooms: 3,
        car_spots: 2,
        price: 1200000,
        rent: 4000,
        condo_price: 500
    },
    {
        id: 2,
        name: "Refúgio Tranquilo",
        type: "camp",
        city: "Campos do Jordão",
        state: "SP",
        neighborhood: "Monte Belo",
        description: "Acampamento de luxo com todas as comodidades modernas em meio à natureza.",
        images: ["/images/img-imovel.png", "/images/img-imovel.png"],
        area: 500,
        bedrooms: 5,
        bathrooms: 4,
        car_spots: 4,
        price: 1500000,
        rent: 5000,
        condo_price: 0
    }
]

export { testing_data }