import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAuthContent } from "@/redux/features/userSlice";
import { thunkDispatch } from "@/redux/store";
import { sendResetPasswordEmail } from "@/services/auth";
import { useState } from "react";

function SendResetPasswordPage() {
  const dispatch = thunkDispatch;
  const [emailSend, setEmailSend] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email: string = form.email.value;
    dispatch(sendResetPasswordEmail(email));
    setEmailSend(true);
    form.reset();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Retrouver son mot de passe</DialogTitle>
        <DialogDescription>
          Recevez un lien par mail pour récupérer votre compte.
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
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(setAuthContent("login"));
            }}
          >
            {" "}
            Se connecter{" "}
          </Button>
          {!emailSend && <Button type="submit">Envoyer</Button>}
        </DialogFooter>
      </form>
    </>
  );
}

export default SendResetPasswordPage;
