import Meal from "@/models/Meal";
import { useState } from "react";
import { Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
import { RootState, thunkDispatch } from "@/redux/store";
import { setMealEnabled } from "@/services/api";
import { useSelector } from "react-redux";

function ColumnEnabled({ meal }: { meal: Meal }) {
  const [enabled, setEnabled] = useState<boolean>(meal.enabled);
  const dispatch = thunkDispatch;
  const token = useSelector((state: RootState) => state.users.token);
  return (
    <div
      className="flex items-center justify-center"
      onClick={() => {
        dispatch(setMealEnabled({ id: meal.id, token, enabled: !enabled }));
        setEnabled(!enabled);
      }}
    >
      {enabled ? <CheckIcon /> : <Cross2Icon />}
    </div>
  );
}

export default ColumnEnabled;
