"use client";
import { notifications } from "@/logic/static";
import { DropDownWrapper } from "@/shared/components";
import { useSelector, useState } from "@/shared/hooks";
import { Bell } from "@/shared/icons";

const Notifications = () => {
  const [isAllread, setIsAllread] = useState(false);
  const token = useSelector((state) => state.userInfo.token);
  if (!token) return null;
  return (
    <DropDownWrapper
      position="-end-10 xs:end-0"
      trigger={
        <button>
          <div className="bg-base-300 shadow-lg p-1.5 rounded-lg flex justify-center items-center cursor-pointer group">
            <div className="indicator">
              <span className="indicator-item status status-error translate-y-[0.2px] rounded-full" />
              <Bell
                className="size-6 group-hover:rotate-20 duration-500"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </button>
      }
    >
      <div className="w-60 xs:w-80 sm:w-100">
        <div className="py-4">
          <div className="flex flex-wrap gap-2 items-center justify-between mb-4 px-4">
            <h2 className="font-bold text-lg">Notifications</h2>
            <button
              onClick={() => setIsAllread(true)}
              className="text-main ms-auto text-xs"
            >
              Mark All As Read
            </button>
          </div>
          <div className="no_scroll_bar h-74 overflow-y-auto overflow-x-hidden">
            {notifications.map((notif) => (
              <div
                key={notif._id}
                className="flex gap-4 items-start hover:bg-base-200 duration-200 mb-2 px-4 py-2 rounded-md"
              >
                <notif.icon
                  className={`size-9 flex-shrink-0 p-2 bg-base-200 rounded-lg ${
                    isAllread ? "text-green-500" : "text-red-500"
                  }`}
                />
                <div>
                  <p className="text-sm font-semibold leading-[100%]">
                    {notif.text}
                  </p>
                  <span className="text-[0.625rem] text-gray-400" dir="ltr">
                    {notif.time} ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropDownWrapper>
  );
};

export default Notifications;
