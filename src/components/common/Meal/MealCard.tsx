import { Button } from "@/components/ui/button";
import { STORAGE_URL } from "@/config/constants";
import { cn } from "@/lib/utils";
import Meal from "@/models/Meal";
import { RootState } from "@/redux/store";
import { MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import ActionsButton from "./MyMeals/ActionsButton";

interface MealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  meal: Meal;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function MealCard({
  meal,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: MealCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: any) => {
    // e.preventDefault();
    // Vérifier si l'élément cible est un bouton
    if (
      e.target.closest("button") ||
      e.target.tagName.toLowerCase() === "button"
    ) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const user = useSelector((state: RootState) => state.users.user);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
          <img
            onClick={handleClick}
            src={STORAGE_URL + meal.image}
            alt={meal.name}
            width={width + "px"}
            height={height + "px"}
            className={cn(
              " cursor-pointer h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">
            {meal.name} - {meal.user.name}
          </h3>
          <p className="text-xs text-muted-foreground">{meal.description}</p>
          <p className="text-xs text-muted-foreground">
            Adresse : {meal.user.address}
          </p>
          <p className="text-xs text-muted-foreground">Tel : {meal.user.tel}</p>
          {user.id === meal.user.id && <ActionsButton meal={meal} />}
        </div>
      </div>
      <div
        className={cn(
          "h-full flex flex-col gap-6 items-center justify-center",
          className
        )}
        {...props}
        onClick={handleClick}
      >
        <Button className=" bg-slate-400">
          <MapPin /> Y aller !
        </Button>
        <Button className="hover:bg-slate-400">
          <PhoneCall /> Appeler{" "}
        </Button>
      </div>
    </ReactCardFlip>
  );
}
