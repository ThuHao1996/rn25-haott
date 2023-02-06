import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ListPage from "./ListPage";
import NetWorking from "./NetWorking";
import DetailUser from "./DetailUser";
import "./Index.css";

function index() {
  return (
    <BrowserRouter>
      {/* NAVIGATION */}
      <ul className="navigation">
        <li className="link">
          <Link to="/">List</Link>
        </li>
        <li className="link">
          <Link to="/form">Form</Link>
        </li>
        <li className="link">
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      {/* ROUTES SETTINGS */}

      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/form" element={<NetWorking />} />
        <Route path="/detail/:id" element={<DetailUser />} />
        <Route
          path="*"
          element={
            <main>
              <p
                style={{
                  fontSize: "30px",
                  backgroundColor: "#b2d7d5",
                  padding: "130px",
                  textAlign: "center",
                }}
              >
                404 Page not found 😂😂😂
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
