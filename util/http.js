"use server";
import axios from "axios";
const validFormMethods = ["post", "patch", "put"];

export const signFormsHandler = async ({ type, formData }) => {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL_ROUTE}auth/${type}`);
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_ROUTE}auth/${type}`,
      formData
    );
    return response?.data;
  } catch (error) {
    console.log("from http", error);

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Unknown error occurred";

    // Always throw plain error
    throw new Error(message);
  }
};

export const mainFormsHandlerTypeRaw = async ({
  token,
  type,
  formData,
  method = "get",
  params,
}) => {
  const headers = token
    ? { accept: "application/json", token }
    : {
        accept: "application/json",
        Authorization: `Bearer ${process.env.MOVIE_TOKEN}`,
      };

  const url = `${process.env.NEXT_PUBLIC_MOVIE_URL}${type}`;

  try {
    if (validFormMethods.includes(method)) {
      const response = await axios[method](url, formData, { headers });
      return response.data;
    }

    const response = await axios.get(url, { headers, params });
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Unknown error";

    throw new Error(message);
  }
};
