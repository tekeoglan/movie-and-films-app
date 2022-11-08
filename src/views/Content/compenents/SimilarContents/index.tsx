import styles from "./SimilarContents.module.css";
import { useRouter } from "next/router";
import { TMDB_IMAGE_PATH } from "config/constants/endpoints";
import { numberTrunc } from "utils";

const Content = ({ kind, props }) => {
  const router = useRouter();
  return (
    <div className={styles.similarContent}>
      <img
        src={`${TMDB_IMAGE_PATH}${props?.poster_path}`}
        onClick={() => {
          router.push(`/${kind}/${props?.id}`);
        }}
        title={kind === "movie" ? props?.title : props?.name}
      />
      <a>{kind === "movie" ? props?.title : props?.name}</a>
      <span>{numberTrunc(props?.vote_average)}</span>
    </div>
  );
};

const SimilarContents = ({ spec, data }) => {
  return (
    <div className={styles.container}>
      <Content key={0} kind={spec} props={data[0]} />
      <Content key={1} kind={spec} props={data[1]} />
      <Content key={2} kind={spec} props={data[2]} />
      <Content key={3} kind={spec} props={data[3]} />
    </div>
  );
};

export default SimilarContents;
