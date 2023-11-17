import { Separator } from "@/components/ui/separator";
import meals from "@/data/meals";
import { MealCard } from "./MealCard";
import { Search } from "../Search";
function AllMeals() {
  return (
    <>
      <div className="mt-6 space-y-1 flex items-center gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Tous les Repas.
          </h2>
          <p className="text-sm text-muted-foreground">
            Les repas disponibles aujourd'hui
          </p>
        </div>

        <Search />
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="flex  pb-4 flex-wrap gap-6 justify-center">
          {meals.map((meal) => (
            <MealCard
              key={meal.name}
              album={meal}
              className="w-[150px]"
              aspectRatio="square"
              width={150}
              height={150}
            />
          ))}
          {meals.map((meal) => (
            <MealCard
              key={meal.name}
              album={meal}
              className="w-[150px]"
              aspectRatio="square"
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllMeals;
