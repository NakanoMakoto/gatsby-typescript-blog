import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const InquiryPage = () => (
  <Layout>
    <SEO title="inquiry" />
    <h1>お問い合わせ</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default InquiryPage