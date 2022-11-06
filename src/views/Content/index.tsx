import Footer from "compenents/Footer";
import Header from "compenents/Header";
import styles from "./Content.module.css";
import { TMDB_IMAGE_PATH, YT_WATCH_PATH } from "config/constants/endpoints";

type ContentProps = {
  kind: string;
  data: any;
  videos: any;
};

const Content = ({ kind, data, videos }: ContentProps) => {
  const propsStyle = {
    backgroundImage: `url(${TMDB_IMAGE_PATH}${data?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#1b263b",
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className={styles.contentProps} style={propsStyle}>
          <div id={styles["part1"]} className={styles.part}>
            <img src={`${TMDB_IMAGE_PATH}${data?.poster_path}`} />
          </div>
          <div id={styles["part2"]} className={styles.part}>
            <iframe
              width="100%"
              height="100%"
              src={`${YT_WATCH_PATH}${videos[0]?.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div id={styles["part3"]} className={styles.part}></div>
          <div id={styles["part4"]} className={styles.part}></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Content;
