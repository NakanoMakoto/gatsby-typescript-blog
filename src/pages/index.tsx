import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (query: queryProps) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {query.data.allMarkdownRemark.edges.map(edge => {
      const node = edge.node;
      return (
        <Link to={`posts/${node.frontmatter.slug}`} key={node.id}>
          <div>
            <span>
              {node.frontmatter.title} — {node.frontmatter.date}
            </span>
            <div>{node.excerpt}</div>
          </div>
        </Link>
      );
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
            excerpt: string;
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
