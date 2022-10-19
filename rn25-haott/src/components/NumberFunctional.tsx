import React, { useState } from "react";

type Props = {};

function NumberClass({}: Props) {
  const [numberState, setState] = useState(0);
  const handleClick = () => {
    setState(numberState + 1);
    console.log("Clicked");
  };

  
  return (
    <>
      <button onClick={handleClick}> CLICK</button>
      <p>{numberState}</p>
    </>
  );
}

export default NumberClass;
