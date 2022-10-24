import React from 'react'
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import "./ImageViewer.css";

type Props = {}

function ImageViewer(props: Props) {
  return (
<>
<div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className= "img__name" src={img1} alt="" width="1400" height="600" />
    </div>
    <div className="carousel-item">
      <img className= "img__name" src={img2} alt="" width="1400" height="600" />
    </div>
    <div className="carousel-item">
      <img className= "img__name" src={img3} alt="" width="1400" height="600" />
    </div>
  </div>
  
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="icon__name1 carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="icon__name2 carousel-control-next-icon"></span>
  </a>
</div>
</>
    )
}

export default ImageViewer