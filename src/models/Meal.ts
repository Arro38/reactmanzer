interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  userId: number; // Assurez-vous d'ajouter cette propriété si le backend renvoie également l'identifiant de l'utilisateur associé
}

export default Meal;
