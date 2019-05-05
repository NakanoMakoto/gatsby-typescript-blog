import { graphql } from "gatsby";
import React from "react";
import BlogLink from "../components/blogLink";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (query: queryProps) => (
  <Layout>
    <SEO title="" keywords={[`gatsby`, `programming`]} />
    {query.data.allMarkdownRemark.edges.map(edge => {
      const node = edge.node;
      return <BlogLink data={node} key={node.id} />;
    })}
  </Layout>
);

interface queryProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
              slug: string;
            };
            excerpt;
          };
        }
      ];
    };
  };
}

export const query = graphql`
  query blogPosts {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
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

export default IndexPage;
