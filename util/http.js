"use server";

import axios from "axios";
const validFormMethods = ["post", "patch", "put"];

export const signFormsHandler = async ({ type, formData }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_ROUTE}auth/${type}`,
      formData
    );
    return response?.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    }
    throw error.message;
  }
};

export const mainFormsHandlerTypeRaw = async ({
  type,
  formData,
  method,
  params,
}) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_TOKEN}`,
  };

  const url = `${process.env.NEXT_PUBLIC_MOVIE_URL}${type}`;
  console.log(url);
  try {
    let response = null;
    if (validFormMethods.includes(method)) {
      response = await axios[method](url, formData, {
        headers,
      });
    } else {
      response = await axios.get(url, {
        headers,
        params,
      });
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const mainFormsHandlerTypeFormData = async ({
//   type,
//   formData,
//   method,
//   token,
//   isLimited,
// }) => {
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "multipart/form-data",
//   };
//   const myUrl = `${baseServerUrl}${type}`;

//   try {
//     let response = null;
//     if (validFormMethods.includes(method)) {
//       response = await axios[method](myUrl, formData, {
//         headers,
//       });
//     } else {
//       if (!token) {
//         console.error("Unauthorized");
//         return null;
//       }
//       response = await axios.get(myUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: isLimited ? { limit: Infinity } : undefined,
//       });
//     }
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const mainDeleteFunHandler = async ({ id, token, type }) => {
//   try {
//     const response = await axios.delete(
//       `${import.meta.env.VITE_Base_API_URL}${type}/${id}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const mainEmptyBodyFun = async ({ token, type, method }) => {
//   try {
//     const response = await axios[method](
//       `${baseServerUrl}${type}`,
//       {},
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const getPublicData = async ({ type }) => {
//   try {
//     const response = await axios.get(`${baseServerUrl}${type}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
