import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  useNavigate,
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "@/redux/features/toastSlice";
import { updateResetPassword } from "@/services/auth";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
function UpdateResetPasswordPage() {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token"));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const password_confirmation = form.password_confirmation.value;
    if (password !== password_confirmation) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Les mots de passe ne correspondent pas",
        })
      );
      return;
    }

    store.dispatch(
      updateResetPassword({
        token: token ?? "",
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
    );

    // dispatch(setErrorMessage({ title: "Erreur", message: "Erreur Message" }));
    form.reset();
  };

  return !token ? (
    <h1>Oups ... Ce lien n'est plus disponible </h1>
  ) : (
    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input
          required
          id="email"
          type="email"
          placeholder="email ..."
          className="col-span-3"
        />
      </div>
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
          defaultValue={"1234567890"}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="password_confirmation" className="text-right">
          Confirmer le mot de passe
        </Label>
        <Input
          id="password_confirmation"
          type="password"
          placeholder="mot de passe"
          required
          className="col-span-3"
          defaultValue={"1234567890"}
        />
      </div>
      <Button type="submit">Envoyer</Button>
    </form>
  );
}

export default UpdateResetPasswordPage;
