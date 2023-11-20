import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function Search() {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center pb-4">
      <Input
        type="search"
        placeholder="Rechercher..."
        className="md:w-[100px] lg:w-[300px] border-['217.2 32.6% 17.5%']"
      />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Nord
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Sud
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Est
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Ouest
        </label>
      </div>
    </div>
  );
}
