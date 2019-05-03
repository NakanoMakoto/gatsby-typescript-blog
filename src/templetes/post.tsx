import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PostPage = (query: postQuery) => {
  const data: postData = query.data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      <SEO title="posts" />
      <h1>{data.frontmatter.title}</h1>
      <div>{data.frontmatter.date}</div>
      <div>{data.excerpt}</div>
      <Link to="/"> Go Back</Link>
    </Layout>
  );
};

interface postData {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
  excerpt: string;
}

interface postQuery {
  data: {
    allMarkdownRemark: {
      edges: {
        node: postData[];
      };
    };
  };
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default PostPage;
