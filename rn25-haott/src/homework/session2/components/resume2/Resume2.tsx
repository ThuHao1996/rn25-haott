import React from "react";
import styles from "./Resume2.module.css";
import img from "./img/img.jpeg";

type Props = {
  name?: string;
  job?: string;
  text?: string;
  time?: string;
  time1?: string;
  time2?: string;
  time3?: string;
  time4?: string;
  text1?: string;
  text2?: string;
  desc?: string;
  desc1?: string;
  text3?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  address?: string;
  web?: string;
  phone?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  bgColor?: string;
  bgColor1?: string;
  bgColor2?: string;
  widthColor1?: number;
  widthColor2?: number;
  widthColor3?: number;
  widthColor4?: number;
};

function Resume2(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content1}>
          <div className={styles.content}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.content__right}>
              <h1 className={styles.name}>{props.name}</h1>
              <h2 className={styles.job}>{props.job}</h2>
            </div>
          </div>
          <div className={styles.content1__list}>
            <div className={styles.content1__item}>
              <h3 className={styles.heading}>{props.text}</h3>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>

                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time1}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time2}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time3}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.content1__item}>
              <h3 className={styles.heading}>{props.text1}</h3>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time1}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: props.bgColor2 }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time2}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
              <div className={styles.item__list}>
                <div className={styles.item1}>
                  <div className={styles.item1__left}>
                    <div
                      className={styles.color}
                      style={{
                        backgroundColor: props.bgColor2,
                      }}
                    ></div>
                    <div className={styles.list1}>
                      <div className={styles.time}>{props.time4}</div>
                      <div className={styles.text}>{props.text2}</div>
                    </div>
                  </div>
                  <div className={styles.list2}>
                    <div className={styles.text1}>{props.text2}</div>
                    <div className={styles.desc}>{props.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content1__footer}></div>
        </div>
        <div className={styles.content2}>
          <div className={styles.content2__list}>
            <div className={styles.content2__item}>
              <h2 className={styles.text5}>{props.text3}</h2>
              <div className={styles.content2__list}>
                <div className={styles.content2__item1}>
                  <div className={`${styles.icon1} ${props.icon1}`}></div>
                  <div className={styles.text3}>
                    <div className={styles.name1}>{props.name1}</div>
                    <div className={styles.address}>{props.address}</div>
                  </div>
                </div>
                <div className={styles.content2__item1}>
                  <div className={`${styles.icon1} ${props.icon2}`}></div>
                  <div className={styles.text3}>
                    <div className={styles.name1}>{props.name2}</div>
                    <div className={styles.address}>{props.web}</div>
                  </div>
                </div>
                <div className={styles.content2__item1}>
                  <div className={`${styles.icon1} ${props.icon3}`}></div>
                  <div className={styles.text3}>
                    <div className={styles.name1}>{props.name3}</div>
                    <div className={styles.address}>{props.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.content2__item}>
              <h2 className={styles.text5}>{props.text4}</h2>
              <div className={styles.content2__list}>
                <div
                  className={`${styles.content2__item1} ${styles.content2__desc}`}
                >
                  <div className={styles.name1}>{props.text5}</div>
                  <div
                    className={styles.color1}
                    style={{ backgroundColor: props.bgColor }}
                  >
                    <div
                      className={styles.color2}
                      style={{
                        backgroundColor: props.bgColor1,
                        width: props.widthColor1,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${styles.content2__item1} ${styles.content2__desc}`}
                >
                  <div className={styles.name1}>{props.text6}</div>
                  <div
                    className={styles.color1}
                    style={{ backgroundColor: props.bgColor }}
                  >
                    <div
                      className={styles.color2}
                      style={{
                        backgroundColor: props.bgColor1,
                        width: props.widthColor2,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${styles.content2__item1} ${styles.content2__desc}`}
                >
                  <div className={styles.name1}>{props.text7}</div>
                  <div
                    className={styles.color1}
                    style={{ backgroundColor: props.bgColor }}
                  >
                    <div
                      className={styles.color2}
                      style={{
                        backgroundColor: props.bgColor1,
                        width: props.widthColor3,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${styles.content2__item1} ${styles.content2__desc}`}
                >
                  <div className={styles.name1}>{props.text8}</div>
                  <div
                    className={styles.color1}
                    style={{ backgroundColor: props.bgColor }}
                  >
                    <div
                      className={styles.color2}
                      style={{
                        backgroundColor: props.bgColor1,
                        width: props.widthColor4,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.border}></div>
          <div className={styles.icon4}>
            <div className={`${styles.icon5} ${props.icon4}`}></div>
            <div className={`${styles.icon5} ${props.icon5}`}></div>
            <div className={`${styles.icon5} ${props.icon6}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume2;
