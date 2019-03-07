import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Color } from '../css/color';

const Background = css({
  background: Color.teal,
  marginBottom: '1.45rem',
  h1: {
    margin: 0
  },
  a: {
    color: `white`,
    textDecoration: `none`,
  }
});

const Inner = css({
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
});

const Header = ({ siteTitle }) => (
  <div css={Background}>
    <div css={Inner}>
      <div>
        <h1>
          <Link to="/"> {siteTitle} </Link>
        </h1>
      </div>
      <div>
        <Link to="/"> ホーム </Link>
        <Link to="/blog"> ブログ </Link>
        <Link to="/policy"> ポリシー </Link>
        <Link to="/inquiry"> お問い合わせ</Link>
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
