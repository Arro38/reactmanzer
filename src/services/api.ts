import { API_URL } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Sector from "@/models/Sector";
import { MealForm } from "@/models/Meal";

export const fetchAllSectors = createAsyncThunk("meals/sectors", async () => {
  const response = await fetch(API_URL + "sectors");
  return (await response.json()) as Sector[];
});

// Meal
export const createMeal = async (meal: MealForm, token: string) => {
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
};
