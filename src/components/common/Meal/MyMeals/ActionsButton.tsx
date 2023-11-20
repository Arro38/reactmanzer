import { CrossCircledIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Meal from "@/models/Meal";
import { Link } from "react-router-dom";
function ActionsButton({ meal }: { meal: Meal }) {
  return (
    <div>
      <Button variant="ghost">
        <CrossCircledIcon />
      </Button>
      <Link to={`/meals/${meal.id}`}>
        <Button variant="ghost">
          <Pencil1Icon />
        </Button>
      </Link>
    </div>
  );
}

export default ActionsButton;
