import React from "react";
import styles from "./BlockUi7.module.css";

type Props = {
  name?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  number?: string;
  price?: string;
  price1?: string;
  text?: string;
  icon?: string;
  icon1?: string;
  text1?: string;
  bgColor?: string;
  bgColor1?: string;
  widthColor: number;
  text2?: string;
  img: string;
};

function BlockUi7(props: Props) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>{props.name}</div>
        <p className={styles.name}>{props.name1}</p>
        <u className={styles.name1}>{props.name3}</u>
      </div>
      <div className={styles.container}>
        <img className={styles.img} src={props.img} alt="" />
        <div className={styles.number}>{props.number}</div>
        <div className={styles.name2}>{props.name2}</div>
        <div className={styles.price}>
          <div className={styles.price1}>{props.price}</div>
          <div className={styles.price2}>{props.price1}</div>
          <div className={styles.text}>{props.text}</div>
        </div>
        <div className={styles.text1}>{props.text1}</div>
        <div className={styles.icon}>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon2} ${props.icon1}`}></div>
        </div>
        <div className={styles.item}>
          <div
            style={{ backgroundColor: props.bgColor, width: props.widthColor }}
          ></div>
          <div
            className={styles.item2}
            style={{ backgroundColor: props.bgColor1 }}
          ></div>
        </div>
        <div className={styles.text2}>{props.text2}</div>
      </div>
    </>
  );
}

export default BlockUi7;
