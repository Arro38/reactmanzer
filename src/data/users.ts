import User from "@/models/User";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "hashedPassword1",
    meals: [
      {
        id: 1,
        price: 12.99,
        userId: 1,
        name: "Spaghetti Bolognese",
        description:
          "Classic Italian dish with a rich meat sauce and al dente pasta.",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265951?w=300&dpr=2&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    password: "hashedPassword2",
    meals: [
      {
        id: 2,
        price: 9.99,
        userId: 2,
        name: "Chicken Caesar Salad",
        description:
          "Crispy romaine lettuce, grilled chicken, parmesan cheese, and Caesar dressing.",
        image:
          "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&dpr=2&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Alice Doe",
    email: "alice@example.com",
    password: "hashedPassword3",
    meals: [
      {
        id: 3,
        price: 15.99,
        userId: 3,
        name: "Miso Glazed Salmon",
        description:
          "Grilled salmon with a savory miso glaze, served with steamed vegetables.",
        image:
          "https://images.unsplash.com/photo-1595374447268-7e9f731f6c0f?w=300&dpr=2&q=80",
      },
    ],
  },
];
export default users;
