import Header from "compenents/Header";
import Footer from "compenents/Footer";
import Panel from "./compenents/Panel";
import useFetchData from "hooks/useFetchData";

const Home = () => {
  const [movieState] = useFetchData("/trending/movie/day");
  const [showState] = useFetchData("/trending/tv/day");
  return (
    <>
      <Header />
      <main>
        {movieState.isFetching ? (
          <h5>Trending Films</h5>
        ) : (
          <Panel tag={"Trending Films"} data={movieState.data.results} />
        )}
        {showState.isFetching ? (
          <h5>Trending Shows</h5>
        ) : (
          <Panel tag={"Trending Shows"} data={showState.data.results} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
