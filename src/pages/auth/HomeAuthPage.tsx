import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import ResetPassword from "./ResetPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loading from "@/components/common/Loading";
import { AuthContent } from "@/models/AuthContent";
import { setAuthContent } from "@/redux/features/userSlice";
import { X } from "lucide-react";

export function HomeAuth() {
  const authContent = useSelector(
    (state: RootState) => state.users.authContent
  );
  const loading = useSelector((state: RootState) => state.users.loading);
  const dispatch = useDispatch();
  return (
    <>
      {!loading && (
        <Dialog open={authContent !== "none"}>
          <DialogTrigger
            asChild
            onClick={() => {
              dispatch(setAuthContent("login"));
            }}
          >
            <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer">
              Espace Professionnel
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {authContent === "login" && <Login />}
            {authContent === "register" && <Register />}
            {authContent === "resetpassword" && <ResetPassword />}
            {authContent === "loading" && <Loading />}

            <DialogClose
              onClick={() => {
                dispatch(setAuthContent("none"));
              }}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default HomeAuth;
