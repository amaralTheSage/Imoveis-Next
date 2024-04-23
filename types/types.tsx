export interface Property {
  id: number;
  name: string;
  type: "selling" | "renting";
  property_type: "house" | "apartment" | "urban land" | "rural land";
  city: string;
  neighborhood: string;
  description: string;
  images: { imageUrl: any }[];
  area: number;
  bedrooms: number;
  bathrooms: number;
  car_spots: number;
  price: number;
  rent: number;
  condo_price: number;
}
