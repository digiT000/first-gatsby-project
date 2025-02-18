import React from "react";
import { Link } from "gatsby";
import {
  blogCard,
  blogTitle,
  blogDescription,
  blogDate,
} from "../components/blogCard.module.css";

export default function BlogCard({ blog }) {
  return (
    <Link className={blogCard} to={`/blog/${blog.frontmatter.slug}`}>
      <h3 className={blogTitle}>{blog.frontmatter.title}</h3>
      <p className={blogDescription}>{blog.excerpt}</p>
      <p className={blogDate}>{blog.frontmatter.date}</p>
    </Link>
  );
}
