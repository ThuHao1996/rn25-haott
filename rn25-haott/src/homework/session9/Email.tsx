import React from "react";
import "./Person1.css";

type Props = {
  email?: string;
  emailTo?: string;
  bgColor?: string;
};

function Email(props: Props) {
  return (
    <>
      <div className="contact" style={{ backgroundColor: props.bgColor }}>
        <h2 className="contact-name">{props.email}</h2>
        <div className="address">
          <i className="icon-address fa-regular fa-envelope"></i>
          <p className="number">{props.emailTo}</p>
        </div>
      </div>
    </>
  );
}

export default Email;
