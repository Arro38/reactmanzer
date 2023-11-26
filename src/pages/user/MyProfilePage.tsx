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
import User from "@/models/User";
import { setErrorMessage } from "@/redux/features/toastSlice";
import { setLoading } from "@/redux/features/userSlice";
import { RootState, thunkDispatch } from "@/redux/store";
import {
  fetchUserData,
  updateUserData,
  updateUserPassword,
} from "@/services/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function MyProfilePage() {
  const token = useSelector((state: RootState) => state.users.token);
  const sectors = useSelector((state: RootState) => state.meals.allSectors);
  const dispatch = thunkDispatch;
  const user = useSelector((state: RootState) => state.users.user);
  const [selectedSector, setSelectedSector] = useState(0);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchUserData(token));
    setSelectedSector(user.sector_id);
    dispatch(setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const form = e.currentTarget;
    const email = form.email.value;
    const tel = form.telephone.value;
    const address = form.adresse.value;
    const name = form.nameInput.value;

    const user: User = {
      id: 0,
      name: name,
      email: email,
      tel: tel,
      address: address,
      sector_id: selectedSector,
    };
    dispatch(updateUserData({ user: user, token: token }));

    form.reset();
    // navigate("/");
  };

  const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const form = e.currentTarget;
    const password = form.password.value;
    const new_password = form.new_password.value;
    const new_password_confirmation = form.new_password_confirmation.value;

    if (new_password !== new_password_confirmation) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Les mots de passe ne correspondent pas",
        })
      );
      return;
    }
    dispatch(
      updateUserPassword({
        password: password,
        new_password: new_password,
        new_password_confirmation: new_password_confirmation,
        token: token,
      })
    );

    form.reset();
  };
  return (
    <>
      <Title title="Mes informations" subtitle="Modifier vos informations" />
      <form className="grid gap-4 py-6 container" onSubmit={handleSubmit}>
        {/* name */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="nameInput" className="text-right">
            Nom
          </Label>
          <Input
            id="nameInput"
            type="text"
            placeholder="nom ..."
            required
            className="col-span-3"
            name="nameInput"
            defaultValue={user.name}
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
            defaultValue={user.email}
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
            defaultValue={user.tel}
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
            defaultValue={user.address}
          />
        </div>
        {/* secteur : Nord , Est, Ouest, Sud */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="secteur" className="text-right">
            Secteur
          </Label>
          {/* Select Option */}
          <Select
            required
            defaultValue={user.sector_id.toString()}
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

        <Button type="submit">Modifier</Button>
      </form>

      <Title title="Mot de passe" subtitle="Modifier votre mot de passe" />
      <form
        className="grid gap-4 py-6 container"
        onSubmit={handleSubmitPassword}
      >
        {/* password */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Mot de passe
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="mot de passe"
            required
            className="col-span-3"
            name="password"
          />
        </div>
        {/* new_password */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="new_password" className="text-right">
            Nouveau mot de passe
          </Label>
          <Input
            id="new_password"
            type="password"
            placeholder="nouveau mot de passe"
            required
            className="col-span-3"
            name="new_password"
          />
        </div>
        {/* new_password_confirmation */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="new_password_confirmation" className="text-right">
            Confirmer le nouveau mot de passe
          </Label>
          <Input
            id="new_password_confirmation"
            type="password"
            placeholder="confirmer le nouveau mot de passe"
            required
            className="col-span-3"
            name="new_password_confirmation"
          />
        </div>
        <Button type="submit">Modifier</Button>
      </form>
    </>
  );
}

export default MyProfilePage;
