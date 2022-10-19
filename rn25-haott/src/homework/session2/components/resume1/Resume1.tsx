import React from "react";
import styles from "./Resume1.module.css";
import img from "./img/image.webp";

type Props = {
  name?: string;
  text1?: string;
  job?: string;
  desc?: string;
  text?: string;
  content?: string;
  text2?: string;
  number?: string;
  email?: string;
  email1?: string;
  web?: string;
  address?: string;
  text3?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  bgColor?: string;
  widthColor?: number;
  bgColor1?: string;
  img?: string;
};

function Resume1(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <img className={styles.img} src={img} alt="" />
            <div className={styles.content1__list}>
              <div className={styles.content1__item}>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.content}>{props.content}</div>
              </div>
              <div className={styles.content1__item}>
                <div className={styles.text}>{props.text2}</div>
                <div className={`${styles.content} ${styles.content__name}`}>
                  <li className={styles.information}>{props.number}</li>
                  <li className={styles.information}>{props.email}</li>
                  <li className={styles.information}>{props.email1}</li>
                  <li className={styles.information}>{props.web}</li>
                  <li className={styles.information}>{props.address}</li>
                </div>
              </div>
              <div className={styles.content1__item}>
                <div className={styles.text}>{props.text3}</div>
                <div className={styles.content}>
                  <div className={styles.content__item}>
                    <li className={styles.name}>{props.name1}</li>
                    <li className={styles.name}>{props.name2}</li>
                    <li className={styles.name}>{props.name3}</li>
                    <li className={styles.name}>{props.name4}</li>
                    <li className={styles.name}>{props.name5}</li>
                  </div>
                  <div className={styles.content__item}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor1 }}
                    >
                      <div
                        className={styles.color1}
                        style={{ backgroundColor: props.bgColor }}
                      ></div>
                    </div>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor1 }}
                    >
                      <div
                        className={styles.color1}
                        style={{ backgroundColor: props.bgColor }}
                      ></div>
                    </div>

                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor1 }}
                    >
                      <div
                        className={styles.color1}
                        style={{ backgroundColor: props.bgColor }}
                      ></div>
                    </div>

                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor1 }}
                    >
                      <div
                        className={styles.color1}
                        style={{ backgroundColor: props.bgColor }}
                      ></div>
                    </div>

                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor1 }}
                    >
                      <div
                        className={styles.color1}
                        style={{ backgroundColor: props.bgColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content1__item}>
                <div className={styles.text}>{props.text4}</div>

                <div className={`${styles.content} ${styles.content__name}`}>
                  <li className={styles.name}>{props.text5}</li>
                  <li className={styles.name}>{props.text5}</li>
                  <li className={styles.name}>{props.text5}</li>
                  <li className={styles.name}>{props.text5}</li>
                  <li className={styles.name}>{props.text5}</li>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <h1 className={styles.name1}>{props.name}</h1>
            <h2 className={styles.name2}>{props.text1}</h2>
            <h2 className={styles.job}>{props.job}</h2>
            <p className={styles.desc}>{props.desc}</p>
            <div className={styles.content2__list}>
              <h3 className={styles.heading}>{props.text6}</h3>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text7}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text7}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text7}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text7}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
            </div>
            <div className={styles.content2__list}>
              <h3 className={styles.heading}>{props.text8}</h3>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text9}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text9}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text9}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
              <div className={styles.content2__item}>
                <p className={styles.text7}>{props.text9}</p>
                <p className={styles.text8}>{props.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
}

export default Resume1;
