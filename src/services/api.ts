import { API_URL } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Sector from "@/models/Sector";
import Meal, { MealForm } from "@/models/Meal";

export const fetchAllSectors = createAsyncThunk("meals/sectors", async () => {
  const response = await fetch(API_URL + "sectors");
  return (await response.json()) as Sector[];
});

export const fetchAllMeals = createAsyncThunk("meals/allMeals", async () => {
  const response = await fetch(API_URL + "meals");
  return (await response.json()) as Meal[];
});

// Meal
export const createMeal = createAsyncThunk(
  "meals/createMeal",
  async ({ meal, token }: { meal: MealForm; token: string }) => {
    const form = new FormData();
    form.append("name", meal.name);
    form.append("description", meal.description);
    form.append("price", meal.price.toString());
    form.append("enabled", meal.enabled.toString());
    if (meal.image.file) {
      form.append("image", meal.image.file);
    }
    try {
      const response = await fetch(API_URL + "meals", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: form,
      });
      const data = (await response.json()) as Meal;
      return response.ok ? data : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
);

export const getMyMeals = createAsyncThunk(
  "meals/myMeals",
  async (token: string) => {
    const response = await fetch(API_URL + "my-meals", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return (await response.json()) as Meal[];
  }
);

export const deleteMeal = createAsyncThunk(
  "meals/deleteMeal",
  async ({ id, token }: { id: number; token: string }) => {
    try {
      const response = await fetch(API_URL + "meals/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.ok ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
);

export const setMealEnabled = createAsyncThunk(
  "meals/setMealEnabled",
  async ({
    id,
    enabled,
    token,
  }: {
    id: number;
    enabled: boolean;
    token: string;
  }) => {
    try {
      const response = await fetch(API_URL + "meals/" + id + "/status", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enabled: enabled,
        }),
      });
      const data = (await response.json()) as Meal;
      return response.ok ? data : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
);

export const updateMeal = createAsyncThunk(
  "meals/updateMeal",
  async ({
    meal,
    token,
    id,
  }: {
    meal: MealForm;
    token: string;
    id: number;
  }) => {
    const form = new FormData();
    form.append("name", meal.name);
    form.append("description", meal.description);
    form.append("price", meal.price.toString());
    form.append("enabled", meal.enabled.toString());
    if (meal.image.file) {
      form.append("image", meal.image.file);
    }
    try {
      const response = await fetch(API_URL + "meals/" + id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: form,
      });
      const data = (await response.json()) as Meal;
      return response.ok ? data : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
);

export const getMeal = async (id: string) => {
  const response = await fetch(API_URL + "meals/" + id);
  return (await response.json()) as Meal;
};
