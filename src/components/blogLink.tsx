import React from "react";
import { Link } from "gatsby";
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
`;

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

interface blogData {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
  excerpt;
}

const BlogLink = ({ data }: { data: blogData }) => {
  return (
    <Link to={`posts/${data.frontmatter.slug}`} css={CardLink}>
      <Container>
        <Title>{data.frontmatter.title}</Title>
        <Description>{data.frontmatter.date}</Description>
      </Container>
    </Link>
  );
};

export default BlogLink;
