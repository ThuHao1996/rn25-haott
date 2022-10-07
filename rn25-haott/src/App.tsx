import React from "react";
import logo from "./logo.svg";
import "./App.css";
import img from "./image/traffic2.jpg";

function App() {
  return (
    <>
      <div id="#app">
        <div className="header bg-ccc h-100">
          <div className="header__heading text-white">The Pulpit Rock</div>
        </div>
        <div className="content row p-30">
          <div className="content1 col-md-3">
            <ul className="content1__list">
              <li className="content1__item">The Drive</li>
              <li className="content1__item">The Walk</li>
              <li className="content1__item">The Return</li>
              <li className="content1__item">The End</li>
            </ul>
          </div>
          <div className="content2 col-md-6">
            <div className="content__heading">The Walk</div>
            <div className="content2__desc pb-30">
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and your
              physical shape.
            </div>
            <img className="content2__img" src={img} alt="" />
          </div>
          <div className="content3 col-md-3 h-75">
            <div className="content3__name pb-30">
              <div className="content__heading ">What?</div>
              <div className="content3__desc">
                The Pulpit Rock is a part of a mountain that looks like a
                pulpit.
              </div>
            </div>
            <div className="content3__name pb-30">
              <div className="content__heading">Where?</div>
              <div className="content3__desc">
                The Pulpit Rock is in Norway.
              </div>
            </div>
            <div className="content3__name pb-30">
              <div className="content__heading">Price?</div>
              <div className="content3__desc">The walk is free!</div>
            </div>
          </div>
        </div>
        <div className="footer bg-ccc text-white text-center h-100">
          <p className="footer__desc">
            This web page is a part of a demonstration of fluid web design made
            by www.w3schools.com. Resize the browser window to see the content
            response to the resizing.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
