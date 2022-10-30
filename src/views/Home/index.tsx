import { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_API } from "config/constants/endpoints";
import Header from "compenents/Header";
import Panel from "./compenents/Panel";

const Home = () => {
  const [filmProps, setFilmProps] = useState<[] | null>(null);

  const fetcthMovie = async () => {
    try {
      const response = await axios.get(`${TMDB_API}/trending/movie/day`, {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      });
      let data = response.data.results;
      setFilmProps((prev) => {
        return { ...prev, ...data };
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
      <main>
        {filmProps ? (
          <Panel tag={"Trending Films"} data={filmProps} />
        ) : (
          <h5>Trending Films</h5>
        )}
      </main>
    </>
  );
};

export default Home;
