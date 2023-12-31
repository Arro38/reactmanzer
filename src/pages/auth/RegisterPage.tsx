import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import User from "@/models/User";
import { setAuthContent, setLoading } from "@/redux/features/userSlice";
import { RootState, thunkDispatch } from "@/redux/store";
import { registerUser } from "@/services/auth";
import { useState } from "react";
import { useSelector } from "react-redux";

function Register() {
  const dispatch = thunkDispatch;
  const sectors = useSelector((state: RootState) => state.meals.allSectors);
  const [selectedSector, setSelectedSector] = useState(1);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const password = form.password.value;
    const user: User = {
      id: 0,
      name: form.nameInput.value,
      email: form.email.value,
      tel: form.telephone.value,
      address: form.address.value,
      sector_id: selectedSector,
    };
    dispatch(setLoading(true));
    dispatch(registerUser({ user, password }));

    form.reset();
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle>Créer un compte</DialogTitle>
        <DialogDescription>Entrez vos informations.</DialogDescription>
      </DialogHeader>
      <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="nameInput" className="text-right">
            Nom du restaurant
          </Label>
          <Input
            id="nameInput"
            type="text"
            placeholder="Nom ..."
            required
            className="col-span-3"
          />
        </div>
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
        {/* address */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            Adresse
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="addresse"
            required
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="secteur" className="text-right">
            Secteur
          </Label>
          {/* Select Option */}
          <Select
            required
            onValueChange={(value) => {
              setSelectedSector(parseInt(value));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector.id} value={sector.id.toString()}>
                  {sector.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(setAuthContent("login"));
            }}
          >
            Page de connexion
          </Button>
          <Button type="submit">S'inscrire</Button>
        </DialogFooter>
      </form>
    </>
  );
}

export default Register;
