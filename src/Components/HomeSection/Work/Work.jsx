import React from "react";
import Card from "./Card";
import { wData } from "./Wdata";
import "./Works.scss";
export default function Work() {
  return (
    <>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>How it works</h1>
            <div className="line"></div>
          </div>
          <div className="content">
            <div className="row">
              {wData.map((value, index) => {
                return (
                  <Card
                    key={index}
                    cover={value.cover}
                    title={value.title}
                    desc={value.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
