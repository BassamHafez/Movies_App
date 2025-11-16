"use client";
import { useMutation, useSelector, useValidation } from "@/shared/hooks";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import { ErrorMessage, Field, Form, Formik, object, toast } from "@/shared/lib";
import { InputErrorMessage, MainBtn } from "@/shared/components";

const AccountSettingForm = () => {
  const token = useSelector((state) => state.userInfo.token);
  const { passwordValidation, confirmPasswordValidation } = useValidation();

  const { mutate, isPending } = useMutation({
    mutationFn: mainFormsHandlerTypeRaw,
  });

  const initialValues = {
    currentPassword: "",
    password: "",
    rePassword: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.promise(
      new Promise((resolve, reject) => {
        mutate(
          {
            formData: values,
            token: token,
            method: "put",
            type: `users/changeMyPassword`,
          },
          {
            onSuccess: (data) => {
              console.log(data);
              if (
                data?.status === "success" ||
                data?.message === "Password changed successfully"
              ) {
                resetForm();
                resolve();
              } else {
                reject();
              }
            },
            onError: (error) => {
              console.log(error);
              reject();
            },
          }
        );
      }),
      {
        pending: "saving data...",
        success: "Password Changed Successfully",
        error: "something went wrong please try again later!",
      }
    );
  };

  const validationSchema = object({
    currentPassword: passwordValidation,
    password: passwordValidation,
    rePassword: confirmPasswordValidation,
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="field">
          <Field
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            className="bg-base-100"
          />
          <ErrorMessage name="currentPassword" component={InputErrorMessage} />
        </div>

        <div className="field">
          <Field
            type="password"
            name="password"
            placeholder="New Password"
            className="bg-base-100"
          />
          <ErrorMessage name="password" component={InputErrorMessage} />
        </div>
        <div className="field">
          <Field
            type="password"
            name="rePassword"
            placeholder="Confirm Password"
            className="bg-base-100"
          />
          <ErrorMessage name="rePassword" component={InputErrorMessage} />
        </div>
        <div className="w-full text-end">
          <MainBtn disabled={isPending} type="submit">
            Save Changes
          </MainBtn>
        </div>
      </Form>
    </Formik>
  );
};

export default AccountSettingForm;
