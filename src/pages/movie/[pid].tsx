import Content from "views/Content";
import useFetchData from "hooks/useFetchData";
import { useRouter } from "next/router";
import axiosRequest from "utils/axiosRequest";

// This is for preventing the query paramater dissappearing when
// page got refreshed.
export async function getServerSideProps(context) {
  const { pid } = context.query;

  const movieData = await axiosRequest(`/movie/${pid}`);
  const videoData = await axiosRequest(`/movie/${pid}/videos`);

  return {
    props: {
      movieState: movieData,
      videoState: videoData,
    },
  };
}

const MoviePage = ({ movieState, videoState }) => {
  return movieState && videoState ? (
    <Content kind={"movie"} data={movieState} videos={videoState.results} />
  ) : (
    <h2>Error</h2>
  );
};

export default MoviePage;
