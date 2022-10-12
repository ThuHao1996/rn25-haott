import React from "react";
import img from "../image/basic3.jpg";

type Props = {};

const Basic3 = ({}: Props) => {
  return (
    <>
      <div id="app">
        <div className="content2 row row-cols-1 bg-light mg-auto">
          <div className="col-12 text-center p-20">
            <img className="img2" src={img} alt="" />
          </div>
          <div className="col-12">
            <p className="fs-15 text-black-50">Technology</p>
            <h1 className="fs-20 text-secondary">
              Harman Kadon Onyx Studio Mini, Reviews & Expriences
            </h1>
            <span className="fs-15 text-black-50">Feb 21, 2021 by</span>
            <span className="p-2 fw-300 fs-15">drfurion</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic3;
