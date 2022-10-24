import React, { useState } from "react";
import "./RateButton2.css";

type Props = {};

function RateButton2({}: Props) {
  const [star, setStar] = useState(0);
  const arrStar = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="icon__list">
        {arrStar?.map((index) => {
          return index <= star ? (
            <i
              key={index}
              onClick={() => setStar(index)}
              className="icon1 fa-solid fa-star"
            ></i>
          ) : (
            <i
              key={index}
              onClick={() => setStar(index)}
              className="icon1 fa-regular fa-star"
            ></i>
          );
        })}
      </div>
    </>
  );
}

export default RateButton2;
