import Meal from "@/models/Meal";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import { Separator } from "../../ui/separator";
import { MealCard } from "./MealCard";
import meals from "@/data/meals";
import Title from "../Title";

function MostViewedMeals() {
  return (
    <>
      <Title
        title="Repas les Plus Consultés"
        subtitle="Les repas les plus cliqués aujourd'hui"
      />
      <div className="relative ">
        <ScrollArea className="w-full overflow-auto">
          <div className="flex space-x-4 pb-4">
            {meals.map((meal: Meal) => (
              <MealCard
                key={meal.name}
                album={meal}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}

export default MostViewedMeals;
