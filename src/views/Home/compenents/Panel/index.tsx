import styles from "./Panel.module.css";
import { TMDB_IMAGE_PATH } from "config/constants/endpoints";
import Genres from "config/constants/genres.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { numberTrunc } from "utils";
import Image from "next/image";

type PanelProps = {
  tag: string;
  data: any;
};

const Cover = ({ data, index }) => {
  const router = useRouter();

  const [coverTitle] = useState(
    data[index]?.media_type === "tv" ? data[index]?.name : data[index]?.title
  );

  return (
    <div id={styles[`part${index + 1}`]} className={styles.part}>
      <Image
        className={styles.nextImage}
        src={`${TMDB_IMAGE_PATH}${data[index]?.backdrop_path}`}
        title={coverTitle}
        layout="fill"
        objectFit="cover"
        onClick={() => {
          router.push(`/${data[index]?.media_type}/${data[index]?.id}`);
        }}
      />
      <div className={styles.imageProps}>
        <span className={styles.imageTitle}>{coverTitle}</span>
        <span className={styles.imageRate}>
          {numberTrunc(data[index]?.vote_average)}
        </span>
        <div className={styles.imageGenre}>
          {data[index]?.genre_ids.map((id: number, i: number) => {
            return (
              <span key={i} className={styles.genre}>
                {Genres[id]}
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
        <Cover data={data} index={0} />
        <Cover data={data} index={1} />
        <Cover data={data} index={2} />
        <Cover data={data} index={3} />
      </div>
    </div>
  );
};

export default Panel;
