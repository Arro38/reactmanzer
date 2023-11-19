import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

export function HomeAuth() {
  const [authContent, setAuthContent] = useState<
    "login" | "register" | "resetpassword"
  >("login");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer hover:opacity-80">
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
