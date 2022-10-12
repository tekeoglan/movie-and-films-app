import { useEffect } from "react";
import axios from "axios";
import { TMDB_API, TMDB_IMAGE_PATH } from "../../config/constants/endpoints";
import Header from "../../compenents/Header";

const fetcthMovie = async () => {
  try {
    const response = await axios.get(`${TMDB_API}/search/multi`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: "lord",
      },
    });
    console.log("response:", response);
  } catch (err) {
    console.log(err);
  }
};

const Home = () => {
  useEffect(() => {
    // fetcthMovie();
  }, []);

  return <Header />;
};

export default Home;
