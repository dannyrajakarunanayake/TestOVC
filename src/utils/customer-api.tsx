import axios, { AxiosInstance } from "axios";
import { AnyAction } from "redux";


class CustomerAPI {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        common: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    });
  }

  static getUser = async ():Promise<any> => {
    try {
      const url = `/users`
      const response = await axios.get(process.env.REACT_APP_API_URL + url);

      return response;

    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Unexpected error. Please try again");
    }
  };

  getPost = async (userId: string):Promise<any> => {
    try {
      const url = `/posts?userId=${1}`
      const response = await axios.get(process.env.REACT_APP_API_URL + url);

      return response;
     
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Unexpected error. Please try again");
    }
  };

  

}

export default CustomerAPI;
