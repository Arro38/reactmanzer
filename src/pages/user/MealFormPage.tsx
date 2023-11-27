import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Title from "@/components/common/Title";
import { createMeal } from "@/services/api";
import { store, thunkDispatch } from "@/redux/store";
import {
  setErrorMessage,
  setSuccessMessage,
} from "@/redux/features/toastSlice";
import { setLoading } from "@/redux/features/userSlice";
import { MealForm, mealSchema } from "@/models/Meal";
import { useNavigate } from "react-router-dom";

// Translate error messages

// zodResolver to translate to french

function MealFormPage() {
  // const { id } = useParams();
  const form = useForm<z.infer<typeof mealSchema>>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      name: "eazeazdazdaz",
      description: "dazdadzadazd",
      price: 1,
      image: { file: null },
      enabled: false,
    },
  });
  const navigate = useNavigate();
  const dispatch = thunkDispatch;

  // if (id) {
  // Get meal from API
  // reset form with meal
  // form.reset(meal);
  // }
  async function onSubmit(values: z.infer<typeof mealSchema>) {
    dispatch(setLoading(true));
    const result = await createMeal(
      values as MealForm,
      store.getState().users.token
    );
    dispatch(setLoading(false));
    console.log(result);
    if (result) {
      dispatch(
        setSuccessMessage({
          message: "Repas créé avec succès",
          title: "Succès",
        })
      );
      // Redirect to meal page
      navigate("/meals");
    } else {
      dispatch(
        setErrorMessage({
          message: "Erreur lors de la création du repas",
          title: "Erreur",
        })
      );
    }
  }
  return (
    <Form {...form}>
      <Title title="Fiche repas" />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="nom" {...field} />
              </FormControl>
              <FormDescription>
                Nom du repas, visible par les clients
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input type="text" placeholder="description" {...field} />
              </FormControl>
              <FormDescription>
                Description du repas, visible par les clients
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* FormField Number for prix */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="prix"
                  {...field}
                  onChange={(e) => {
                    // If the value is not a number or is null, do not update the value
                    if (isNaN(Number(e.target.value)) || !e.target.value) {
                      field.onChange(null);
                      return;
                    }
                    // Otherwise, update the value to float
                    field.onChange(parseFloat(e.target.value));
                  }}
                />
              </FormControl>
              <FormDescription>
                Prix du repas, visible par les clients
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* image file */}
        <FormField
          control={form.control}
          name="image.file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  placeholder="image"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormDescription>
                Image du repas, visible par les clients
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="enabled"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Actif</FormLabel>
              <FormControl>
                <Checkbox
                  className="ml-4"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Actif du repas, visible par les clients
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  );
}

export default MealFormPage;
