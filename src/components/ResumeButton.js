import React from "react"
import styled from "styled-components"

const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => props.theme.colors.blue};
  padding: 0.25rem 0.5rem;
  margin-left: 0.75rem;

  transition: ${props => props.theme.anims.button};

  h3 {
    color: ${props => props.theme.colors.text_dark};
    transition: ${props => props.theme.anims.button};
  }

  &:hover {
    background-color: ${props => props.theme.colors.res_button};
  }
  &:hover h3 {
  }
`

const Text = styled.div`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.code};

  h3 {
    margin: 0;
  }
`

export const ResumeButton = () => (
  <a href="resume.pdf" target="_blank" rel="nofollow">
    <Button>
      <Text>
        <div>Resume</div>
      </Text>
    </Button>
  </a>
)
