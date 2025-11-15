import { googleIcon } from "@/shared/images";
import { Image, Link } from "@/shared/lib";

const LoginMethods = ({ signup = false }) => {
  const type = signup ? "Sign Up" : "Login";

  return (
    <div className="flex flex-col gap-6 items-center">
      <button
        type="button"
        className="flex gap-2  btn bg-[#064ca8] text-white border-[#005fd8] min-w-1/2 rounded hover:bg-[#0d61cf] hover:gap-4 transition-all duration-300"
      >
        <svg
          aria-label="Facebook logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="size-6"
        >
          <path
            fill="white"
            d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
          ></path>
        </svg>
        {type} with Facebook
      </button>

      <button
        type="button"
        className="flex gap-2 btn bg-white text-black border-[#e5e5e5] min-w-1/2 rounded hover:gap-4 hover:bg-zinc-200 transition-all duration-300"
      >
        <Image
          src={googleIcon}
          alt="login with google"
          width={20}
          height={20}
        />
        <span>{type} with Google</span>
      </button>

      <p className="text-sm text-gray-500">
        Already an account?{" "}
        <Link
          href={signup ? "/auth" : "/auth/register"}
          className="text-blue-400 hover:underline"
        >
          {signup?"login":"register"}
        </Link>
      </p>
    </div>
  );
};

export default LoginMethods;
