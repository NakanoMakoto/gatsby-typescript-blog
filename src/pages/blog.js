import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="blog" />
    <h1>ブログページです。</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage