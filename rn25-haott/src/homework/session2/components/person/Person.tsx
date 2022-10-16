import React from "react";
import styles from "./Person.module.css";

type Props = {
  name?: string;
  job?: string;
  text?: string;
  date?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6: string;
  text7?: string;
  icon?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  number?: number;
  email?: string;
  emailTo?: string;
  phone?: string;
  bgColor1?: string;
  bgColor2?: string;
};

function Person(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>{props.name}</h1>
        <p className={styles.job}>{props.job}</p>
        <div>
          <div className={styles.item}>
            <div className={styles.item__name}>
              <p className={props.icon}></p>
              <p className={styles.text}>{props.text1}</p>
            </div>

            <div className={styles.text1}>{props.date}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__name}>
              <p className={props.icon1}></p>
              <p className={styles.text}>{props.text2}</p>
            </div>
            <div className={styles.text1}>{props.text3}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__name}>
              <p className={props.icon2}></p>
              <p className={styles.text}>{props.text4}</p>
            </div>

            <div className={styles.text1}>{props.text5}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__name}>
              <p className={props.icon3}></p>
              <p className={styles.text}>{props.text6}</p>
            </div>

            <div className={styles.text1}>{props.text7}</div>
          </div>
        </div>
        <div
          className={styles.desc}
          style={{ backgroundColor: props.bgColor1 }}
        >
          <p className={styles.name}>{props.email}</p>
          <div className={styles.desc__item}>
            <p className={props.icon4}></p>
            <p className={styles.text}>{props.emailTo}</p>
          </div>
        </div>
        <div
          className={styles.desc}
          style={{ backgroundColor: props.bgColor2 }}
        >
          <p className={styles.name}>{props.phone}</p>
          <div className={styles.desc__item}>
            <p className={props.icon5}></p>
            <p className={styles.text}>{props.number}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;
