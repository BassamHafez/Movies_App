import { MainTitle, SubmitBtn, TextField } from "@/shared/components";
import { Link } from "@/shared/lib";
import { FormWrapper } from "@/shared/providers";
import LoginMethods from "./LoginMethods";

const Login = () => {
  return (
    <>
      <MainTitle classes="mb-8">Welcome Back</MainTitle>
      <FormWrapper formType="login" classes="size-full">
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          classes="mb-3"
        />

        <TextField
          type="password"
          name="password"
          placeholder="Password"
          classes="mb-3"
        />

        <div className="flex items-center justify-between mb-6 gap-2 flex-wrap">
          <label className="label text-sm hover:text-gray-200 duration-300">
            <input
              type="checkbox"
              className="checkbox rounded-md checkbox-sm"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:scale-102 hover:text-gray-200 duration-300"
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex justify-center items-center mt-6">
          <SubmitBtn>Sign In</SubmitBtn>
        </div>
        <div className="divider">OR</div>

        <LoginMethods />
      </FormWrapper>
    </>
  );
};

export default Login;
