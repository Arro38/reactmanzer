import { API_URL } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Sector from "@/models/Sector";
import Meal, { MealForm } from "@/models/Meal";

export const fetchAllSectors = createAsyncThunk("meals/sectors", async () => {
  const response = await fetch(API_URL + "sectors");
  return (await response.json()) as Sector[];
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
      const data = await response.json();
      console.log(data);
      return response.ok ? true : false;
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

export const getMeal = async (id: number) => {
  const response = await fetch(API_URL + "meals/" + id);
  return (await response.json()) as Meal;
};
