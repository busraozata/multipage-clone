import React from "react";
import Card from "./Card";
import { tData } from "./Tdata";

export default function AllItem() {
  return (
    <section className="Testimonial mtop">
      <div className="container">
        <div className="row">
          {tData.map((value, index) => {
            return <Card key={index} {...value} />;
          })}
        </div>
      </div>
    </section>
  );
}
