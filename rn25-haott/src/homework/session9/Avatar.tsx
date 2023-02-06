import React from "react";
import "./Person1.css";

type Props = {
  img?: string;
};

function Avatar(props: Props) {
  return (
    <>
      <div className="avatar">
        <img className="img" src={props.img} alt="" />
      </div>
    </>
  );
}

export default Avatar;
