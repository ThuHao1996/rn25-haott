import React from "react";
import styles from "./Profile.module.css";

type Props = {
  name: string;
  iconType: string;
  bgColor1: string;
  bgColor2: string;
  widthColor: number;
};

function Profile(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          <i
            className={`${styles.icon} ${props.iconType}`}
            style={{ backgroundColor: props.bgColor1 }}
          ></i>
          <div className={styles.name}>{props.name}</div>
        </div>
        <div className={styles.item}>
          <div
            className={styles.item1}
            style={{ backgroundColor: props.bgColor1, width: props.widthColor }}
          ></div>
          <div
            className={styles.item2}
            style={{ backgroundColor: props.bgColor2 }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
