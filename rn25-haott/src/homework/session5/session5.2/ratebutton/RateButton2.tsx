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
              onClick={() => setStar(index)}
              className="icon1 fa-solid fa-thumbs-up"
            ></i>
          ) : (
            <i
              onClick={() => setStar(index)}
              className="icon1 fa-regular fa-thumbs-up"
            ></i>
          );
        })}
      </div>
    </>
  );
}

export default RateButton2;
