import { cn } from "@/lib/utils";
import { UserNav } from "./Header/UserNav";
import { Search } from "./Header/Search";
import { MainNav } from "./Header/MainNav";

function Header({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
