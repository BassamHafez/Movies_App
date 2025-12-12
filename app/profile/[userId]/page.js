"use client";
import { motion } from "@/shared/lib";
import { Image } from "@/shared/lib";
import { useSelector } from "@/shared/hooks";
import { avatar } from "@/shared/images";
import { Crown, RefreshCcw, ArrowUpCircle } from "lucide-react";

const UserProfile = () => {
  const { info } = useSelector((state) => state.userInfo);

  // simulate subscription
  const userPlan = info?.plan || {
    name: "Premium Gold",
    price: 29,
    renewal: "2025-01-15",
    quality: "4K HDR + Dolby Atmos",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-20 p-8 rounded-2xl bg-base-100 shadow-[0px_2px_15px_rgba(255,255,255,0.12)]"
    >
      {/* Header */}
      <div className="flex items-center gap-5 border-b border-white/10 pb-6">
        <div className="avatar">
          <div className="relative w-20 rounded-full ring-2 ring-main ring-offset-2">
            <Image src={avatar} alt="Avatar" fill sizes="10vw" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            {info?.name}
          </h1>
          <p className="text-sm text-gray-400  break-all">{info?.email}</p>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Crown className="size-5 text-main" />
          Your Subscription
        </h2>

        <div className="mt-4 bg-base-200/30 p-6 rounded-xl border border-white/10 shadow-inner">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-main">{userPlan.name}</h3>
              <p className="text-sm text-gray-400">
                {userPlan.quality}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Renewal date: <span className="text-white">{userPlan.renewal}</span>
              </p>
            </div>

            <span className="text-xl font-semibold">${userPlan.price}/month</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="btn flex-1 rounded-lg bg-main text-black font-bold hover:bg-main/80">
              <RefreshCcw className="size-4" /> Renew
            </button>

            <button className="btn flex-1 rounded-lg border border-main text-main hover:bg-main hover:text-black transition-all duration-300">
              <ArrowUpCircle className="size-4" /> Upgrade
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
