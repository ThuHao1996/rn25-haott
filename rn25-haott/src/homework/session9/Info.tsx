import React from "react";
import "./Person1.css";

type Props = {
  name?: string;
  job?: string;
};

function Info(props: Props) {
  return (
    <>
      <div className="info">
        <h1 className="heading">{props.name}</h1>
        <p className="job">{props.job}</p>
      </div>
    </>
  );
}

export default Info;
