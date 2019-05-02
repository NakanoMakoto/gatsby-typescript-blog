import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PostPage = () => (
  <Layout>
    <SEO title="posts" />
    <h1> This is blog post Page</h1>
    <Link to="/"> Go Back</Link>
  </Layout>
);

export default PostPage;
