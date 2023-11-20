import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
function MyProfilePage() {
  return (
    <>
      <Title title="Mes informations" subtitle="Modifier vos informations" />
      <form className="grid gap-4 py-4 container">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="email ..."
            required
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="mot de passe"
            required
            className="col-span-3"
          />
        </div>
        {/* telephone */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="telephone" className="text-right">
            Téléphone
          </Label>
          <Input
            id="telephone"
            type="text"
            placeholder="téléphone"
            required
            className="col-span-3"
          />
        </div>
        {/* adresse */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="adresse" className="text-right">
            Adresse
          </Label>
          <Input
            id="adresse"
            type="text"
            placeholder="adresse"
            required
            className="col-span-3"
          />
        </div>
        {/* secteur : Nord , Est, Ouest, Sud */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="secteur" className="text-right">
            Secteur
          </Label>
          {/* Select Option */}
          <Select required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nord">Nord</SelectItem>
              <SelectItem value="est">Est</SelectItem>
              <SelectItem value="ouest">Ouest</SelectItem>
              <SelectItem value="sud">Sud</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit">S'inscrire</Button>
      </form>
    </>
  );
}

export default MyProfilePage;
