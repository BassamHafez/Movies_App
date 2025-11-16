"use client";
import { DropDownWrapper } from "@/shared/components";
import { useSelector, useSignOut, useRouter, useState } from "@/shared/hooks";
import { avatar } from "@/shared/images";
import { Image } from "@/shared/lib";
import { LogOut, Settings, UserRoundPen } from "lucide-react";

const ProfileAvatar = () => {
  const [isDropdownClosed, setIsDropdownClosed] = useState(false);
  const { token, info } = useSelector((state) => state.userInfo);
  const { logoutModal, openModal } = useSignOut();
  const router = useRouter();

  const handleNavigation = (url) => {
    setIsDropdownClosed(true);
    router.push(url);
  };

  const links = [
    {
      title: "My Profile",
      icon: UserRoundPen,
      url: `/profile/${info?.name}`,
    },
    {
      title: "Account Setting",
      icon: Settings,
      url: "account-setting",
    },
  ];

  if (!token) return null;
  return (
    <>
      <DropDownWrapper
        close={isDropdownClosed}
        onClose={() => setIsDropdownClosed(false)}
        position="end-10 xxs:end-0"
        trigger={
          <button>
            <div className="avatar">
              <div className="relative ring-blue-900 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <Image src={avatar} alt="avatar" fill sizes="10vw" priority />
              </div>
            </div>
          </button>
        }
      >
        <div className="min-w-52 px-2">
          <div className="flex flex-col py-1">
            <header className="flex items-center gap-3 py-2">
              <div className="avatar">
                <div className="relative ring-blue-900 ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                  <Image src={avatar} alt="avatar" fill sizes="10vw" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-extrabold">{info.name}</h1>
                <span className="text-xs text-gray-400">{info.email}</span>
              </div>
            </header>
            <div className="divider my-1"></div>
            <div className="flex flex-col text-sm">
              {links?.map((item, index) => (
                <div
                  key={`${item.title}_${index}`}
                  onClick={() => handleNavigation(item.url)}
                  className="flex items-center justify-between p-2 rounded hover:bg-base-200 duration-300 cursor-pointer"
                >
                  <span>{item.title}</span>{" "}
                  <span>
                    <item.icon className="size-4 text-main" />
                  </span>
                </div>
              ))}
              <button
                onClick={openModal}
                className="flex items-center justify-between p-2 rounded hover:bg-base-200 duration-300 px-2"
              >
                <span>Logout</span>{" "}
                <span>
                  <LogOut className="size-4 text-main" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </DropDownWrapper>

      {logoutModal}
    </>
  );
};

export default ProfileAvatar;
