import { cn } from "@/lib/utils";
import logoLight from "@/assets/images/logoLight.png";
import Login from "../Auth/Login";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <a
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <img
          src={logoLight}
          className="h-20 object-cover transition-all hover:scale-105"
        />
      </a>
      <a
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Accueil
      </a>

      <Login />

      <a
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Mes Repas
      </a>
    </nav>
  );
}
