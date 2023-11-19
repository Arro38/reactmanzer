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

function Login({
  setAuthContent,
}: {
  setAuthContent: React.Dispatch<
    React.SetStateAction<"login" | "register" | "resetpassword">
  >;
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Authentification</DialogTitle>
        <DialogDescription>
          Entrez vos informations de connexion.
        </DialogDescription>
      </DialogHeader>
      <form className="grid gap-4 py-4">
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
            variant="secondary"
            onClick={() => {
              setAuthContent("register");
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
            setAuthContent("resetpassword");
          }}
          className="text-gray-500 hover:underline cursor-pointer"
        >
          <DialogDescription>Mot de passer oublié ?</DialogDescription>
        </span>
      </div>
    </DialogContent>
  );
}

export default Login;
