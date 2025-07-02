import { SearchField, SwapThemeBtn } from "@/shared/components";
import { AlignLeft } from "@/shared/icons";
import { avatar } from "@/shared/images";
import { Image, Link } from "@/shared/lib";
import NavLinks from "./NavLinks";
import { smallLogo } from "@/shared/images";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      style={{ backdropFilter: "blur(2px)" }}
      className="navbar bg-base-100/70 shadow-md shadow-white/5 fixed z-50 px-3"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignLeft className="size-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="w-15 p-1">
          <Image src={smallLogo} alt="zixes logo" priority />
        </Link>
        <div className="hidden lg:flex ms-8">
          <ul className="flex gap-8 px-1">
            <NavLinks />
          </ul>
        </div>
      </div>

      <div className="navbar-end gap-6">
        <SearchField />
        <Bell/>
        <button className="btn bg-main btn-sm border-none text-white rounded-lg min-w-24 hover:bg-white hover:text-main transition-all duration-500">
          Sign In
        </button>
        <div className="avatar">
          <div className="relative ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <Image src={avatar} alt="avatar" fill sizes="10vw" priority />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
