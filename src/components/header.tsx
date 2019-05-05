import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const HeaderStyle = styled.header`
  background: teal;
  margin-bottom: 1.45rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const TitleLink = css`
  color: white;
  text-decoration: none;
  box-shadow: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Container>
      <Title>
        <Link to="/" css={TitleLink}>
          {siteTitle}
        </Link>
      </Title>
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
