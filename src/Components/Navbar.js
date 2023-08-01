import React from "react";
import "../Css-files/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <li>
            <a href="">Haqqımızda</a>
          </li>
          <li>
            <a href="">Nə üçün biz</a>
          </li>
          <li>
            <a href="">Biz necə işləyirik</a>
          </li>
          <li>
            <a href="">Endirimlər</a>
          </li>
          <li>
            <a href="">Layihələr</a>
          </li>
          <li>
            <a href="">Videolar</a>
          </li>
          <li>
            <a href="">Qiymətlər</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
