import { Link } from "gatsby"
import React from "react"
import { ArrowUpRight } from "react-feather"
import styled from "styled-components"


const Container = styled.div(({ theme }) => `
  padding: 0.75rem;
  background-color: ${theme.colors.cards.background};
  border: 1px solid ${theme.colors.borders};
  border-radius: 0.5rem;
  transition: ${theme.transitions.main};

  &:hover {
    background-color: ${theme.colors.cards.background_hover};
  }

  color: ${theme.colors.text.dark};
  p {
    margin: 0;
  }

  .title {
    color: ${theme.colors.text.dark};
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  
  .subtext {
    color: ${theme.colors.text.light};
    font-size: 1rem;
  }
`)

const Toolbar = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.light};

  p {
    font-size: 1rem;
  }
`)

const Content = styled.div(({ theme }) => `

  display: grid;
  grid-template-rows: 2.5fr 1fr;
  grid-gap: 0.5rem;
`)

const BlogCard = ({ frontmatter, fields }) => {
  return (
    <Link to={fields.path}>
      <Container>
        <Toolbar>
          <p>{frontmatter.category}</p>
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </Toolbar>
        <Content>
          <p className="title">{frontmatter.title}</p>
          <p className="subtext">{frontmatter.date} · {fields.readingTime.text}</p>
        </Content>
      </Container>
    </Link >
  )
}
export default BlogCard;