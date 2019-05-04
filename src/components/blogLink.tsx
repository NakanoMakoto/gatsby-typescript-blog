import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  max-width: 620px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h3`
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.48;
  color: #222;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: 4rem;
  margin-bottom: 1rem;
  color: #666666;
`;

const CardLink = css`
  text-decoration: none;

  &:hover ${Title} {
    color: teal;
  }
`;

const BlogLink = () => (
  <Link to="/" css={CardLink}>
    <Container>
      <Title>ブログのタイトルがここに入ります</Title>
      <Description>前回に引き続き、技術書典6にサークル主として参加させていただきました。
 技術同人誌界隈はかつてない盛り上がりを見せており、今回のサークル当落発表の際は地獄のようなタイムラインになっていました。そうい</Description>
    </Container>
  </Link>
);

export default BlogLink;
