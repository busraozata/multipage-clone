import React from "react";
import "./HeadTitle.scss";
import { useLocation, Link } from "react-router-dom";
export default function HeadTitle() {
  const location = useLocation();
  return (
    <>
      <section className="image-heading d-flex">
        <div className="container">
          <h1>{location.pathname.replace("-", " ").split("/")[1]}</h1>

          <div>
            <Link to="/">Home</Link>/
            <span>{location.pathname.replace("-", " ").split("/")[1]}</span>
          </div>
        </div>
      </section>
    </>
  );
}
