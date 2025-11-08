"use client";
import {
  useState,
  useEffect,
  useIsSmallScreen,
  useDispatch,
  useSelector,
  usePathname,
  useSignOut,
} from "@/shared/hooks";
import { AlignRight, LogOut, Bolt } from "@/shared/icons";
import { motion, AnimatePresence, Link } from "@/shared/lib";
import { moviesSideBarPages, tvsSidebarPages } from "@/logic/static";
import { LogoName } from "@/shared/components";
import { filterSidebarActions } from "@/store/filterSidebar-slice";

const MotionDiv = motion.div;
const MotionSpan = motion.span;

const MainSideBar = () => {
  const isSmallScreen = useIsSmallScreen();
  const [isSmallSideBar, setIsSmallSideBar] = useState(isSmallScreen);
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.filterSidebar.type);
  const pathname = usePathname();
  const { logoutModal, openModal } = useSignOut();
  const sidebarPages =
    pathname === "/movies" ? moviesSideBarPages : tvsSidebarPages;

  useEffect(() => {
    if (isSmallScreen) {
      setIsSmallSideBar(true);
    }
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsSmallSideBar((prev) => !prev);
  };

  const setFilterType = (type) => {
    dispatch(filterSidebarActions.setFilterType(type));
  };

  return (
    <MotionDiv
      animate={{ width: isSmallSideBar ? "4.25rem" : "13.75rem" }}
      transition={{ duration: 0.3 }}
      className="min-h-[82vh] rounded-xl bg-base-200 shadow-md p-4 flex flex-col gap-6 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSmallSideBar && (
              <>
                <MotionDiv
                  key="title"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="text-xl font-bold whitespace-nowrap"
                >
                  <LogoName />
                </MotionDiv>
              </>
            )}
          </AnimatePresence>
        </div>

        <button className="btn btn-sm btn-ghost" onClick={toggleSidebar}>
          <AlignRight />
        </button>
      </div>

      {/* Links */}
      <div className="relative flex flex-col gap-y-3">
        {sidebarPages?.map((item, index) => {
          const isActive = filterType === item.param;

          return (
            <button
              key={`${item.title}_${index}`}
              className="relative cursor-pointer"
              onClick={() => setFilterType(item.param)}
            >
              {isActive && (
                <MotionDiv
                  layoutId="activeSidebarItem"
                  className="absolute inset-0 bg-main rounded-lg z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <div
                className={`relative z-10 flex items-center gap-3 p-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive ? "text-white" : "hover:bg-base-300"
                }`}
              >
                <item.icon className="size-5 shrink-0" strokeWidth={1.5} />
                {isSmallSideBar ? null : (
                  <MotionSpan
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-nowrap"
                  >
                    {item.title}
                  </MotionSpan>
                )}
              </div>
            </button>
          );
        })}
        <div className="divider" />
        <Link
          href="/account-setting"
          className="cursor-pointer relative flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-base-300 text-sm"
        >
          <Bolt className="size-5 shrink-0" strokeWidth={1.5} />
          {isSmallSideBar ? null : (
            <MotionSpan
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              Setting
            </MotionSpan>
          )}
        </Link>

        <button
          onClick={openModal}
          className="cursor-pointer relative flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-base-300 text-sm"
        >
          <LogOut className="size-5 shrink-0" strokeWidth={1.5} />
          {isSmallSideBar ? null : (
            <MotionSpan
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              Logout
            </MotionSpan>
          )}
        </button>
      </div>
      {logoutModal}
    </MotionDiv>
  );
};

export default MainSideBar;
