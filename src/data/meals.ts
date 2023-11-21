import Meal from "@/models/Meal";

export const allMeals: Meal[] = [
  {
    id: 1,
    price: 12.99,
    userId: 1,
    name: "Spaghetti Bolognese",
    description:
      "Classic Italian dish with a rich meat sauce and al dente pasta.",
    image: "https://source.unsplash.com/300x200/?spaghetti",
    enabled: true,
  },
  {
    id: 2,
    price: 9.99,
    userId: 2,
    name: "Chicken Caesar Salad",
    description:
      "Crispy romaine lettuce, grilled chicken, parmesan cheese, and Caesar dressing.",
    image: "https://source.unsplash.com/300x200/?caesar-salad",
    enabled: true,
  },
  {
    id: 3,
    price: 15.99,
    userId: 3,
    name: "Miso Glazed Salmon",
    description:
      "Grilled salmon with a savory miso glaze, served with steamed vegetables.",
    image: "https://source.unsplash.com/300x200/?salmon",
    enabled: true,
  },
  {
    id: 4,
    price: 14.5,
    userId: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, fresh mozzarella, and basil leaves.",
    image: "https://source.unsplash.com/300x200/?pizza",
    enabled: true,
  },
  {
    id: 5,
    price: 18.75,
    userId: 2,
    name: "Beef Tacos",
    description:
      "Seasoned ground beef, lettuce, cheese, and salsa in a crispy taco shell.",
    image: "https://source.unsplash.com/300x200/?tacos",
    enabled: false,
  },
  {
    id: 6,
    price: 11.99,
    userId: 3,
    name: "Vegetarian Pad Thai",
    description:
      "Stir-fried rice noodles with tofu, bean sprouts, and peanuts.",
    image: "https://source.unsplash.com/300x200/?pad-thai",
    enabled: false,
  },
  {
    id: 7,
    price: 13.25,
    userId: 1,
    name: "Grilled Steak",
    description:
      "Juicy and tender grilled steak, served with a side of garlic mashed potatoes.",
    image: "https://source.unsplash.com/300x200/?steak",
    enabled: true,
  },
  {
    id: 8,
    price: 10.49,
    userId: 2,
    name: "Caprese Salad",
    description:
      "Fresh tomatoes, mozzarella cheese, and basil, drizzled with balsamic glaze.",
    image: "https://source.unsplash.com/300x200/?caprese-salad",
    enabled: true,
  },
  {
    id: 9,
    price: 16.99,
    userId: 3,
    name: "Sushi Platter",
    description:
      "Assorted sushi rolls with fresh fish, avocado, and soy sauce.",
    image: "https://source.unsplash.com/300x200/?sushi",
    enabled: true,
  },
  {
    id: 10,
    price: 12.99,
    userId: 1,
    name: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce with grilled chicken and fettuccine pasta.",
    image: "https://source.unsplash.com/300x200/?pasta",
    enabled: true,
  },
];

export default allMeals;
