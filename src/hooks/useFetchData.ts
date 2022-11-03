import axios from "axios";
import { useEffect, useState } from "react";
import { TMDB_API } from "config/constants/endpoints";

type Result = {
  data: any | null;
  isFetching: boolean;
};

const useFetchData = (endPoint: string, params?: {}) => {
  const [result, setResult] = useState<Result>({
    data: null,
    isFetching: true,
  });
  const [url] = useState(endPoint);
  const [options] = useState(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${TMDB_API}${url}`, {
          params: {
            api_key: process.env.TMDB_API_KEY,
            ...options,
          },
        });
        setResult((prev) => {
          return { ...prev, data: response.data, isFetching: false };
        });
      } catch (err) {
        console.log(err);
        setResult((prev) => {
          return { ...prev, isFetching: false };
        });
      }
    };
    fetchData();
  }, []);

  return [result];
};

export default useFetchData;
