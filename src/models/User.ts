import Meal from "./Meal";

// User.ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Notez que le mot de passe est généralement géré côté backend et n'est pas retourné dans la plupart des cas
  meals: Meal[]; // Supposons que vous avez une relation One-to-Many où un utilisateur peut avoir plusieurs repas
}

export default User;
