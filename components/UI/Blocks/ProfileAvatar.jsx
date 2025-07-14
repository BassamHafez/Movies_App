"use client";
import { useSelector } from "@/shared/hooks";
import { avatar } from "@/shared/images";
import { Image } from "@/shared/lib";
import { UserRound } from "lucide-react";

const ProfileAvatar = () => {
  const userInfo = useSelector((state) => state.userInfo.info);

  return (
    <>
      {userInfo && userInfo.email === "bassamhafez790@gmail.com" ? (
        <div className="avatar">
          <div className="relative ring-blue-900 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <Image src={avatar} alt="avatar" fill sizes="10vw" priority />
          </div>
        </div>
      ) : (
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral w-10 rounded-full ring-blue-900 ring-offset-base-100 ring-2 ring-offset-2">
            <span>
              {userInfo ? (
                userInfo.name.charAt(0)
              ) : (
                <UserRound className="size-6" />
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileAvatar;
