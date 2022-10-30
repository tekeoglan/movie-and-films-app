import styles from "./Panel.module.css";
import { TMDB_IMAGE_PATH } from "config/constants/endpoints";
import MovieGenres from "config/constants/movie-genres.json";

type PanelProps = {
  tag: string;
  data: any;
};

const numberTrunc = (n: number) => {
  let s = n.toString();
  if (s.length < 3) return;
  return s.slice(0, 3);
};

const Banner = ({ data, index }) => {
  return (
    <div id={styles[`part${index + 1}`]}>
      <img src={`${TMDB_IMAGE_PATH}${data[index]?.backdrop_path}`} />
      <div className={styles.imageProps}>
        <span className={styles.imageTitle}>{data[index]?.title}</span>
        <span className={styles.imageRate}>{`${numberTrunc(
          data[index]?.vote_average
        )}/10`}</span>
        <div className={styles.imageGenre}>
          {data[index]?.genre_ids.map((id: number, i: number) => {
            return (
              <span key={i} className={styles.genre}>
                {MovieGenres[id]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Panel = ({ tag, data }: PanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>{tag}</span>
      </div>
      <div className={styles.container}>
        <Banner data={data} index={0} />
        <Banner data={data} index={1} />
        <Banner data={data} index={2} />
        <Banner data={data} index={3} />
      </div>
    </div>
  );
};

export default Panel;
