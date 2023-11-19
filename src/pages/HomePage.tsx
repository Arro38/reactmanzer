import AllMeals from "@/components/common/Meal/AllMeals";
import MostViewedMeals from "@/components/common/Meal/MostViewedMeals";

function HomePage() {
  return (
    <>
      <MostViewedMeals />
      <AllMeals />
    </>
  );
}

export default HomePage;
