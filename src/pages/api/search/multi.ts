import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { TMDB_API } from "config/constants/endpoints";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { param } = req.query;
  try {
    const response = await axios.get(`${TMDB_API}/search/multi/`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: param,
      },
    });
    console.log("response data:", response.data);
    res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: null,
    });
  }
}
