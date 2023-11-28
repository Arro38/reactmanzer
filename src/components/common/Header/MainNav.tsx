import { cn } from "@/lib/utils";
import logoLight from "@/assets/images/logoLight.png";
import HomeAuthPage from "@/pages/auth/HomeAuthPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserNav } from "./UserNav";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const isLogged = useSelector((state: any) => state.users.isLogged);
  return (
    <>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        {...props}
      >
        <Link to={`/`}>
          <img
            src={logoLight}
            className="h-20 object-cover transition-all hover:scale-105"
          />
        </Link>
        <Link
          to={`/`}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Accueil
        </Link>
        {isLogged && (
          <>
            <Link
              to={`/meals`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Mes Repas
            </Link>
            <Link
              to={`/meals/create`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Créer un Repas
            </Link>
          </>
        )}
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        {isLogged ? <UserNav /> : <HomeAuthPage />}
      </div>
    </>
  );
}
