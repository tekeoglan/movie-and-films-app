import Content from "views/Content";
import axiosRequest from "utils/axiosRequest";

// This is for preventing the query paramater dissappearing when
// page got refreshed.
export async function getServerSideProps(context) {
  const { pid } = context.query;

  const tvData = await axiosRequest(`/tv/${pid}`);
  const videoData = await axiosRequest(`/tv/${pid}/videos`);
  const reviewsData = await axiosRequest(`/tv/${pid}/reviews`);
  const similarData = await axiosRequest(`/tv/${pid}/similar`);

  return {
    props: {
      tvState: tvData,
      videoState: videoData,
      reviewsState: reviewsData,
      similarState: similarData,
    },
  };
}

const TvPage = ({ tvState, videoState, reviewsState, similarState }) => {
  return tvState && videoState ? (
    <Content
      kind={"tv"}
      data={tvState}
      videos={videoState.results}
      reviews={reviewsState?.results}
      similars={similarState?.results}
    />
  ) : (
    <h2>Error</h2>
  );
};

export default TvPage;
