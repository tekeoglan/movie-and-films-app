import axios from "axios";
import { TMDB_API } from "config/constants/endpoints";

const request = async (endPoint: string, options?: {}) => {
  try {
    const response = await axios.get(`${TMDB_API}${endPoint}`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        ...options,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default request;
