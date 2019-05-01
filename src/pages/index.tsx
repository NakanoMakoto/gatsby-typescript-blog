import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (query: queryProps) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi there</h1>
    {query.data.allWorksYaml.edges.map(edge => {
      const work = edge.node;
      return (
        <div>
          {work.title} - {work.description} - {work.year}
        </div>
      );
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

interface queryProps {
  data: {
    allWorksYaml: {
      edges: [
        {
          node: {
            title: string;
            description: string;
            year: number;
          };
        }
      ];
    };
  };
}

export const query = graphql`
  query Indexpage {
    allWorksYaml {
      edges {
        node {
          title
          description
          year
        }
      }
    }
  }
`;

export default IndexPage;
