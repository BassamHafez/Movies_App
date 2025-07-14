"use client";
import { InputErrorMessage } from "@/shared/components";
import { ErrorMessage, Field } from "@/shared/lib";

const TextField = ({ type, name, placeholder, classes }) => {
  return (
    <div className="mb-6 relative">
      <Field
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        className={`text-sm w-full p-2 border border-gray-500 rounded focus:placeholder:text-xs placeholder:transition-all placeholder:duration-500 ${classes}`}
      />
      <ErrorMessage name={name} component={InputErrorMessage} />
    </div>
  );
};

export default TextField;
