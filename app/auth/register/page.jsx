import { MainTitle, SubmitBtn, TextField } from "@/shared/components";
import { FormWrapper } from "@/shared/providers";
import LoginMethods from "../LoginMethods";

const Register = () => {
  return (
    <>
      <MainTitle classes="mb-8">New Account</MainTitle>
      <FormWrapper formType="signup" classes="size-full">
        <div className="grid md:grid-cols-2 gap-3">
          <TextField
            type="text"
            name="name"
            placeholder="Full Name"
            classes="mb-3"
          />
          <TextField
            type="tel"
            name="phone"
            placeholder="Phone Number"
            classes="mb-3"
          />
        </div>

        <TextField
          type="email"
          name="email"
          placeholder="Email"
          classes="mb-3"
        />
        <div className="grid md:grid-cols-2 gap-3">
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            classes="mb-3"
          />
          <TextField
            type="password"
            name="rePassword"
            placeholder="Confirm Password"
            classes="mb-3"
          />
        </div>

        <div className="flex justify-center items-center mt-6">
          <SubmitBtn>Register</SubmitBtn>
        </div>
        <div className="divider">OR</div>

        <LoginMethods signup />
      </FormWrapper>
    </>
  );
};

export default Register;
