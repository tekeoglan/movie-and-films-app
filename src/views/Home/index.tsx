import { useEffect, useState } from "react";
import Header from "compenents/Header";
import Panel from "./compenents/Panel";
import useFetchData from "hooks/useFetchData";

const Home = () => {
  const [state] = useFetchData("/trending/movie/day");
  return (
    <>
      <Header />
      <main>
        {state.isFetching ? (
          <h5>Trending Films</h5>
        ) : (
          <Panel tag={"Trending Films"} data={state.data.results} />
        )}
      </main>
    </>
  );
};

export default Home;
