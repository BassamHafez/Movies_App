"use client";
import { string, ref, number, object, date, array } from "@/shared/lib";
import { useMemo } from "@/shared/hooks";
const reqText = "Field is Required";

const useValidation = () => {
  //general
  const mainReqValidation = useMemo(() => string().required("fieldReq"), []);

  //user data
  const nameValidation = useMemo(
    () =>
      string()
        .min(3, "Name should be at min 3 char")
        .max(20, "Name should be at max 20 char")
        .required(reqText),
    []
  );

  const phoneValidation = useMemo(
    () =>
      string()
        .matches(/^05\d{8}$/, "Invalid Phone Number")
        .required(reqText),
    []
  );

  const emailValidation = useMemo(
    () =>
      string()
        .email("Invalid Email Address")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid Email Address"
        )
        .required(reqText),
    []
  );

  const passwordValidation = useMemo(
    () =>
      string()
        .min(5, "Minimum 5 characters")
        .required(reqText)
        .matches(/[A-Z]+/, "Must contain at least one uppercase character")
        .matches(/[a-z]+/, "Must contain at least one lowercase character")
        .matches(/[0-9]+/, "Must contain at least one number"),
    []
  );

  const confirmPasswordValidation = useMemo(
    () =>
      string()
        .oneOf([ref("password"), null], "the password doesn't not match")
        .required(reqText),
    []
  );

  //date
  const dateValidation = useMemo(() => date().required(reqText), []);

  //select options
  const selectOptionValidationTypeNumber = useMemo(
    () =>
      object().shape({
        label: string(),
        value: number(),
      }),
    []
  );

  const selectOptionValidationTypeString = useMemo(
    () =>
      object().shape({
        label: string(),
        value: string(),
      }),
    []
  );

  const arrOfOptionsValidation = useMemo(
    () =>
      array().of(
        object().shape({
          label: string().required("labelReq"),
          value: string().required("valueReq"),
        })
      ),
    []
  );

  return {
    mainReqValidation,
    phoneValidation,
    passwordValidation,
    confirmPasswordValidation,
    emailValidation,
    nameValidation,
    selectOptionValidationTypeNumber,
    selectOptionValidationTypeString,
    dateValidation,
    arrOfOptionsValidation,
  };
};

export default useValidation;
