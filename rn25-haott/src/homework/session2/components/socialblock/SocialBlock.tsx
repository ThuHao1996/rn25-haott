import React from "react";
import styles from "./SocialBlock.module.css";

type Props = {
  text?: string;
  number?: number;
  color?: string;
  bgColor?: string;
  icon?: string;
  unit?: string;
};

function SocialBlock(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.list}
          style={{ backgroundColor: props.bgColor, color: props.color }}
        >
          <i
            className={`${styles.icon} ${props.icon}`}
            style={{ backgroundColor: props.bgColor, color: props.color }}
          ></i>

          <div className={styles.desc}>
            <h1 className={styles.name} style={{ color: props.color }}>
              {props.text}
            </h1>
            <div className={styles.item}>
              <span className={styles.quantity} style={{ color: props.color }}>
                {props.number}
              </span>
              <div className={styles.unit} style={{ color: props.color }}>
                {props.unit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialBlock;
