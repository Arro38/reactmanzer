import Meal from "@/models/Meal";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { MealArtwork } from "./Hero/MealArtwork";
import meals from "@/data/meals";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Repas les Plus Consultés
          </h2>
          <p className="text-sm text-muted-foreground">
            Les repas les plus cliqués aujourd'hui
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative ">
        <ScrollArea className="w-full overflow-auto">
          <div className="flex space-x-4 pb-4">
            {meals.map((meal: Meal) => (
              <MealArtwork
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

export default Hero;
