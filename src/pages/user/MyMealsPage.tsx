import { DataTable } from "@/components/common/Meal/MyMeals/DataTable";
import { columns } from "@/components/common/Meal/MyMeals/Column";
import meals from "@/data/meals";

function MyMealsPage() {
  return <DataTable columns={columns} data={meals} />;
}

export default MyMealsPage;
