import { MealCard } from "./MealCard";
import { Search } from "../Search";
import Title from "../Title";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
function AllMeals() {
  const meals = useSelector((state: RootState) => state.meals.allMeals);
  const searchValue = useSelector((state: RootState) => state.meals.search);
  const sectorsSelected = useSelector(
    (state: RootState) => state.meals.sectorsSelected
  );
  return (
    <div className="pt-4">
      <Title
        title="Tous les Repas"
        subtitle="Les repas disponibles aujourd'hui"
      />
      <Search />
      <div className="relative">
        <div className="flex  pb-4 flex-wrap gap-6 justify-center">
          {meals
            .filter((meal) => {
              if (sectorsSelected.length > 0) {
                return (
                  sectorsSelected.filter(
                    (sector) => meal.user.sector_id == sector.id
                  ).length > 0
                );
              }
              return true;
            })
            .filter((meal) => {
              if (searchValue) {
                return (
                  meal.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  meal.description
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  meal.user.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              }
              return true;
            })
            .map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
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
