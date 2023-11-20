import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import Meal from "@/models/Meal";
import { useParams } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/common/Title";

// Translate error messages
const messages = {
  required: "Ce champ est obligatoire",
  minLength: "Ce champ doit contenir au moins 3 caractères",
  maxLength: "Ce champ doit contenir au maximum 255 caractères",
  url: "Ce champ doit être une URL valide",
  number: "Ce champ doit être un nombre",
  positive: "Ce champ doit être un nombre positif",
};

const mealSchema = z.object({
  // Name is required, min length 3, max length 255 with error messages translated
  name: z.string().min(3, messages.minLength).max(50, messages.maxLength),
  description: z
    .string()
    .min(5, messages.minLength)
    .max(50, messages.maxLength),
  price: z.number().positive(messages.positive),
  image: z.string().url(messages.url),
  enabled: z.boolean().default(false),
});
// zodResolver to translate to french

function MealFormPage() {
  const { id } = useParams();
  const form = useForm<z.infer<typeof mealSchema>>({
    resolver: zodResolver(mealSchema),
    //   defaultValues: {
    //     name: "",
    //     description: "",
    //     price: 0,
    //     image: "",
    //     enabled: false,
    //   },
  });

  if (id) {
    // Get meal from API
    // reset form with meal
    // form.reset(meal);
  }
  function onSubmit(values: z.infer<typeof mealSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                <Textarea placeholder="description" {...field} />
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
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="image" {...field} />
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
