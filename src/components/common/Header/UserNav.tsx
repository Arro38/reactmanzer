import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { resetToast, setSuccessMessage } from "@/redux/features/toastSlice";
import { RootState, thunkDispatch } from "@/redux/store";
import { logoutUser } from "@/services/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserNav() {
  const user = useSelector((state: RootState) => state.users.user);
  const token = useSelector((state: RootState) => state.users.token);
  const dispatch = thunkDispatch;

  const logout = () => {
    dispatch(logoutUser(token));
    dispatch(resetToast());
    dispatch(
      setSuccessMessage({
        title: "Déconnexion réussie",
        message: "Vous êtes maintenant déconnecté",
      })
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8  transition-all hover:scale-105">
            <AvatarImage src="/avatars/01.png" alt="photo profil" />
            <AvatarFallback className="bg-slate-300">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-100" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              className="hover:opacity-80 hover:underline transition-all"
              to={`/profile`}
            >
              Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a
            className="hover:opacity-80 hover:underline transition-all cursor-pointer"
            onClick={logout}
          >
            Se déconnecter
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
