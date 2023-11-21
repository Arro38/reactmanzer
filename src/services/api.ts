import { API_URL } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Sector from "@/models/Sector";

const fetchAllSectors = createAsyncThunk("meals/sectors", async () => {
  const response = await fetch(API_URL + "sectors");
  return (await response.json()) as Sector[];
});

export { fetchAllSectors };
