import React from "react";
import styles from "./Session7.module.css";

type Props = {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  name7?: string;
  name8?: string;
  icon1?: string;
};

function Session7(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__name}>
            <div className={styles.text1}>{props.text1}</div>
            <input
              type="text"
              className={styles.input1}
              placeholder={props.text1}
            />
          </div>
          <div className={styles.header__name}>
            <div className={styles.text1}>{props.text2}</div>
            <input
              type="text"
              className={`${styles.input1} ${styles.input__name}`}
              placeholder={props.text3}
            />
          </div>
        </div>
        <div className={styles.text4}>{props.text4}</div>
        <div className={styles.content}>
          <div className={styles.text1}>{props.text5}</div>
          <input
            type="text"
            className={styles.input2}
            placeholder={props.text6}
          />
        </div>
        <div className={`${styles.content} ${styles.content__list}`}>
          <div className={styles.text1}>{props.text7}</div>
          <input
            type="text"
            className={styles.input2}
            placeholder={props.text8}
          />
        </div>
        <div className={styles.content1}>
          <div className={styles.content__name}>
            <div className={styles.text1}>{props.name1}</div>
            <div className={styles.list}>
              <div className={styles.text2}>{props.name4}</div>
              <div className={`${styles.icon1} ${props.icon1}`}></div>
            </div>
          </div>
          <div className={styles.content__name}>
            <div className={styles.text1}>{props.name2}</div>
            <div className={styles.list}>
              <div className={styles.text2}>{props.name5}</div>
              <div className={`${styles.icon1} ${props.icon1}`}></div>
            </div>
          </div>
          <div className={styles.content__name}>
            <div className={styles.text1}>{props.name3}</div>
            <div className={styles.list}>
              <div className={styles.text2}>{props.name6}</div>
              <div className={`${styles.icon1} ${props.icon1}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.content3}>
          <input type="checkbox" className={styles.input4} />
          <div className={styles.name2}>{props.name7}</div>
        </div>
        <button className={styles.name8}>{props.name8}</button>
      </div>
    </>
  );
}

export default Session7;
