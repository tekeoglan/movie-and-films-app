import Content from "views/Content";
import axiosRequest from "utils/axiosRequest";

export async function getServerSideProps(context) {
  const { pid } = context.query;

  const movieData = await axiosRequest(`/movie/${pid}`);
  const videoData = await axiosRequest(`/movie/${pid}/videos`);
  const reviewsData = await axiosRequest(`/movie/${pid}/reviews`);
  const similarData = await axiosRequest(`/movie/${pid}/similar`);

  return {
    props: {
      movieState: movieData,
      videoState: videoData,
      reviewsState: reviewsData,
      similarState: similarData,
    },
  };
}

const MoviePage = ({ movieState, videoState, reviewsState, similarState }) => {
  return movieState && videoState ? (
    <Content
      kind={"movie"}
      data={movieState}
      videos={videoState.results}
      reviews={reviewsState?.results}
      similars={similarState?.results}
    />
  ) : (
    <h2>Error</h2>
  );
};

export default MoviePage;
