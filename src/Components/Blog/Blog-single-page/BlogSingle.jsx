import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { BlogDatas } from "../BlogData";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import EmptyFile from "../../../common/EmptyFile/EmptyFile";
import "./BlogSingle.scss";
export default function BlogSingle() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogDatas.find((item) => item.id === parseInt(id));
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
            <Link to="/blog" classname="primary-btn back">
              <i className="fa-solid fa-arrow-left"></i>
              Go Back
            </Link>
            <div className="row">
              <div className="col-lg-6">
                <article className="content ">
                  <div className="main-content">
                    <img src={item.cover} alt="" className="img-fluid" />
                  </div>
                  <div className="category d-flex justify-content-between">
                    <span> {item.date} </span>
                    <label> {item.category} </label>
                  </div>
                  <h1>{item.title}</h1>
                  <p> {item.desc} </p>
                  <p> {item.desc} </p>

                  <h2>Two Column Text Sample</h2>

                  <div className="row">
                    <div className="col-lg-6">
                      <p>{item.para}</p>
                    </div>
                    <div className="col-lg-6">
                      <p>{item.para}</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-6">
                <div className="side-content">
                  <div className="category-list">
                    <h2>Category</h2>
                    <ul>
                      {BlogDatas.map((item) => {
                        return <li>{item.category}</li>;
                      })}
                    </ul>
                  </div>
                </div>
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
