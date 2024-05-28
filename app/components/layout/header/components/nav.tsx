import { NavLink } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function Nav() {
  return (
    <nav className="hidden md:flex flex-row items-center">
      <ul className="flex flex-row space-x-7">
        <li>
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold text-sm" : "text-sm"
            }
          >
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold text-sm" : "text-sm"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <Separator orientation="vertical" className="h-8 ml-7 mr-4" />
      <ul className="flex flex-row space-x-2">
        <li>
          <Button asChild variant="ghost" className="rounded-full">
            <NavLink to="/auth/signin">Sign in</NavLink>
          </Button>
        </li>
        <li>
          <Button asChild className="rounded-full">
            <NavLink to="/auth/signup">Sign up</NavLink>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
