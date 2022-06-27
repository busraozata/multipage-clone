import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="box">
          <div className="img d-flex justify-content-center">
            <img src={props.cover} alt="" />
          </div>
          <div className="details">
            <h2>{props.title}</h2>
            <p> {props.desc} </p>
          </div>
        </div>
      </div>
    </>
  );
}
