"use client";
import { usePathname } from "@/shared/hooks";
import { Link, motion, AnimatePresence  } from "@/shared/lib";

const pages = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tv" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6 relative">
      {pages.map((page) => {
        const isActive = page.path === pathname;
        return (
          <li key={page.name} className="relative">
            <Link
              href={page.path}
              className={`text-md font-semibold px-2 ${
                isActive ? "text-main" : ""
              }`}
            >
              {page.name}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -inset-1 rounded-md bg-main/20 blur-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </Link>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-main rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
