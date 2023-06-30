import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const Container = styled.div`
`

const index = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>We made it!</h1>
      </Container>
    </Layout>
  )
}
export default index;
