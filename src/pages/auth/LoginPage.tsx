import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAuthContent, setLoading } from "@/redux/features/userSlice";
import { RootState, store } from "@/redux/store";
import { loginUser } from "@/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(setLoading(true));
    store.dispatch(loginUser({ email, password }));

    form.reset();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Authentification</DialogTitle>
        <DialogDescription>
          Entrez vos informations de connexion.
        </DialogDescription>
      </DialogHeader>
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
            Password
          </Label>
          <Input
            required
            id="password"
            type="password"
            placeholder="password"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              dispatch(setAuthContent("register"));
            }}
          >
            Page d'inscription
          </Button>
          <Button type="submit">Se connecter</Button>
        </DialogFooter>
      </form>
      <div className="text-right">
        <span
          onClick={() => {
            dispatch(setAuthContent("resetpassword"));
          }}
          className="text-gray-500 hover:underline cursor-pointer"
        >
          <DialogDescription>Mot de passer oublié ?</DialogDescription>
        </span>
      </div>
    </>
  );
}

export default Login;
