export interface Property {
    id: number;
    name: string;
    type: "house" | "apartment" | "land" | "camp";
    city: string;
    state: string;
    neighborhood: string;
    description: string;
    images: string[];
    area: number;
    bedrooms: number;
    bathrooms: number;
    car_spots: number;
    price: number;
    rent: number;
    condo_price: number;
  }