import { NavBar } from "./NavBar";
import { TopBar } from "./TopBar";

export function Header() {
  return (
    <>
      <header className="w-full absolute z-20">
        {/* <TopBar /> */}
        <NavBar />
      </header>
    </>
  );
}
