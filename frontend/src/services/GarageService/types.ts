export interface CarResponse {
  items: Car[];
  default: Car[];
}

export interface Car {
  id: string;
  model: string;
  make: string;
  year: number;
  image: {
    url: string;
  };
}
