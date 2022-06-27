import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogDatas } from "./BlogData";

export default function AllBlog() {
  const [items, setItems] = useState(BlogDatas);
  return (
    <>
      <section className="blog top">
        <div className="container">
          <div className="content">
            <div className="row">
              {items.map((item) => {
                return <BlogCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
