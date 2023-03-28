import React from "react";
import classes from "./Blogs.module.css";
import { BlogsData } from "../../assets/BlogsData";
import BlogCard from "../common/BlogCard/BlogCard";

const Blogs = () => {
  return (
    <>
      <div className={classes.featured_container}>
        <div className={classes.header}>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={classes.text1}
          >
            Blogs and Experiences
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className={classes.text2}
          >
            Latest News and Articles
          </p>
        </div>
        <div className={classes.cards_container}>
          {BlogsData.map((place, i) => {
            const { title, image, description, likes, comments, mins } = place;
            return (
              <BlogCard
                title={title}
                blogImage={image}
                likes={likes}
                comments={comments}
                description={description}
                mins={mins}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
