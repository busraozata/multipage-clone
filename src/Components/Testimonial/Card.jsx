import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-lg-6 col-md-6 my-3">
        <div className="box">
          <i class="fa-solid fa-quote-left"></i>
          <div className="para">
            <p> {props.desc} </p>
          </div>
          <div className="details">
            <div className="img">
              <img src={props.profile} alt="" />
            </div>
            <div className="name">
              <h3>{props.name} </h3>
              <span> {props.post} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
