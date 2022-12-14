import React from "react";
import img from "./img/basic2.jpg";
import "./Basic2.css";

type Props = {};

const Basic2 = ({}: Props) => {
  return (
    <>
      <div className="content1 row row-cols-1 bg-light mg-auto">
        <div className="col-12 text-center">
          <img className="img1" src={img} alt="" />
        </div>
        <div className="col-12 mg-t pl-30">
          <h1 className="fs-15 fw-300 b-b pb-2">YOUNG SHOP</h1>
          <p className="text-primary fw-300 fs-15">Samsung UHD TV 24inch</p>
          <i className="fa-solid fa-star text-warning p-1"></i>
          <i className="fa-solid fa-star text-warning p-1"></i>
          <i className="fa-solid fa-star text-warning p-1"></i>
          <i className="fa-solid fa-star text-warning p-1"></i>
          <a href="#" className="link text-dark">
            <i className="icon fa-regular fa-star"></i>
          </a>
          <span className="text-black-50 p-3">02</span>
          <br />
          <span>$599</span>
        </div>
      </div>
    </>
  );
};

export default Basic2;
