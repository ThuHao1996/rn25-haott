import React from "react";
import img1 from "./img1/img1.jpeg";
import img2 from "./img1/img2.jpeg";
import img3 from "./img1/img3.jpeg";
import img4 from "./img1/img4.jpeg";
import Avatar from "./Avatar";
import Info from "./Info";
import InfoContent from "./InfoContent";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";
import "./Person1.css";

type Props = {};

function Person1(props: Props) {
  return (
    <>
      <div className="container__list">
        <div className="content__list">
          <Avatar img={img1} />
          <Info name={"Robort Pattison"} job={"Developing"} />
          <InfoContent
            time={"23/05/2014"}
            text={"B+"}
            text1={"MCA"}
            text2={"Bangalore"}
          />
          <Email
            email={"EMAIL ID"}
            emailTo={"robot12@gmail.com"}
            bgColor={"#d83838"}
          />
          <PhoneNumber
            phone={"PHONE NO"}
            number={8665543219}
            bgColor1={"#58b958"}
          />
        </div>
        <div className="content__list">
          <Avatar img={img2} />
          <Info name={"James smith"} job={"Designer"} />
          <InfoContent
            time={"23/05/2014"}
            text={"B+"}
            text1={"MCA"}
            text2={"Bangalore"}
          />
          <Email
            email={"EMAIL ID"}
            emailTo={"smith12@gmail.com"}
            bgColor={"#85deee"}
          />
          <PhoneNumber
            phone={"PHONE NO"}
            number={8225543219}
            bgColor1={"#4c72c5"}
          />
        </div>
        <div className="content__list">
          <Avatar img={img3} />
          <Info name={"Tom Hanks"} job={"UI Designer"} />
          <InfoContent
            time={"23/05/2014"}
            text={"B+"}
            text1={"MCA"}
            text2={"Bangalore"}
          />
          <Email
            email={"EMAIL ID"}
            emailTo={"pete1@gmail.com"}
            bgColor={"#df7c4e"}
          />
          <PhoneNumber
            phone={"PHONE NO"}
            number={8225543929}
            bgColor1={"#f0d354"}
          />
        </div>
        <div className="content__list">
          <Avatar img={img4} />
          <Info name={"Silvester Stalin"} job={"Testing"} />
          <InfoContent
            time={"23/05/2014"}
            text={"B+"}
            text1={"MCA"}
            text2={"Bangalore"}
          />
          <Email
            email={"EMAIL ID"}
            emailTo={"point12@gmail.com"}
            bgColor={"#9f33a3"}
          />
          <PhoneNumber
            phone={"PHONE NO"}
            number={9937924265}
            bgColor1={"#e289db"}
          />
        </div>
      </div>
    </>
  );
}

export default Person1;
