import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import ResetPassword from "./ResetPasswordPage";

export function HomeAuth() {
  const [authContent, setAuthContent] = useState<
    "login" | "register" | "resetpassword"
  >("login");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer">
          Espace Professionnel
        </span>
      </DialogTrigger>
      {authContent === "login" && <Login setAuthContent={setAuthContent} />}
      {authContent === "register" && (
        <Register setAuthContent={setAuthContent} />
      )}
      {authContent === "resetpassword" && (
        <ResetPassword setAuthContent={setAuthContent} />
      )}
    </Dialog>
  );
}

export default HomeAuth;
