import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import BlogCard from "../../components/blogCard";
import { blogList } from "../../components/blogCard.module.css";

export default function Blog({ data }) {
  const listData = data.allMdx.nodes;
  console.log(listData);

  return (
    <Layout pageTitle={"Blog Page"}>
      <div className={blogList}>
        {listData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        body
        id
        excerpt
      }
    }
  }
`;

export const Head = () => {
  return <Seo title={"My Blog Posts"} />;
};
