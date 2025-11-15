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
  type,
  formData,
  method = "get",
  params,
  serverReq,
  revalidateTime = 3600,
  tags,
}) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_TOKEN}`,
  };

  const url = `${
    serverReq ? process.env.MOVIE_URL : process.env.NEXT_PUBLIC_MOVIE_URL
  }${type}`;

  try {
    let response = null;
    if (validFormMethods.includes(method)) {
      response = await axios[method](url, formData, {
        headers,
      });
    } else {
      //get
      if (serverReq) {
        response = await fetch(`${url}${params}`, {
          headers,
          next: { revalidate: revalidateTime, tags: [tags ?? type] },
        });
        return response.json();
      } else {
        response = await axios.get(url, {
          headers,
          params,
        });
        return response.data;
      }
    }
  } catch (error) {
    console.error("HTTP ERROR:", error);

    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Unknown error occurred";

    throw new Error(message); // 👉 Always throw plain Error
  }
};
