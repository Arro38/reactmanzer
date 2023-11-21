import Meal from "@/models/Meal";
import Sector from "@/models/Sector";
import { fetchAllSectors } from "@/services/api";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "./userSlice";

export interface MealState {
  allMeals: Meal[];
  allSectors: Sector[];
  sectorsSelected: Sector[];
  search: string;
}

const initialState: MealState = {
  allMeals: [],
  allSectors: [],
  sectorsSelected: [],
  search: "",
};

type ToggleSectorSelected = {
  secteur: Sector;
  selected: boolean;
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleSectorSelected(
      state,
      { payload }: PayloadAction<ToggleSectorSelected>
    ) {
      if (payload.selected) {
        state.sectorsSelected.push(payload.secteur);
      } else {
        state.sectorsSelected = state.sectorsSelected.filter(
          (s) => s.id !== payload.secteur.id
        );
      }
    },

    setSectorsSelected(state, action: PayloadAction<Sector[]>) {
      state.sectorsSelected = action.payload;
    },

    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllSectors.fulfilled, (state, action) => {
      setLoading(false);
      state.allSectors = action.payload;
    });
  },
});

export const { toggleSectorSelected, setSectorsSelected, setSearch } =
  mealSlice.actions;

export default mealSlice.reducer;
