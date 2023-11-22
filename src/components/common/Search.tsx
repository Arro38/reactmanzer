import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CheckedState } from "@radix-ui/react-checkbox";
import { setSearch, toggleSectorSelected } from "@/redux/features/mealSlice";

export function Search() {
  const sectors = useSelector((state: RootState) => state.meals.allSectors);
  const sectorsSelected = useSelector(
    (state: RootState) => state.meals.sectorsSelected
  );
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center pb-4">
      <Input
        type="search"
        placeholder="Rechercher..."
        className="md:w-[100px] lg:w-[300px] border-['217.2 32.6% 17.5%']"
        onInput={(e) => {
          dispatch(setSearch(e.currentTarget.value));
        }}
      />
      {sectors.map((sector) => (
        <div key={sector.id} className="flex items-center space-x-2">
          <Checkbox
            checked={sectorsSelected.includes(sector)}
            id={"sector-" + sector.id}
            onCheckedChange={(c: CheckedState) => {
              dispatch(
                toggleSectorSelected({
                  secteur: sector,
                  selected: c ? true : false,
                })
              );
            }}
          />
          <label
            htmlFor={"sector-" + sector.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {sector.name}
          </label>
        </div>
      ))}
    </div>
  );
}
