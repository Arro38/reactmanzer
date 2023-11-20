import Meal from "@/models/Meal";
import { useState } from "react";
import { Cross2Icon, CheckIcon } from "@radix-ui/react-icons";

function ColumnEnabled({ meal }: { meal: Meal }) {
  const [enabled, setEnabled] = useState<boolean>(meal.enabled);
  return (
    <div
      className="flex items-center justify-center"
      onClick={() => {
        setEnabled(!enabled);
      }}
    >
      {enabled ? <CheckIcon /> : <Cross2Icon />}
    </div>
  );
}

export default ColumnEnabled;
