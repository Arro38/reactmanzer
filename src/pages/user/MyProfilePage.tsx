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
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
function MyProfilePage() {
  const user = useSelector((state: RootState) => state.users.user);
  const sectors = useSelector((state: RootState) => state.meals.allSectors);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const tel = form.telephone.value;
    const address = form.adresse.value;
    const sector_id = form.secteur.value;
    // TODO REQUEST UPDATE USER
    // const password = form.password.value;
    // const password_confirmation = form.password_confirmation.value;
    // if (password !== password_confirmation) {
    //   dispatch(
    //     setErrorMessage({
    //       title: "Erreur",
    //       message: "Les mots de passe ne correspondent pas",
    //     })
    //   );
    //   return;
    // }
    // store.dispatch(
    //   updateResetPassword({
    //     token: token ?? "",
    //     email: email,
    //     password: password,
    //     password_confirmation: password_confirmation,
    //   })
    // );

    // dispatch(setErrorMessage({ title: "Erreur", message: "Erreur Message" }));
    form.reset();
    // navigate("/");
  };
  return (
    <>
      <Title title="Mes informations" subtitle="Modifier vos informations" />
      <form className="grid gap-4 py-4 container" onSubmit={handleSubmit}>
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
        {/* <div className="grid grid-cols-4 items-center gap-4">
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
        </div> */}
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
          <Select required defaultValue={user.sector_id.toString()}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector.id} value={sector.id.toString()}>
                  {sector.name}
                </SelectItem>
              ))}
              {/* TODO CHECK IF CAN GET SECTOR_ID VALUE FROM FORM or use state */}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit">Modifier</Button>
      </form>
    </>
  );
}

export default MyProfilePage;
