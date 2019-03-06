import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#477E7F`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ホーム
        </Link>
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ブログ
        </Link>
        <Link
          to="/policy"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ポリシー
        </Link>
        <Link
          to="/inquiry"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          お問い合わせ
        </Link>
      </div>

    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
