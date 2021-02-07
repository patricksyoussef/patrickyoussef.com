import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const Container = styled.div`
`

const Grid = styled.div`
    padding: 1rem 0;
    margin: 0rem ${props => props.theme.spacings.wall};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1.5rem;
`

const TopContent = styled.span`
  * {
    margin: 0.2rem 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkText = styled.h3`
  color: ${props => props.theme.colors.text_gray};
  transition: ${props => props.theme.anims.link};

  &:hover {
    color: ${props => props.theme.colors.text_dark};
  }
`

const TestCard = styled.div`
width: 100%;
height: 220px;
background-color: blue;
`

export const ProjectSection = ( { data, title, path, linktext } ) => (
    <Container>
        <div>
            <Underline>
                <TopContent>
                <h1>{title}</h1>
                <Link to={path}>
                    <LinkText>{linktext}</LinkText>
                </Link>
                </TopContent>
            </Underline>
        </div>
        <Grid>
            <TestCard></TestCard>
            <TestCard></TestCard>
            <TestCard></TestCard>
        </Grid>
    </Container>
  )
  