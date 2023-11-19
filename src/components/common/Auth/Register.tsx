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

function Register({
  setAuthContent,
}: {
  setAuthContent: React.Dispatch<
    React.SetStateAction<"login" | "register" | "resetpassword">
  >;
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Créer un compte</DialogTitle>
        <DialogDescription>Entrez vos informations.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
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
            id="password"
            type="password"
            placeholder="password"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          variant="secondary"
          onClick={() => {
            setAuthContent("login");
          }}
        >
          Page de connexion
        </Button>
        <Button type="submit">S'inscrire</Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default Register;
