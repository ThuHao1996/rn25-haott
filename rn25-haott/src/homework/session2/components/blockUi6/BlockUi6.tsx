import React from "react";
import styles from "./BlockUi6.module.css";

type Props = {
  name?: string;
  text?: string;
  size?: string;
  price?: string;
  price1?: string;
  icon?: string;
  text1?: string;
};

function BlockUi6(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.text}>{props.text}</div>
        <div className={styles.size}>{props.size}</div>
        <div className={styles.price__item}>
          <div className={styles.price}>{props.price}</div>
          <div className={styles.price1}>{props.price1}</div>
        </div>
        <button className={styles.btn}>
          <div className={props.icon}></div>
          <div>{props.text1}</div>
        </button>
      </div>
    </>
  );
}

export default BlockUi6;
