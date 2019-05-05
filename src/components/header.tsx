import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const HeaderStyle = styled.header`
  background: teal;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem; 
`

const TitleLink = css`
  color: teal;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link to="/" css={TitleLink}>
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;