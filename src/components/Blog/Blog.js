import React from "react";
import "./blog.css";

import Card from "./Blog Posts/card";
import Blogs from "./Blog Posts/blog_list";

export default function Blog() {
  /*console.log("Blog");*/
  return (
    <div className="full-section-blog-container">
      <Card
        title={Blogs[0].title}
        description={Blogs[0].description}
        author={Blogs[0].author}
      />
      <Card
        title={Blogs[1].title}
        description={Blogs[1].description}
        author={Blogs[1].author}
      />
    </div>
  );
}
