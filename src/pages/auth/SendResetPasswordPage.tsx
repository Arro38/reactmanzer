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
import { store } from "@/redux/store";
import { sendResetPasswordEmail } from "@/services/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SendResetPasswordPage() {
  const dispatch = useDispatch();
  const [emailSend, setEmailSend] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email: string = form.email.value;
    store.dispatch(sendResetPasswordEmail(email));
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
          {emailSend ? (
            <p>
              Un email vous a été envoyé pour récupérer votre compte si il
              existe.
            </p>
          ) : (
            <Button type="submit">Envoyer</Button>
          )}
        </DialogFooter>
      </form>
    </>
  );
}

export default SendResetPasswordPage;
