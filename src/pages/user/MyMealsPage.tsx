import { DataTable } from "@/components/common/Meal/MyMeals/DataTable";
import { columns } from "@/components/common/Meal/MyMeals/Column";
import { useEffect } from "react";
import { RootState, thunkDispatch } from "@/redux/store";
import { getMyMeals } from "@/services/api";
import { useSelector } from "react-redux";

function MyMealsPage() {
  const myMeals = useSelector((state: RootState) => state.meals.myMeals);
  const token = useSelector((state: RootState) => state.users.token);
  const dispatch = thunkDispatch;

  return <>{myMeals && <DataTable columns={columns} data={myMeals} />}</>;
}

export default MyMealsPage;
