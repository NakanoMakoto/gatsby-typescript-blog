import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (query: queryProps) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi there</h1>
    {query.data.allMarkdownRemark.edges.map(edge => {
      const node = edge.node;
      return (
        <div key={node.id}>
          <span>
            {node.frontmatter.title}{" "} — {node.frontmatter.date}
          </span>
          <div>
            {node.excerpt}
          </div>
        </div>
      );
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

interface queryProps {
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "id": string,
            "frontmatter": {
              "title": string,
              "date": string
            },
            "excerpt": string
          }
        }
      ]
    }
  }
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
        }
        excerpt
      }
    }
  }
}
`;

export default IndexPage;
