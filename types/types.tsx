export interface Property {
  id: number;
  name: string;
  type: "house" | "apartment" | "urban land" | "rural land";
  city: string;
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
