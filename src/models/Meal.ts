interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  user_id: number;
  enabled: boolean;
  user: {
    id: number;
    sector_id: number;
  };
}

export default Meal;
