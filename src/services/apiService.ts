import axiosInstance from "@/api/axios/CRMAxios";

export const getData = async (endpoint: any) => {
  try {
  } catch (error) {}
};

export const postData = async (endpoint: any, data: any) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const putData = async (endpoint: any, data: any) => {
  try {
  } catch (error) {}
};
export const pathData = async (endpoint: any, data: any) => {
  try {
  } catch (error) {}
};
export const deleteData = async (endpoint: any) => {
  try {
  } catch (error) {}
};
