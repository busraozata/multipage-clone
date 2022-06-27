import React, { useEffect, useState } from "react";
import HeadTitle from "../common/HeadTitle/HeadTitle";
import "./SinglePage.scss";
import { useParams, Link } from "react-router-dom";

import EmptyFile from "../common/EmptyFile/EmptyFile";
import { sData } from "./sData";
export default function SinglePages() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = sData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      {item ? (
        <section>
          <div className="container">
            <Link to="/destination" classname="primary-btn back">
              <i class="fa-solid fa-arrow-left"></i>
              Go Back
            </Link>
            <div className="row">
              <div className="col-lg-6">
                <article className="content ">
                  <div className="main-content">
                    <img src={item.image} alt="" className="img-fluid" />
                  </div>
                  {item.title}
                </article>
              </div>
              <div className="col-lg-6">
                
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
}
