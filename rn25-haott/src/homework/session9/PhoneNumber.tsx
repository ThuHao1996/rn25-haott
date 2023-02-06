import React from "react";

type Props = {
  phone?: string;
  number?: number;
  bgColor1?: string;
};

function PhoneNumber(props: Props) {
  return (
    <>
      <div className="contact" style={{ backgroundColor: props.bgColor1 }}>
        <h2 className="contact-name">{props.phone}</h2>
        <div className="address">
          <i className="icon-address fa-solid fa-phone"></i>
          <p className="number">{props.number}</p>
        </div>
      </div>
    </>
  );
}

export default PhoneNumber;
