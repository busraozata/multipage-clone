import React from "react";
import "./Download.scss";
export default function DDownload() {
  return (
    <section className="download top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Download Our App</h3>
            <h1>Wow! Get This Templete App For Your Mobile</h1>
            <ul>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
              <li>&#10003; GET PAPERLESS CONFIRMATION </li>
            </ul>
            <div className="img">
              <img
                src="./images/appstore-button.png"
                className="img-fluid"
                alt=""
              />
              <img
                src="./images/google-play-button.png"
                className="img-fluid my-3"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <img src="./images/app-image-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
