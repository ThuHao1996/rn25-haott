import React from "react";
import "./Person1.css";

type Props = {
  time?: string;
  text?: string;
  text1?: string;
  text2?: string;
};

function InfoContent(props: Props) {
  return (
    <>
      <div className="info-content">
        <div className="content-info">
          <i className="icon fa-regular fa-calendar-days"></i>
          <p className="text">DOB</p>
        </div>
        <p className="text1">{props.time}</p>
      </div>
      <div className="info-content">
        <div className="content-info">
          <i className="icon fa-sharp fa-solid fa-heart"></i>
          <p className="text">BG</p>
        </div>
        <p className="text1">{props.text}</p>
      </div>
      <div className="info-content">
        <div className="content-info">
          <i className="icon fa-solid fa-graduation-cap"></i>
          <p className="text">EDU</p>
        </div>
        <p className="text1">{props.text1}</p>
      </div>
      <div className="info-content">
        <div className="content-info">
          <i className="icon fa-sharp fa-solid fa-location-dot"></i>
          <p className="text">RES</p>
        </div>
        <p className="text1">{props.text2}</p>
      </div>
    </>
  );
}

export default InfoContent;
