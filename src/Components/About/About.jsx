import React from "react";
import AboutCard from "./AboutCard";
import "./about.scss";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
export default function About() {
  return (
    <>
      <HeadTitle />
      <section>
        <div className="container">
          <AboutCard />
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <img src="./images/feature-img-1.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <h1>
                Our <span>Features</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, minima.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, placeat?
              </p>
              <button className="control-btn">
                Explore More <i class="fa-solid fa-circle-right"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
