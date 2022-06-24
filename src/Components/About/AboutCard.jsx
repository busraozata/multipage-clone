import React from "react";

export default function AboutCard() {
  return (
    <div className="aboutCard">
      <div className="row">
        <div className="col-lg-6">
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            aliquid quos, iste inventore qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quam blanditiis, corporis non reprehenderit veritatis!
          </p>
          <button className="secondary-btn">
            Explore More <i class="fa-solid fa-circle-right"></i>{" "}
          </button>
        </div>
        <div className="col-lg-6 ">
          <img src="./images/about-img-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
