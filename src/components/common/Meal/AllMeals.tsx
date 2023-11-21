import meals from "@/data/meals";
import { MealCard } from "./MealCard";
import { Search } from "../Search";
import Title from "../Title";
function AllMeals() {
  return (
    <div className="pt-4">
      <Title
        title="Tous les Repas"
        subtitle="Les repas disponibles aujourd'hui"
      />
      <Search />
      <div className="relative">
        <div className="flex  pb-4 flex-wrap gap-6 justify-center">
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              album={meal}
              className="w-[150px]"
              aspectRatio="square"
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllMeals;
