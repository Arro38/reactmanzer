import { CrossCircledIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Meal from "@/models/Meal";
import { Link } from "react-router-dom";
import { RootState, thunkDispatch } from "@/redux/store";
import { deleteMeal } from "@/services/api";
import { useSelector } from "react-redux";
function ActionsButton({ meal }: { meal: Meal }) {
  const dispatch = thunkDispatch;
  const token = useSelector((state: RootState) => state.users.token);
  return (
    <div>
      <Button
        variant="ghost"
        onClick={() => {
          if (confirm("Etes-vous sûr de vouloir supprimer ce repas ?")) {
            dispatch(deleteMeal({ id: meal.id, token }));
          }
        }}
      >
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
