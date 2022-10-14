import React from "react";
import styles from "./ChartColumn.module.css";
import "./ChartColumn.css";

type Props = {
  text?: string;
  total?: number;
};

function ChartColumn(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.heading}>{props.text}</h1>
          <p className={styles.total}>{props.total}</p>
        </div>
        <div className={styles.column}>
          <div className={`${styles.column__item1} ${styles.column1}`}>
            <div className={styles.name}>MON</div>
          </div>
          <div className={`${styles.column__item2} ${styles.column1}`}>
            <div className={styles.name}>TUE</div>
          </div>
          <div className={`${styles.column__item3} ${styles.column1}`}>
            <div className={styles.name}>WED</div>
          </div>
          <div className={`${styles.column__item4} ${styles.column1}`}>
            <div className={styles.name}>THU</div>
          </div>
          <div className={`${styles.column__item5} ${styles.column1}`}>
            <div className={styles.name}>FRI</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartColumn;
