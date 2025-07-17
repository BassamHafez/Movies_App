"use client";
import { packagesData } from "@/logic/static";
import { Check } from "@/shared/icons";
import { motion } from "@/shared/lib";

const Packages = () => {
  return (
    <div className="grid xl:grid-cols-3 gap-6 justify-center my-8">
      {packagesData.map((pack, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          key={pack._id}
          className={`card w-96 rounded-xl min-h-80 bg-base-100 shadow-[0px_2px_10px_rgba(255,255,255,0.5)] ${
            index === 1 ? "shadow-main/60" : " xl:scale-80 hover:scale-100"
          } xl:hover:shadow-main/50 transition-all duration-600`}
        >
          <div className="card-body">
            <span
              className={`badge badge-xs rounded py-2 text-white/80 ${
                index === 1 ? "" : "bg-main/50"
              }`}
            >
              {pack.type}
            </span>
            <div className="flex justify-between mt-4">
              <h2 className="text-3xl font-bold">{pack.name}</h2>
              <span className="text-xl">${pack.price}/month</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {pack.features.map((feature, index) => (
                <li
                  key={`${index}_${feature}`}
                  className="flex items-center gap-2"
                >
                  <Check className="size-5 text-success" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="btn rounded-md duration-300 btn-block shadow shadow-white/20 hover:bg-white hover:text-main">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Packages;
