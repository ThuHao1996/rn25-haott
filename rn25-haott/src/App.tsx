import React from "react";
import logo from "./logo.svg";
import "./App.css";
import img from "./image/traffic.jpeg";

function App() {
  return (
    <>
      <div id="#app">
        <div className="header">
          <div className="header__heading">The Pulpit Rock</div>
        </div>
        <div className="content row">
          <div className="content1 col-3">
            <ul className="content1__list">
              <li className="content1__item">The Drive</li>
              <li className="content1__item">The Walk</li>
              <li className="content1__item">The Return</li>
              <li className="content1__item">The End</li>
            </ul>
          </div>
          <div className="content2 col-6">
            <div className="content2__heading">The Walk</div>
            <div className="content2__desc">
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and your
              physical shape.
            </div>
            <img className="content2__img" src={img} alt="" />
          </div>
          <div className="content3 col-3">
            <div className="content3__name">
              <div className="content3__heading">What?</div>
              <div className="content3__desc">
                The Pulpit Rock is a part of a mountain that looks like a
                pulpit.
              </div>
            </div>
            <div className="content3__name">
              <div className="content3__heading">Where?</div>
              <div className="content3__desc">
                The Pulpit Rock is in Norway.
              </div>
            </div>
            <div className="content3__name">
              <div className="content3__heading">Price?</div>
              <div className="content3__desc">The walk is free!</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="footer__desc"></p>
        </div>
      </div>
    </>
  );
}

export default App;
