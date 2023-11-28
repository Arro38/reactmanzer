import Meal from "@/models/Meal";
import Sector from "@/models/Sector";
import {
  createMeal,
  deleteMeal,
  fetchAllMeals,
  fetchAllSectors,
  getMyMeals,
  updateMeal,
} from "@/services/api";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "./userSlice";

export interface MealState {
  allMeals: Meal[];
  allSectors: Sector[];
  sectorsSelected: Sector[];
  search: string;
  myMeals: Meal[];
}

const initialState: MealState = {
  allMeals: [],
  allSectors: [],
  sectorsSelected: [],
  search: "",
  myMeals: [],
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
    builder.addCase(fetchAllMeals.fulfilled, (state, action) => {
      setLoading(false);
      state.allMeals = action.payload;
    });
    builder.addCase(createMeal.fulfilled, (state, action) => {
      setLoading(false);
      if (action.payload) {
        state.myMeals.push(action.payload);
      }
    });
    builder.addCase(fetchAllSectors.fulfilled, (state, action) => {
      setLoading(false);
      state.allSectors = action.payload;
    });
    builder.addCase(getMyMeals.fulfilled, (state, action) => {
      setLoading(false);
      state.myMeals = action.payload;
    });
    builder.addCase(deleteMeal.fulfilled, (state, action) => {
      setLoading(false);
      if (action.payload) {
        state.myMeals = state.myMeals.filter(
          (m) => m.id !== action.meta.arg.id
        );
      }
    });
    builder.addCase(updateMeal.fulfilled, (state, action) => {
      setLoading(false);
      if (action.payload) {
        const mealUpdated = action.payload as Meal;
        state.myMeals = state.myMeals.map((m) =>
          m.id === mealUpdated.id ? mealUpdated : m
        );
      }
    });
  },
});

export const { toggleSectorSelected, setSectorsSelected, setSearch } =
  mealSlice.actions;

export default mealSlice.reducer;
