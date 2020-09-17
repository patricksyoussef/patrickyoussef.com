import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"
import { ListCard } from "./ListCard"

const Container = styled.div``
const TopBar = styled.div``
const TopContent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const Post = styled.div`
  margin: 0.4rem 0;
  transition: ${props => props.theme.anims.link};
  padding: 0.6rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.4rem;

  &:hover {
    border-color: gray;
    box-shadow: ${props => props.theme.shadows.s1};
  }
`

const LinkText = styled.h3`
  color: gray;
  transition: ${props => props.theme.anims.link};

  &:hover {
    color: ${props => props.theme.colors.dark1};
  }
`

export const IndexSection = ({ data, title, path, linktext }) => (
  <Container>
    <TopBar>
      <Underline>
        <TopContent>
          <h1>{title}</h1>
          <Link to={path}>
            <LinkText>{linktext}</LinkText>
          </Link>
        </TopContent>
      </Underline>
    </TopBar>
    <Content>
      {data.nodes.map(({ frontmatter, fields }) => (
        <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
      ))}
    </Content>
  </Container>
)
