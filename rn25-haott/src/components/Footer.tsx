import React from "react";

type Props = {
    footerDrops : string
};

function Footer(props: Props) {
  return (
    <>
      <div className="footer bg-ccc text-white text-center h-100">
        <p className="footer__desc">
          This web page is a part of a demonstration of fluid web design made by
          www.w3schools.com. Resize the browser window to see the content
          response to the resizing.
        </p>
        <p>{props.footerDrops}</p>
      </div>
    </>
  );
}

export default Footer;
