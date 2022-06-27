import React, { useState } from "react";
import { sData } from "../../SinglePage/sData";
import DCard from "./DCard";

export default function AllItem() {
  const [items, setItem] = useState(sData);
  return (
    <section className="gallery desi mtop">
      <div className="container">
        <div className="content">
          <div className="row">
            {items.map((item) => {
              return <DCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
