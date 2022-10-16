import React from "react";
import styles from "./ChartBar1.module.css";

type Props = {
  text?: string;
  color?: string;
  color1?: string;
  color2?: string;
  percentage?: number;
  setpercent?: number;
};

function BlockUi1(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.column1}
          style={{ backgroundColor: props.color }}
        >
          <span className={styles.item}>{props.text}</span>
        </div>
        <div className={styles.column2}>
          <div
            className={styles.item1}
            style={{ backgroundColor: props.color1, width: props.setpercent }}
          >
            <span className={styles.text}>{props.percentage}%</span>
          </div>
        </div>
        <div
          className={styles.column3}
          style={{ backgroundColor: props.color2 }}
        ></div>
      </div>
    </>
  );
}

export default BlockUi1;
