import Home from "../views/Home";
import axiosRequest from "utils/axiosRequest";

export async function getServerSideProps(context) {
  const trendMoviesData = await axiosRequest(`/trending/movie/day`);
  const trendShowsData = await axiosRequest(`/trending/tv/day`);

  return {
    props: {
      trendMoviesState: trendMoviesData,
      trendShowsState: trendShowsData,
    },
  };
}

const IndexPage = ({ trendMoviesState, trendShowsState }) => {
  return (
    <Home
      trendMoviesData={trendMoviesState.results}
      trendShowsData={trendShowsState.results}
    />
  );
};

export default IndexPage;
