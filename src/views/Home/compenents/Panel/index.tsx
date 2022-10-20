import styles from "./Panel.module.css";

type Props = {
  header: string;
  images: string[];
};

const Panel = (props: Props): JSX.Element => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <a>{props.header}</a>
      </div>
      <div className={styles.container}>
        <div id={styles["part1"]}>
          <img src={props.images[0]} />
        </div>
        <div id={styles["part2"]}>
          <img src={props.images[1]} />
        </div>
        <div id={styles["part3"]}>
          <img src={props.images[2]} />
        </div>
        <div id={styles["part4"]}>
          <img src={props.images[3]} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
