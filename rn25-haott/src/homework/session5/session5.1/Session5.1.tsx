import React, { useState } from "react";
import "./Session5.1.css";

type Props = {};

function Baitap1({}: Props) {
  const [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <button className="btn" onClick={handleClick}>
        {isLike === true ? "Unlike" : "Like"}
      </button>
      {isLike === true ? (
        <i className="icon__name icon1 fa-solid fa-thumbs-up"></i>
      ) : (
        <i className="icon__name icon2 fa-regular fa-thumbs-up"></i>
      )}
    </>
  );
}

export default Baitap1;
