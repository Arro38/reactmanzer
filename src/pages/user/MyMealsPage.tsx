import { DataTable } from "@/components/common/Meal/MyMeals/DataTable";
import { columns } from "@/components/common/Meal/MyMeals/Column";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function MyMealsPage() {
  const myMeals = useSelector((state: RootState) => state.meals.myMeals);

  return <>{myMeals && <DataTable columns={columns} data={myMeals} />}</>;
}

export default MyMealsPage;
