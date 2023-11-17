import { UserNav } from "./Header/UserNav";
import { MainNav } from "./Header/MainNav";

function Header() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b bg-slate-50">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
