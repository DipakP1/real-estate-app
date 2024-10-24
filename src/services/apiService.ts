import { instance, instanceForFormdata } from "@/api/axios/CRMAxios";

export const getData = async (endpoint: any) => {
  try {
    let response = await instance.get(endpoint);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (
  endpoint: any,
  data: any,
  header = "application"
) => {
  try {
    let response;
    if (header === "formData") {
      response = await instanceForFormdata.post(endpoint, data);
    } else {
      response = await instance.post(endpoint, data);
    }

    console.log(data, "DATATA POST");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async (endpoint: any, data: any) => {
  try {
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const pathData = async (
  endpoint: any,
  data: any,
  header = "application"
) => {
  try {
    let response =
      header === "formData"
        ? await instanceForFormdata.patch(endpoint, data)
        : await instance.patch(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (endpoint: any) => {
  try {
  } catch (error) {}
};
