// All good sites need a clever/funny 404 page, Vader took the cake
// for mine

import React from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout"

const Container = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  div {
    grid-row-start: 1;
    grid-column-start: 1;
  }

  * {
    transition: ${props => props.theme.anims.project};
  }

  .hover_box {
    height:200px;
    width:200px;
    background-color: red;
  }

  .hover_box:hover {
    background-color: blue;

    h1 {
      color: white;
    }
  }

`

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <div className="hover_box">
          <h1>Patrick</h1>
        </div> 
      </Container>
    </Layout>
  )
}