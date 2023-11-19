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

function ResetPassword({
  setAuthContent,
}: {
  setAuthContent: React.Dispatch<
    React.SetStateAction<"login" | "register" | "resetpassword">
  >;
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Retrouver son mot de passe</DialogTitle>
        <DialogDescription>
          Recevez un lien par mail pour récupérer votre compte.
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
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => {
              setAuthContent("login");
            }}
          >
            Page de connexion
          </Button>
          <Button type="submit">Envoyer</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default ResetPassword;
