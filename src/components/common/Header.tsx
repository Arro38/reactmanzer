import { MainNav } from "./Header/MainNav";

function Header() {
  return (
    <div className=" flex-col flex bg-slate-100">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;
