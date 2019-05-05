import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography";
import DateUtils from "../utils/dateUtils";

const DateStyle = styled.p`
  display: block;
  margin-bottom: ${rhythm(0.5)};
  margin-top: ${rhythm(-1)};
`;

const PostPage = (query: postQuery) => {
  const data: postData = query.data.allMarkdownRemark.edges[0].node;
  console.log();
  return (
    <Layout>
      <SEO
        title={data.frontmatter.title}
        description={data.frontmatter.description || data.excerpt}
      />
      <DateStyle>{`${DateUtils.formatDate(data.frontmatter.date)}`}</DateStyle>
      <h1>{data.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </Layout>
  );
};

interface postData {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    description: string;
  };
  excerpt: string;
  html: any;
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
            description
          }
          excerpt
          html
        }
      }
    }
  }
`;

export default PostPage;
