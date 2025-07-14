"use client";
import { Form, Formik, object, toast } from "@/shared/lib";
import { useDispatch, useMutation, useValidation,useRouter } from "@/shared/hooks";
import { signFormsHandler } from "@/util/http";
import { userActions } from "@/store/userInfo-slice";

const FormWrapper = ({ children, classes, formType }) => {
  const router = useRouter();
  const { emailValidation, passwordValidation } = useValidation();
  const dispatch = useDispatch();

  const saveDataIntoRedux = (data) => {
    console.log(data)
    dispatch(userActions.setUserInfo(data?.user));
    dispatch(userActions.setToken(data?.token));
  };

  const { mutate } = useMutation({
    mutationFn: signFormsHandler,
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: emailValidation,
    password: passwordValidation,
  });

  const onSubmit = (values, { resetForm }) => {
    toast.promise(
      new Promise((resolve, reject) => {
        mutate(
          {
            formData: values,
            type: "signin",
          },
          {
            onSuccess: (data) => {
              if (data?.message === "success") {
                console.log(data);
                resetForm();
                saveDataIntoRedux(data);
                resolve();
                router.push("/");
              } else {
                reject("Invalid response from server");
              }
            },
            onError: (error) => {
              console.log(error);
              if (error.data?.message === "Incorrect email or password") {
                reject("Incorrect email or password");
              } else {
                reject("Something went wrong, try again later!");
              }
            },
          }
        );
      }),
      {
        pending: "Processing Data ...",
        success: "Logged Successfully",
        error: {
          render({ data }) {
            return data;
          },
        },
      }
    );
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
