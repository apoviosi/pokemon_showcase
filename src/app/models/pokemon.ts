export interface Pokemon {
  id: number;
  name: string;
  type: string;
  heldItem: string;
  description: string;
  image: string; // URL or emoji
}

export interface MartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}