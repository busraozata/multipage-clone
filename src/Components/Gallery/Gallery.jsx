import React from "react";
import { galleryData } from "../../api/dummyData";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import Card from "./Card";

export default function Gallery() {
  return (
    <>
      <HeadTitle />
      <section className="gallery">
        <div className="container">
          <div className="row">
            {galleryData.map((value, id) => {
              return <Card images={value.img} title={value.title} key={id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
