import Header from "compenents/Header";
import Footer from "compenents/Footer";
import Panel from "./compenents/Panel";

const Home = ({ trendMoviesData, trendShowsData }) => {
  return (
    <>
      <Header />
      <main>
        {!trendMoviesData ? (
          <h5>Trending Films</h5>
        ) : (
          <Panel tag={"Trending Films"} data={trendMoviesData} />
        )}
        {!trendShowsData ? (
          <h5>Trending Shows</h5>
        ) : (
          <Panel tag={"Trending Shows"} data={trendShowsData} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
