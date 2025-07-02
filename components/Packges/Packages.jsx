import { packagesData } from "@/logic/static";
import { Check } from "@/shared/icons";

const Packages = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 justify-around">
      {packagesData.map((pack, index) => (
        <div
          key={pack._id}
          className="card w-96 bg-base-200 rounded-lg min-h-80 shadow-lg"
        >
          <div className="card-body">
            <span className="badge badge-xs badge-error rounded-2xl text-white/80">
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
              <button
                className={`btn rounded-2xl duration-300 btn-block ${
                  index === 1
                    ? "bg-white text-main hover:bg-main hover:text-white"
                    : "bg-main text-white hover:bg-white hover:text-main"
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
