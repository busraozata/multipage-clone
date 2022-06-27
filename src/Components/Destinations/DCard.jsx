import React from "react";
import { Link } from "react-router-dom";
export default function DCard({
  item: { id, image, title, desc, sidepara, paraImage_one, paraImage_two },
}) {
  return (
    <>
      <div className="col-lg-6 col-md-6 my-3">
        <div className="items">
          <div className="img">
            <img src={image} alt="" />
            <Link to={`/singlepage/${id}`}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
