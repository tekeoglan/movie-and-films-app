import { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_API, TMDB_IMAGE_PATH } from "../../config/constants/endpoints";
import Header from "../../compenents/Header";
import Panel from "./compenents/Panel";

type Props = {
  header: string;
  images: string[];
};

const Home = () => {
  const [filmProps, setFilmProps] = useState<Props | null>({
    header: "Trending Films",
    images: [],
  });

  const fetcthMovie = async () => {
    try {
      const response = await axios.get(`${TMDB_API}/trending/movie/day`, {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      });
      let newImages = [].fill("");
      let path = "";
      for (let i = 0; i < 4; i++) {
        path = response.data.results[i].poster_path;
        newImages[i] = `${TMDB_IMAGE_PATH}${path}`;
      }
      setFilmProps((prev) => {
        return { ...prev, images: newImages };
      });
      console.log("response:", response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetcthMovie();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Header />
      <Panel {...filmProps} />
    </>
  );
};

export default Home;
