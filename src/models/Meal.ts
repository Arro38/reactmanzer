import * as z from "zod";
interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  user_id: number;
  enabled: boolean;
  user: {
    id: number;
    sector_id: number;
  };
}

export interface MealForm {
  name: string;
  description: string;
  price: number;
  image: {
    file?: any;
  };
  enabled: boolean;
}

export const convertMealToMealForm = (meal: Meal) => {
  return {
    name: meal.name,
    description: meal.description,
    price: meal.price,
    image: {
      file: undefined,
    },
    enabled: meal.enabled,
  };
};

const messages = {
  required: "Ce champ est obligatoire",
  minLength: "Ce champ doit contenir au moins 3 caractères",
  maxLength: "Ce champ doit contenir au maximum 255 caractères",
  url: "Ce champ doit être une URL valide",
  number: "Ce champ doit être un nombre",
  positive: "Ce champ doit être un nombre positif",
  file: "Ce champ est requis, doit être une image (jpg, jpeg, png) et ne doit pas dépasser 3Mo",
  fileSize: "Ce fichier est trop volumineux",
};

const MAX_FILE_SIZE = 3000000;
function checkFileTypeIsImage(file: File | null) {
  if (
    file &&
    ["jpg", "jpeg", "png"].includes(file.type.split("/")[1].toLowerCase())
  ) {
    return true;
  }
  return false;
}

export const mealSchema = z.object({
  // Name is required, min length 3, max length 255 with error messages translated
  name: z.string().min(3, messages.minLength).max(50, messages.maxLength),
  description: z
    .string()
    .min(5, messages.minLength)
    .max(50, messages.maxLength),
  price: z.number().positive(messages.positive),
  image: z.object({
    file: z
      .any()
      .refine(checkFileTypeIsImage, messages.file)
      .refine((file) => file && file.size < MAX_FILE_SIZE, messages.fileSize),
  }),
  enabled: z.boolean().default(false),
});
export default Meal;
