import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>利用規約</h1>
    <p>ここに利用規約を記載します（予定）</p>
    <p>デザインちゃんとします笑</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage