import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Im Makoto Nakano</h1>
    <Link to="/">Go back to home page</Link>
  </Layout>
);

export default AboutPage;
