import {
  LogoName,
  ProfileAvatar,
  SearchField,
  SignBtn,
} from "@/shared/components";
import { AlignLeft } from "@/shared/icons";
import { Link } from "@/shared/lib";
import { Bell } from "@/shared/icons";
import { NavWrapper } from "@/shared/providers";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <AlignLeft className="size-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLinks dropdownMenu />
              <div className="mt-4 md:hidden">
                <SignBtn  fullWidth/>
              </div>
            </ul>
          </div>
          <Link href="/">
            <LogoName />
          </Link>
          <div className="hidden lg:flex ms-8">
            <ul className="flex gap-8 px-1">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-4 md:gap-6 items-center">
          <div className="hidden lg:flex">
            <SearchField />
          </div>
          <div className="lg:hidden">
            <SearchField smallField />
          </div>
          <Bell />
          <div className="hidden md:block">
            <SignBtn />
          </div>

          <ProfileAvatar />
        </div>
      </NavWrapper>
    </>
  );
};

export default Navbar;
