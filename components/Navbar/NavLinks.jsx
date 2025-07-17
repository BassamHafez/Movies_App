"use client";
import {
  usePathname,
  useEffect,
  useState,
  useSelector,
  useMemo,
} from "@/shared/hooks";
import { Link, motion, AnimatePresence } from "@/shared/lib";

const privatePages = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tv" },
];

const publicPages = [
  { name: "Events", path: "events" },
  { name: "Tickets", path: "tickets" },
  { name: "Methods", path: "methods" },
  { name: "Packages", path: "packages" },
];

const NavLinks = ({ dropdownMenu }) => {
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const token = useSelector((state) => state.userInfo.token) || "";

  useEffect(() => {
    if (token) return;

    const updateHash = () => {
      if (window.location.pathname === "/") {
        setHash(window.location.hash);
      } else {
        setHash("");
      }
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const navLinks = useMemo(() => (token ? privatePages : publicPages), [token]);
  const handlePublicClick = (hash) => () => setHash(`#${hash}`);

  return (
    <ul className={`flex gap-6 relative ${dropdownMenu ? "flex-col" : ""}`}>
      {navLinks.map((page) => {
        const urlPath = token ? page.path : `/#${page.path}`;
        const isActive = token
          ? pathname === urlPath
          : hash === `#${page.path}`;

        return (
          <li key={page.name} className="relative text-lg">
            <Link
              href={urlPath}
              onClick={!token ? handlePublicClick(page.path) : undefined}
              className={`text-md font-semibold px-2 ${
                isActive ? "text-main" : ""
              }`}
            >
              {page.name}
              {isActive && !dropdownMenu && (
                <AnimatePresence>
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -inset-1 rounded-md bg-main/20 blur-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </AnimatePresence>
              )}
            </Link>
            {isActive && !dropdownMenu && (
              <AnimatePresence>
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-4 left-0 h-[2px] w-full bg-main rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              </AnimatePresence>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
