import React from "react";
import img from "../image/basic1.jpg";

type Props = {};

function Basic1({}: Props) {
  return (
    <>
      <div id="app" className="app1">
        <div className="content row b-s align-items-center bg-light mg-auto">
          <div className="col-6 text-center pl-8">
            <img className="img" src={img} alt="" />
          </div>
          <div className="col-6">
            <h1 className="fs-18 f-w">Clothing & Apparel</h1>
            <p className="mb-0 fw-300 text-muted">Accessories</p>
            <p className="mb-0 fw-300 text-muted">Bags</p>
            <p className="mb-0 fw-300 text-muted">Kid's Fashion</p>
            <p className="mb-0 fw-300 text-muted">Mens</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic1;
