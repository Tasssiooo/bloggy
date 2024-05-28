import Logo from "./components/logo"; 
import Nav from "./components/nav";
import NavMobile from "./components/nav-mobile";

export default function Header() {
  return (
    <header className="sticky md:top-7 left-0 w-full md:px-4 z-50">
      <div className="md:rounded-full shadow w-full max-w-7xl min-h-12 mx-auto">
        <div className="flex flex-row justify-between items-center py-4 md:py-3 px-5">
          <Logo />
          <Nav />
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
