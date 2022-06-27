import React from "react";
import { Link } from "react-router-dom";
export default function BlogCard({
  item: { id, date, category, title, cover, para, desc },
}) {
  return (
    <>
      <div className="col-lg-6 col-mg-6 my-3">
        <div className="items">
          <div className="img">
            <img src={cover} alt="" />
          </div>
          <div className="category d-flex justify-content-between">
            <span>{date}</span>
            <label> {category} </label>
          </div>
          <div className="details">
            <h3> {title} </h3>
            <p> {para} </p>
            <p>{desc}</p>
          </div>
          <Link to={`/blogsingle/${id}`} className="blogItem-link">
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
}
