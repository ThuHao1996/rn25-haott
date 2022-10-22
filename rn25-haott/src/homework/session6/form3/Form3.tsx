import React from "react";
import styles from "./Form3.module.css";
import img from "./img/img1.webp";
import img1 from "./img/img2.webp";
import img2 from "./img/img3.jpeg";
import img3 from "./img/img4.webp";
import img4 from "./img/img5.webp";
import Form3Formik from "./Form3Formik";

type Props = {
  name?: string;
  name4?: string;
  icon1?: string;
  name1?: string;
  name2?: string;
  text?: string;
  text1?: string;
  text7?: string;
  text8?: string;
};

function Form3(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content1}>
          <div className={styles.heading}>
            <div className={styles.heading1}>{props.name}</div>
            <div className={styles.heading1}>{props.name4}</div>
          </div>
          <div className={styles.img}>
            <img
              className={`${styles.img2} ${styles.img3}`}
              src={img1}
              alt=""
            />
            <img
              className={`${styles.img2} ${styles.img4}`}
              src={img2}
              alt=""
            />
            <img className={styles.img1} src={img} alt="" />

            <img
              className={`${styles.img2} ${styles.img5}`}
              src={img3}
              alt=""
            />
            <img
              className={`${styles.img2} ${styles.img6}`}
              src={img4}
              alt=""
            />
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.header}>
            <div className={`${styles.icon1} ${props.icon1}`}></div>
            <div className={styles.name}>{props.name1}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.name1}>{props.name2}</div>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.desc}>{props.text1}</div>
            <div className={styles.form}>
              <Form3Formik
                text2={"Username"}
                text4={"Password"}
                icon2={"fa-solid fa-square-check"}
                text5={"Remember me"}
                text6={"Reset Password?"}
                text9={"SIGN IN"}
              />
            </div>
            <div className={styles.footer}>
              <div className={styles.text4}>{props.text7}</div>
              <div className={styles.text5}>{props.text8}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form3;
