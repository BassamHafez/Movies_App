"use client";
import { Form, Formik, object, toast } from "@/shared/lib";
import {
  useDispatch,
  useMutation,
  useValidation,
  useRouter,
} from "@/shared/hooks";
import { signFormsHandler } from "@/util/http";
import { userActions } from "@/store/userInfo-slice";

const FormWrapper = ({ children, classes = "", formType = "signin" }) => {
  const router = useRouter();
  const {
    emailValidation,
    passwordValidation,
    phoneValidation,
    confirmPasswordValidation,
    nameValidation,
  } = useValidation();
  const dispatch = useDispatch();
  const isLoginForm = formType === "signin";

  const saveDataIntoRedux = (data) => {
    dispatch(userActions.setUserInfo(data?.user));
    dispatch(userActions.setToken(data?.token));
  };

  const { mutate } = useMutation({
    mutationFn: signFormsHandler,
  });

  const LoginInitialValues = {
    email: "",
    password: "",
  };

  const loginValidationSchema = object({
    email: emailValidation,
    password: passwordValidation,
  });

  const registerInitialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const registerValidationSchema = object({
    name: nameValidation,
    email: emailValidation,
    password: passwordValidation,
    rePassword: confirmPasswordValidation,
    phone: phoneValidation,
  });

  const initialValues = isLoginForm
    ? LoginInitialValues
    : registerInitialValues;
  const validationSchema = isLoginForm
    ? loginValidationSchema
    : registerValidationSchema;

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    try {
      toast.promise(
        new Promise((resolve, reject) => {
          mutate(
            {
              formData: values,
              type: formType,
            },
            {
              onSuccess: (data) => {
                console.log(data);
                if (data?.message === "success") {
                  resetForm();
                  if (isLoginForm) saveDataIntoRedux(data);
                  resolve();
                  router.push(isLoginForm ? "/" : "/auth");
                } else {
                  reject("Invalid response from server");
                }
              },
              onError: (error) => {
                console.log(error);
                if (
                  error.message === "Incorrect email or password" ||
                  error.message === "Account Already Exists"
                ) {
                  reject(error.message);
                } else {
                  reject("Something went wrong, try again later!");
                }
              },
            }
          );
        }),
        {
          pending: "Processing Data ...",
          success: isLoginForm
            ? "Logged Successfully"
            : "Registered Successfully",
          error: {
            render({ data }) {
              return data;
            },
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={classes}>{children}</Form>
    </Formik>
  );
};

export default FormWrapper;
